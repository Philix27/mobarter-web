'use client';
import { ReactNode } from 'react';
import { AdminSidebar } from './_comps';
import { CoreLayoutWrapper } from '@/comps';
import { NavbarMarketing } from '@/(marketing)/_comps';
import { AppStores } from '@/lib';
import { InfoView } from './_comps/InfoView';

export default function AdminLayout(props: { children: ReactNode }) {
  // return <CoreLayoutWrapper hideBottomNav={true}>{props.children}</CoreLayoutWrapper>;
  const store = AppStores.useSettingsStore();
  return (
    <CoreLayoutWrapper>
      <NavbarMarketing title={'Gasonomy'} />
      <div className="flex w-full h-full">
        {store.sidebarOpen && <AdminSidebar />}
        <div className="w-full">{props.children}</div>
        {store.infoTabOpen && <InfoView />}
      </div>
    </CoreLayoutWrapper>
  );
}
