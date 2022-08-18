import React from 'react'
import Directory from '../../components/directory/DirectoryComponent'
import { HomePageContainer }  from './HomepageStyle'
import Home from '../../Sections/Home'
import  About  from '../../Sections/About'
import  Shop  from '../../Sections/Shop'
import  Banner  from '../../Sections/Banner'
import  NewArrival  from '../../Sections/NewArrival'

const HomepageComponent = () => {
  return (
    <>
        <Home />
        <About />
        <Shop />
        <Banner />
        <NewArrival />
    </>
  )
}

export default HomepageComponent