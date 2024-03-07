import React from 'react'
import { AppHeader } from '../../components/chrome/AppHeader';
import { useConfigContext } from '../../contexts/ConfigurationContext';
import { AppFooter } from '../../components/chrome/AppFooter';
import './memory.scss'
import { VuiButtonPrimary, VuiFlexContainer, VuiFlexItem, VuiText } from '../../ui';
import MemorySearch from './MemorySearch';
import { FaPlus } from "react-icons/fa6";


function Memory() {
  const { app } = useConfigContext();

  return (
    <>
      {app.isHeaderEnabled && <AppHeader isModalOpen={false} setIsModalOpen={() => true} />}
      <VuiFlexContainer
        direction="column"
        alignItems="center"
        spacing="none"
        className='memoryView'
      >

        <MemorySearch />
        <VuiFlexContainer
          direction="column"
          spacing="none"
          className='memory'
        >
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
          <VuiFlexContainer
            direction="column"
            spacing="none"
            className='memoryContent'
          >
            test
          </VuiFlexContainer>
        </VuiFlexContainer>
      </VuiFlexContainer>
      {app.isFooterEnabled && <AppFooter />}
    </>
  )
}

export default Memory