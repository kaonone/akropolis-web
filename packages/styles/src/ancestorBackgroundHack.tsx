import React, { createContext, useContext } from 'react';
import { useTheme } from '@material-ui/core/styles';

const AncestorBackgroundHackContext = createContext<ProvidedAncestorBackground | null>(null);

export function useAncestorBackgroundHack(): ProvidedAncestorBackground {
  const context = useContext(AncestorBackgroundHackContext);
  const theme = useTheme();

  return (
    context || {
      backgroundColor: theme.palette.background.default,
      loaderBackgroundColor: theme.colors.jaguar,
    }
  );
}

type Props = {
  backgroundColor?: string;
  loaderBackgroundColor?: string;
  children: React.ReactNode;
};

export function AncestorBackgroundHackProvider(props: Props) {
  const { backgroundColor, loaderBackgroundColor, children } = props;

  return (
    <AncestorBackgroundHackContext.Provider value={{ backgroundColor, loaderBackgroundColor }}>
      {children}
    </AncestorBackgroundHackContext.Provider>
  );
}

export type ProvidedAncestorBackground = {
  backgroundColor?: string;
  loaderBackgroundColor?: string;
};
