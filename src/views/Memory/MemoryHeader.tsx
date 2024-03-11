import React from 'react'
import { VuiButtonPrimary, VuiFlexItem } from '../../ui'
import { FaPlus } from 'react-icons/fa6'
import './memory.scss'
import MemorySearch from './MemorySearch';
import { IoShareSocial } from 'react-icons/io5';

function memoryHeader() {
    return (
        <div
            className='memoryHeader'
        >
            <VuiFlexItem>
                <VuiButtonPrimary color='primary' size='l' className='memoryButtons'>
                    <IoShareSocial size="18px" />&nbsp;Share Your Library
                </VuiButtonPrimary>
            </VuiFlexItem>
            <VuiFlexItem>
                <MemorySearch />
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