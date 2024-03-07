import React from 'react'
import { VuiSearchInput } from '../../ui'
import './memorySearch.scss'
import { useConfigContext } from '../../contexts/ConfigurationContext';

function MemorySearch() {
    const { searchHeader } = useConfigContext();

    return (
        <>
            <div className="searchControls">
                <VuiSearchInput
                    size="l"
                    placeholder={searchHeader.placeholder ?? ""}
                    autoFocus
                    className='memorySearch'
                />
            </div>
        </>
    )
}

export default MemorySearch