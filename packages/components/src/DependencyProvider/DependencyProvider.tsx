import React, { useMemo } from 'react';
import { mainnetTokens } from '@akropolis-web/primitives';

import { DependencyContext, TokenAddresses } from './DependencyContext';

type Props = {
  supportedTokens?: TokenAddresses;
  children: React.ReactNode;
};

export function DependencyProvider(props: Props) {
  const { supportedTokens = mainnetTokens, children } = props;

  const context: DependencyContext = useMemo(() => ({ supportedTokens }), [supportedTokens]);

  return <DependencyContext.Provider value={context}>{children}</DependencyContext.Provider>;
}
