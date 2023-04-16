import React from 'react'

import {useSelector} from 'react-redux'
const Home = () => {
    const data = useSelector((state) => state.productReducer)
    console.log(data);
    return (
   <>
   
   dsafdsafdsafdsa
   </>
  )
}

export default Home;