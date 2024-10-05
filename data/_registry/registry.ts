import { IBlockchain } from '../_types';
import { celoChain } from '../C';
import { solanaChain } from '../S';

export const chainRegistry: Array<IBlockchain> = [celoChain, solanaChain];
