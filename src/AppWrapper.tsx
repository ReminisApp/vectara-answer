import React, { useEffect, useMemo } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Search from './views/search'
import Memory from './views/Memory'
import { useConfigContext } from './contexts/ConfigurationContext';

function useQuery() {
    const { search } = useLocation();

    return useMemo(() => new URLSearchParams(search), [search]);
}

function AppWrapper() {
    const { setMemid } =
        useConfigContext();

    const query = useQuery();
    useEffect(() => {
        const memid = query.get("memid") ?? window.localStorage.getItem("memid")
        setMemid(memid ?? "");
        window.localStorage.setItem("memid", memid ?? "test");
    }, [query, setMemid]);


    return (
        <Routes>
            <Route path="/" element={<Search />} />
            <Route path="/memory" element={<Memory />} />
        </Routes>
    )
}

export default AppWrapper