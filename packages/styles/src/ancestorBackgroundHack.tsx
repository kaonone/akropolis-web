import React, { createContext, useContext } from 'react';
import { useTheme } from '@material-ui/core/styles';

const AncestorBackgroundHackContext = createContext<string | null>(null);

export function useAncestorBackgroundHack(): string {
  const context = useContext(AncestorBackgroundHackContext);
  const theme = useTheme();

  return context || theme.palette.background.default;
}

type Props = {
  backgroundColor: string | null;
  children: React.ReactNode;
};

export function AncestorBackgroundHackProvider(props: Props) {
  const { backgroundColor, children } = props;

  return (
    <AncestorBackgroundHackContext.Provider value={backgroundColor}>
      {children}
    </AncestorBackgroundHackContext.Provider>
  );
}

export type ProvidedAncestorBackground = {
  backgroundColor: string;
};
