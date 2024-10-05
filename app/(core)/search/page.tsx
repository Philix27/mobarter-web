'use client';

import React from 'react';
import { TextP } from '@/comps';
import { invoices } from './data';
import { AppStores } from '@/lib';
import { SearchInput } from '../_comps';

export default function Page() {
  const store = AppStores.useSettings();
  return (
    <>
      <div className={'w-full h-full py-4 px-4 flex flex-col items-center'}>
        {/* <div className="w-[40%] mb-4"> */}
        <SearchInput className="w-[40%] mb-4" />
        {/* </div> */}
        {invoices.map((val, i) => (
          <div
            key={i}
            className="w-full hover:bg-accent grid grid-cols-4 self-center p-2 border-b"
            onClick={() => {
              store.update({ infoTabOpen: true, drawerIsOpen: false });
            }}
          >
            <TextP>{val.invoice}</TextP>
            <TextP>{val.paymentStatus}</TextP>
            <TextP>{val.paymentMethod}</TextP>
            <TextP>{val.totalAmount}</TextP>
          </div>
        ))}
      </div>
    </>
  );
}
