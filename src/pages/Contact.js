import React from "react"
import tw from "tailwind-styled-components"
import Layout from "../components/Layout"

const Container = tw.div`
mx-auto
min-w-full
max-w-none
min-h-full
grow
flex
`
const Contact = () => {
  return (
    <Layout>
      <Container>Contact Here Later</Container>
    </Layout>
  )
}

export default Contact
