import React from 'react'
import { VuiFlexContainer, VuiFlexItem, VuiText } from '../../ui'
import './memory.scss'
import { GrClose } from "react-icons/gr";
import { FaCopy } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";

function MultipleChoice() {
    return (
        <VuiFlexContainer spacing='none' className='multipleChoice' alignItems='center'>
            <VuiFlexItem className='icon'>
                <GrClose color='white' fontWeight="bold"/>
            </VuiFlexItem>
            <VuiFlexItem className='selected'>
                <VuiText>
                    1 Selected
                </VuiText>
            </VuiFlexItem>
            <VuiFlexItem className='icon'>
                <FaCopy color='white' fontWeight="bold" size={16}/>
            </VuiFlexItem>
            <VuiFlexItem className='icon'>
                <MdDelete color='white' fontWeight="bold" size={20}/>
            </VuiFlexItem>
        </VuiFlexContainer>
    )
}

export default MultipleChoice