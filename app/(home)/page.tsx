'use client';

import React from 'react';
import { TextP } from '@/comps';
import { cn, useAppRouter } from '@/lib';
import { SearchInput } from '@/(core)/_comps';

export default function Home() {
  const router = useAppRouter();

  return (
    <div className={'flex flex-col items-center justify-center w-full h-full'} style={{ overscrollBehavior: 'none' }}>
      <div className="w-[60%] h-full flex flex-col items-center justify-center">
        <SearchInput onClick={(e: string) => router.push('/search')} />
        <div className="flex mt-4 cursor-pointer flex-wrap justify-center">
          {tags.map((val, i) => (
            <div key={i} className={cn('text-white rounded-full py-1 px-4 mx-2 my-2', val.bg)}>
              <TextP className="text-xs">{val.title}</TextP>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const tags: {
  title: string;
  bg: string;
}[] = [
  {
    title: 'Blockchains',
    bg: 'bg-orange-500',
  },
  {
    title: 'Subsystems',
    bg: 'bg-purple-500',
  },
  {
    title: 'RPC Providers',
    bg: 'bg-blue-500',
  },
  {
    title: 'Auth Providers',
    bg: 'bg-blue-500',
  },
  {
    title: 'Toolings',
    bg: 'bg-blue-500',
  },
];
