import React from 'react'
import './memoryContent.scss'
import { VuiCheckbox, VuiFlexContainer, VuiFlexItem, VuiText } from '../../ui'

function MemoyContentHeader() {
    return (
        <VuiFlexContainer
            direction='row'
            className='contentHeader'
            alignItems='center'
            spacing='s'
        >
            <VuiFlexItem>
                <VuiCheckbox checked={false} onChange={() => true}/>
            </VuiFlexItem>
            <VuiFlexItem className='header1'>
                <VuiText size='l'>
                    Name
                </VuiText>
            </VuiFlexItem>
            <VuiFlexItem className='header2'>
                <VuiText size='l'>
                    Uploaded On
                </VuiText>
            </VuiFlexItem>
            <VuiFlexItem className='header3'>
                <VuiText size='l'>
                    Copy to GPT
                </VuiText>
            </VuiFlexItem>
            <VuiFlexItem className='header4'>
                <VuiText size='l'>
                    Delete
                </VuiText>
            </VuiFlexItem>
        </VuiFlexContainer>
    )
}

export default MemoyContentHeader