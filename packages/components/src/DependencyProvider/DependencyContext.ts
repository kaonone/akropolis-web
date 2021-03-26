import { createContext, useContext } from 'react';

type TokenSymbol = string;
type TokenAddress = string;

export type TokenAddresses = Record<TokenSymbol, TokenAddress>;

export const DependencyContext = createContext<DependencyContext | null>(null);

// eslint-disable-next-line @typescript-eslint/no-redeclare
export interface DependencyContext {
  supportedTokens: TokenAddresses;
}

export function useDependencyContext(): DependencyContext {
  const context = useContext(DependencyContext);
  if (!context) {
    throw new Error('DependencyContext is not found');
  }
  return context;
}
