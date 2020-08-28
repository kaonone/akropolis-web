import { Token } from './Token';
import { zeroAddress } from '../constants';

export class AllCoinsToken extends Token {
  constructor(public readonly tokens?: Token[]) {
    super(zeroAddress, 'All Coins', 18);
  }
}
