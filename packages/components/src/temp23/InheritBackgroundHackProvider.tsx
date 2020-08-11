import React, { createContext, useContext } from 'react';
import { useTheme } from '@akropolis-web/styles';

const InheritBackgroundHackContext = createContext<string | null>(null);

export function useInheritBackgroundHackStyles(): string {
  const context = useContext(InheritBackgroundHackContext);
  const theme = useTheme();

  return context || theme.palette.background.default;
}

type Props = {
  backgroundColor: string | null;
  children: React.ReactNode;
};

export function InheritBackgroundHackProvider(props: Props) {
  const { backgroundColor, children } = props;

  return (
    <InheritBackgroundHackContext.Provider value={backgroundColor}>
      {children}
    </InheritBackgroundHackContext.Provider>
  );
}

export type InheritBackgroundHackStyles = {
  backgroundColor: string;
};
