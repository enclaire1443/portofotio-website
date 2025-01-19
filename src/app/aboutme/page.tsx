import React from 'react'
import About from './aboutme'
import Header from '../components/header'
import ClientLayout from "../client_layout";


function page() {
  return (
    <ClientLayout>
    <main>
        <Header />
        <About />
    </main>
    </ClientLayout>
  )
}

export default page