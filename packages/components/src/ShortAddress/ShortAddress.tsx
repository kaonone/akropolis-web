import React, { useState, useCallback, useRef } from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import CopyToClipboard from 'react-copy-to-clipboard';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import { useTheme } from '@akropolis-web/styles';

import { getShortAddress } from '../temp23/getShortAddress';
import { AddressIcon } from '../AddressIcon/AddressIcon';
import { useStyles } from './ShortAddress.style';

type Props = {
  address: string;
  disableCopy?: boolean;
  withIcon?: boolean;
};

function ShortAddress(props: Props) {
  const { address, disableCopy, withIcon } = props;
  const classes = useStyles();
  const theme = useTheme();

  const [tooltipTitle, setTooltipTitle] = useState<'copy' | 'copied!'>('copy');
  const closeTimeout = useRef(0);

  const shortAddress = getShortAddress(address);

  const handleCopy = useCallback(() => {
    setTooltipTitle('copied!');
  }, []);

  const handleTooltipClose = useCallback(() => {
    if (tooltipTitle !== 'copy') {
      closeTimeout.current = window.setTimeout(
        () => setTooltipTitle('copy'),
        theme.transitions.duration.shorter,
      );
    }
  }, [theme.transitions.duration.shorter, tooltipTitle]);

  const handleTooltipOpen = useCallback(() => {
    clearTimeout(closeTimeout.current);
  }, []);

  const renderGridWithIcon = () => (
    <Grid container alignItems="center" wrap="nowrap" className={classes.root}>
      {withIcon && (
        <Grid item>
          <Avatar className={classes.icon}>
            <AddressIcon address={address} fontSize="inherit" />
          </Avatar>
        </Grid>
      )}
      <Grid item>
        {disableCopy ? (
          renderAddress()
        ) : (
          <CopyToClipboard text={address} onCopy={handleCopy}>
            {renderAddress()}
          </CopyToClipboard>
        )}
      </Grid>
    </Grid>
  );

  const renderAddress = () => <span className={classes.shortAddress}>{shortAddress}</span>;

  return disableCopy ? (
    renderGridWithIcon()
  ) : (
    <Tooltip
      className={classes.tooltip}
      title={tooltipTitle}
      onClose={handleTooltipClose}
      onOpen={handleTooltipOpen}
      placement="bottom"
    >
      {renderGridWithIcon()}
    </Tooltip>
  );
}

export { ShortAddress };
