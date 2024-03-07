import React from 'react'
import { AppHeader } from '../../components/chrome/AppHeader';
import { useConfigContext } from '../../contexts/ConfigurationContext';
import { AppFooter } from '../../components/chrome/AppFooter';
import './memory.scss'
import { VuiFlexContainer } from '../../ui';
import MemorySearch from './MemorySearch';
import MemoryHeader from './MemoryHeader';
import MemoyContentHeader from './MemoyContentHeader';



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
          <MemoryHeader/>
          <VuiFlexContainer
            direction="column"
            spacing="none"
            className='memoryContent'
          >
            <MemoyContentHeader/>
          </VuiFlexContainer>
        </VuiFlexContainer>
      </VuiFlexContainer>
      {app.isFooterEnabled && <AppFooter />}
    </>
  )
}

export default Memory