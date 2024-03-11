import React from 'react'
import { VuiSearchInput } from '../../ui'
import './memorySearch.scss'

function MemorySearch() {
    return (
        <>
            <div className="memorySearchControls">
                <VuiSearchInput
                    size="l"
                    placeholder="Ask From Your Memory"
                    autoFocus
                    className='memorySearch'
                />
            </div>
        </>
    )
}

export default MemorySearch