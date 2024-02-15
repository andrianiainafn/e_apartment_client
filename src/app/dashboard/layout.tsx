import React, {PropsWithChildren} from 'react';
import Navigation from "@/app/dashboard/_components/navigation";

function DashboardLayout({children} :PropsWithChildren) {
    return (
        <main className='bg-white flex h-screen'>
            <aside className='flex flex-[5%] flex-col bg-[#EAD9CC]'>
                <Navigation/>
            </aside>
            <div className='flex flex-[95%]'>
                {children}
            </div>
        </main>
    );
}

export default DashboardLayout;