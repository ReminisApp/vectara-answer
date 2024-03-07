import React from 'react'
import { VuiButtonPrimary, VuiFlexItem, VuiText } from '../../ui'
import { FaPlus } from 'react-icons/fa6'
import './memory.scss'

function memoryHeader() {
    return (
        <div
            className='memoryHeader'
        >
            <VuiFlexItem>
                <VuiText size='l' className='pathText'>
                    My Memory
                </VuiText>
            </VuiFlexItem>
            <VuiFlexItem>
                <VuiButtonPrimary color='primary' size='l'>
                    <FaPlus />&nbsp;New
                </VuiButtonPrimary>
            </VuiFlexItem>
        </div>
    )
}

export default memoryHeader