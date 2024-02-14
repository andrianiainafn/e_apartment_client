'use client'
import React from "react";
import {dehydrate, Hydrate, QueryClientProvider} from "react-query";
import {ReactQueryDevtools} from "react-query/devtools";
import {queryClient} from "@/_lib/query_clients";


export default  function ReactQueryClientProvider({children ,}: {
    children: React.ReactNode
}) {
    const dehydratedState = dehydrate(queryClient);
    return (
        <QueryClientProvider client={queryClient}>
            <Hydrate  state={dehydratedState}>
                {children}
            </Hydrate>
            <ReactQueryDevtools initialIsOpen={true}/>
        </QueryClientProvider>
    )
}