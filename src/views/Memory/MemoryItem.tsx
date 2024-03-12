import React from 'react'
import { VuiCheckbox, VuiFlexContainer, VuiFlexItem, VuiText } from '../../ui'
import './memoryContent.scss'
import { FaCopy } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaRegFilePdf } from "react-icons/fa";

function MemoryItem() {
    return (
        <VuiFlexContainer
            direction='row'
            className='memoryItem'
            alignItems='center'
            spacing='s'
        >
            <VuiFlexItem>
                <VuiCheckbox checked={true} onChange={() => true} />
            </VuiFlexItem>
            <VuiFlexItem className='header1 pdfName'>
                <FaRegFilePdf size={"30px"} color='red' />
                <VuiText size='l'>
                    Placeholder Name
                </VuiText>
            </VuiFlexItem>
            <VuiFlexItem className='header2'>
                <VuiText size='l'>
                    22 hour ago
                </VuiText>
            </VuiFlexItem>
            <VuiFlexItem className='header3 copyIcon'>
                <FaCopy size={"20px"} />
            </VuiFlexItem>
            <VuiFlexItem  className='header4 deleteIcon'>
                <MdDelete size={"25px"} />
            </VuiFlexItem>
        </VuiFlexContainer>
    )
}

export default MemoryItem