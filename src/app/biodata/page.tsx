import React from 'react'
import Portofolio from './portofolio'
import Header from "../components/header"
import Skills from "./skills"
import Experience from './experience'
import ClientLayout from "../client_layout";
 

function page() {
  return (
    <ClientLayout>
      <main>
      <Header />
      <Portofolio />
      <Skills />
      <Experience />
      </main>
    </ClientLayout>
  )
}

export default page