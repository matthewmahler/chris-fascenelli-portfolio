import React from "react"
import Nav from "./Nav"
import Seo from "./Seo"
import tw from "tailwind-styled-components"
import Footer from "./Footer"

const Container = tw.main`
mx-auto
from-stone-200 
to-stone-900
min-w-full
max-w-none
min-h-screen
flex
flex-col
justify-start
items-center
`
function Layout({ children }) {
  return (
    <>
      <Seo />
      <Container>
        <Nav />
        <div className="min-w-full flex flex-col grow mx-auto">{children}</div>
        <Footer />
      </Container>
    </>
  )
}

export default Layout
