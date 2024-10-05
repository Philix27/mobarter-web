export type IEcosystem = 'ETHEREUM' | 'POLKADOT' | 'SOLANA' | 'BITCOIN' | 'COSMOS' | 'SUBSTRATE' | 'NEAR';

export interface ICommon {
  name: string;
  ecosystem: IEcosystem;
  article: string;
  shortIntro: string;
  logo: string;
  baseUrl: string;
  taxon: 'BLOCKCHAIN' | 'TOOLS' | 'PACKAGE';
}

export interface ITools {
  repoLink: string;
  category: 'RPC' | 'AUTH_PROVIDER' | 'WALLET';
}

export interface IPackage {
  githubLink?: string;
  language: 'SOLIDITY' | 'TS & JS' | 'PYTHON' | 'RUST';
}

export interface IBlockchain extends ICommon {
  layers: 'LAYER 1' | 'LAYER 2';
  tools?: ITools;
  package?: IPackage;
}
