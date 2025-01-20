import React from 'react'
import Portofolio from './portofolio'
import Header from "../components/header"
import Skills from "./skills"
import Experience from './experience'

function page() {
  return (
    <>
    <Header />
    <Portofolio />
    <Skills />
    <Experience />
    </>
  )
}

export default page