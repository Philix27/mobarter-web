export type IEcosystem = 'Ethereum' | 'POLKADOT' | 'SOLANA' | 'BITCOIN' | 'COSMOS' | 'SUBSTRATE' | 'NEAR';

export interface ICommon {
  name: string;
  ecosystem: IEcosystem;
  article: string;
  shortIntro: string;
  logo: string;
  baseUrl: string;
  taxon: 'BLOCKCHAIN' | 'TOOLS' | 'PACKAGE';
}

export interface IBlockchain extends ICommon {
  layers: 'LAYER 1' | 'LAYER 2';
}

export interface ITools extends ICommon {
  repoLink: string;
  category: 'RPC' | 'AUTH_PROVIDER' | 'WALLET';
}

export interface IPackage extends ICommon {
  githubLink?: string;
  language: 'SOLIDITY' | 'TS & JS' | 'PYTHON' | 'RUST';
}
