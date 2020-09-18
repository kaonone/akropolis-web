import React from 'react';
import { createStyles, withStyles } from '@material-ui/styles';

type Size = 'full' | 'compressed';
type ClsNames = keyof typeof styles;

type Props = {
  children: (variant: Size) => JSX.Element;
  classes: Record<ClsNames, string>;
};

type State = {
  size: Size;
};

export class ResizeObserver extends React.PureComponent<Props, State> {
  public state: State = {
    size: 'full',
  };

  // eslint-disable-next-line react/sort-comp
  private handleResize = () => {
    const container = this.ref.current as HTMLDivElement;
    const copy = container.children[1] as HTMLDivElement;
    if (copy.offsetWidth > container.offsetWidth) {
      this.setState({ size: 'compressed' });
    } else {
      this.setState({ size: 'full' });
    }
  };

  private observer = new (window as any).ResizeObserver(this.handleResize);

  private ref = React.createRef<HTMLDivElement>();

  componentDidMount() {
    this.observer.observe(this.ref.current);
  }

  componentWillUnmount() {
    this.observer.unobserve(this.ref.current);
  }

  public render() {
    const { children, classes } = this.props;
    const { size } = this.state;
    return (
      <div className={classes.resizeContainer} ref={this.ref}>
        <div className={classes.original}>{children(size)}</div>
        <div className={classes.hiddenCopy}>{children('full')}</div>
      </div>
    );
  }
}

const styles = createStyles({
  resizeContainer: {
    position: 'relative',
    flex: '1 1 1rem',
  },
  original: {
    position: 'absolute',
    top: 0,
    transform: 'translateY(-50%)',
    right: 0,
  },
  hiddenCopy: {
    position: 'absolute',
    visibility: 'hidden',
  },
});

export const ResizeObserverComponent = withStyles(styles)(ResizeObserver);
