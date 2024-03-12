import React from 'react'
import { VuiButtonPrimary, VuiFlexContainer, VuiFlexItem } from '../../ui'
import { FaPlus } from 'react-icons/fa6'
import './memory.scss'
import MemorySearch from './MemorySearch';
import { IoShareSocial } from 'react-icons/io5';
import MultipleChoice from './MultipleChoice';

function memoryHeader() {
    return (
        <div
            className='memoryHeader'
        >
            <VuiFlexItem grow={2} alignItems='start'>
                <VuiFlexContainer alignItems='center' spacing='none' className='new-multiple'>
                    <VuiButtonPrimary color='primary' size='m' className='memoryButtons'>
                        <FaPlus />&nbsp;New
                    </VuiButtonPrimary>
                    <VuiButtonPrimary color='primary' size='m' className='memoryButtons'>
                        <IoShareSocial size="18px" />&nbsp;Share Your Library
                    </VuiButtonPrimary>
                    <MultipleChoice />
                </VuiFlexContainer>
            </VuiFlexItem>
            <VuiFlexItem grow={1}>
                <MemorySearch />
            </VuiFlexItem>
        </div>
    )
}

export default memoryHeader