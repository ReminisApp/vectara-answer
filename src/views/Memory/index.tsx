import React from 'react'
import { AppHeader } from '../../components/chrome/AppHeader';
import { useConfigContext } from '../../contexts/ConfigurationContext';
import './memory.scss'
import { VuiFlexContainer, VuiFlexItem, VuiText } from '../../ui';
import MemorySearch from './MemorySearch';
import MemoryHeader from './MemoryHeader';
import MemoryContent from './MemoryContent';



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
          <VuiFlexContainer
            direction="column"
            alignItems='center'
            spacing="none"
            className='owner'
          >
            <VuiFlexItem>
              <VuiText size='l'>
                All Knowledge
              </VuiText>
            </VuiFlexItem>
            <VuiFlexItem>
              <VuiText className='by'>
                Curator By Yiğit
              </VuiText>
            </VuiFlexItem>
          </VuiFlexContainer>
          <MemoryHeader />
          <MemoryContent />
        </VuiFlexContainer>
      </VuiFlexContainer>
    </>
  )
}

export default Memory