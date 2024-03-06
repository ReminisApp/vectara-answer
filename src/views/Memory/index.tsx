import React from 'react'
import { VuiFlexContainer } from '../../ui'
import { AppHeader } from '../../components/chrome/AppHeader';
import { useConfigContext } from '../../contexts/ConfigurationContext';


function Memory({ memid }: { memid: string }) {
  const { app } = useConfigContext();
  console.log(app)

  return (
    <VuiFlexContainer
      direction="column"
      alignItems="center"
      spacing="none"
    >
      {app.isHeaderEnabled && <AppHeader isModalOpen={false} setIsModalOpen={() => true} />}

    </VuiFlexContainer>
  )
}

export default Memory