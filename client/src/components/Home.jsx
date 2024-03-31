import React, { useState } from 'react'
import NavbarCustomer from './NavbarCustomer'
import Cards from './Cards'

function Home() {
    const [dataFromChild, setDataFromChild] = useState('');
    const handleDataFromChild = (data) => {
        setDataFromChild(data);
    };

  return (
    <>
    <NavbarCustomer sendDataToParent={handleDataFromChild} />
    <Cards sendDataToChild={dataFromChild}/>
    </>
  )
}

export default Home