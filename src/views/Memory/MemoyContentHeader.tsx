import React from 'react'
import './memory.scss'
import { VuiCheckbox, VuiFlexContainer, VuiFlexItem, VuiText } from '../../ui'

function MemoyContentHeader() {
    return (
        <VuiFlexContainer
            direction='row'
            className='contentHeader'
            alignItems='center'
        >
            <VuiFlexItem>
                <VuiCheckbox checked={false} onChange={() => true}/>
            </VuiFlexItem>
            <VuiFlexItem grow={5}>
                <VuiText size='l'>
                    Name
                </VuiText>
            </VuiFlexItem>
            <VuiFlexItem grow={1}>
                <VuiText size='l'>
                    Uploaded On
                </VuiText>
            </VuiFlexItem>
            <VuiFlexItem grow={1}>
                <VuiText size='l'>
                    Copy to GPT
                </VuiText>
            </VuiFlexItem>
            <VuiFlexItem grow={1}>
                <VuiText size='l'>
                    Delete
                </VuiText>
            </VuiFlexItem>
        </VuiFlexContainer>
    )
}

export default MemoyContentHeader