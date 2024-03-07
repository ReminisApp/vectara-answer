import React from 'react'
import { AppHeader } from '../../components/chrome/AppHeader';
import { useConfigContext } from '../../contexts/ConfigurationContext';
import { AppFooter } from '../../components/chrome/AppFooter';


function Memory() {
  const { app } = useConfigContext();

  return (
    <>
      {app.isHeaderEnabled && <AppHeader isModalOpen={false} setIsModalOpen={() => true} />}
      <div className='py-[50px] flex flex-col'>

      </div>
      {app.isFooterEnabled && <AppFooter />}
    </>
  )
}

export default Memory