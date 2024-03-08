import React from 'react'
import { VuiButtonPrimary, VuiFlexItem } from '../../ui'
import { FaPlus } from 'react-icons/fa6'
import './memory.scss'
import { FaShare } from "react-icons/fa";

function memoryHeader() {
    return (
        <div
            className='memoryHeader'
        >
            <VuiFlexItem>
                <VuiButtonPrimary color='primary' size='l' className='memoryButtons'>
                    <FaShare />&nbsp;Share
                </VuiButtonPrimary>
            </VuiFlexItem>
            <VuiFlexItem>
                <VuiButtonPrimary color='primary' size='l' className='memoryButtons'>
                    <FaPlus />&nbsp;New
                </VuiButtonPrimary>
            </VuiFlexItem>
        </div>
    )
}

export default memoryHeader