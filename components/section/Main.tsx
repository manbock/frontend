import React from 'react'
import Header from './Header'
import Head from "next/head";
interface Props {
   children: React.ReactNode;
} 

const Main: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Dalpha Assignment</title>
        <meta name="description" content="Dalpha Assignment" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />  
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main id='main' role='main'>
         <Header/>
         {children}
      </main>
    </>
  )
}

export default Main;