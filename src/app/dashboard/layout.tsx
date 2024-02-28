import React, {PropsWithChildren} from 'react';
import Navigation from "@/app/dashboard/_components/navigation/navigation";
import TopBar from "@/app/dashboard/_components/navigation/top_bar";

function DashboardLayout({children} :PropsWithChildren) {
    return (
        <main className='bg-[#fefefe] flex h-screen'>
            <aside className='flex  flex-[5%] flex-col bg-[#2E3B47]'>
                <Navigation/>
            </aside>
            <div className='flex flex-col flex-[95%] p-5 space-y-6'>
                <TopBar/>
                <div className=''>
                    {children}
                </div>
            </div>
        </main>
    );
}

export default DashboardLayout;