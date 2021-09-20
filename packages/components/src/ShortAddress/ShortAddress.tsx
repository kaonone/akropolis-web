import React, { useState, useCallback, useRef } from 'react';
import cn from 'classnames';
import Tooltip from '@material-ui/core/Tooltip';
import CopyToClipboard from 'react-copy-to-clipboard';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import { useTheme } from '@akropolis-web/styles';
import IconButton from '@material-ui/core/IconButton';

import { getShortAddress } from '../temp23/getShortAddress';
import { CopyIcon } from '../icons/CopyIcon';
import { AddressIcon } from '../AddressIcon/AddressIcon';
import { useStyles } from './ShortAddress.style';

type Props = {
  address: string;
  disableCopy?: boolean;
  withIcon?: boolean;
  variant?: 'filled' | 'text';
};

function ShortAddress(props: Props) {
  const { address, disableCopy, withIcon, variant = 'text' } = props;
  const classes = useStyles();
  const theme = useTheme();

  const [tooltipTitle, setTooltipTitle] = useState<'copy' | 'copied'>('copy');
  const closeTimeout = useRef(0);

  const shortAddress = getShortAddress(address);

  const handleCopy = useCallback(() => {
    setTooltipTitle('copied');
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

  const renderAddress = () => (
    <span className={cn(classes.shortAddress, { [classes.variantFilled]: variant === 'filled' })}>
      {shortAddress}
    </span>
  );

  return (
    <Grid container alignItems="center" wrap="nowrap" className={classes.root}>
      {withIcon && (
        <Grid item>
          <Avatar className={classes.addressIcon}>
            <AddressIcon address={address} fontSize="inherit" />
          </Avatar>
        </Grid>
      )}
      <Grid item>{renderAddress()}</Grid>
      {!disableCopy && (
        <Grid item className={classes.copyItem}>
          <Tooltip
            title={tooltipTitle}
            onClose={handleTooltipClose}
            onOpen={handleTooltipOpen}
            placement="bottom"
            enterTouchDelay={0}
            classes={{
              tooltip: classes.tooltip,
            }}
          >
            <IconButton className={classes.copyButton} onTouchStart={handleCopy}>
              <CopyToClipboard onCopy={handleCopy} text={address}>
                <CopyIcon fontSize="inherit" />
              </CopyToClipboard>
            </IconButton>
          </Tooltip>
        </Grid>
      )}
    </Grid>
  );
}

export { ShortAddress };
