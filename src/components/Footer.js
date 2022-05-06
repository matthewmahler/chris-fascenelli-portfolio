import React from "react"
import tw from "tailwind-styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faInstagram,
  faTwitter,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"
const Container = tw.div`
container 
flex 
flex-row 
flex-wrap 
justify-center 
items-center 
mx-auto 
min-w-full    
px-2 sm:px-4 
py-2.5 
bg-stone-900
`
const Footer = () => {
  const icons = [faInstagram, faTwitter, faFacebook, faLinkedin]
  const { contentfulLandingPage } = useStaticQuery(
    graphql`
      query {
        contentfulLandingPage {
          socials
        }
      }
    `
  )
  console.log(contentfulLandingPage.socials)
  return (
    <Container>
      {contentfulLandingPage.socials.map((social, index) => {
        return (
          <a href={social}>
            <FontAwesomeIcon
              icon={icons[index]}
              size="2x"
              className="text-stone-200 mx-4"
            />
          </a>
        )
      })}
    </Container>
  )
}

export default Footer
