import React from 'react'

import GenNews from '../../components/GenNews';
import CustomNews from '../../components/CustomNews';

const Home = () => {
  return (
    <div className="container">
    
    <h1 className="text-center" style={{paddingTop: "30%"}}>
        <GenNews />
        <CustomNews />
    </h1>
    
  </div>
  )
}
export default Home;