import React from 'react'
import { VuiSearchInput } from '../../ui'
import './memorySearch.scss'

function MemorySearch() {
    return (
        <>
            <div className="searchControls">
                <VuiSearchInput
                    size="l"
                    placeholder="Ask from your memory"
                    autoFocus
                    className='memorySearch'
                />
            </div>
        </>
    )
}

export default MemorySearch