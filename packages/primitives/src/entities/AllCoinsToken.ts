import { Token } from './Token';
import { zeroAddress } from '../constants';

export class AllCoinsToken extends Token {
  constructor(public readonly tokens?: Token[], symbol: string = 'All Coins') {
    super(zeroAddress, symbol, 18, 'eth');
  }
}
