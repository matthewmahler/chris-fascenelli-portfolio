import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"
import tw from "tailwind-styled-components"
import styled from "styled-components"
import Layout from "../components/Layout"

const Container = tw.div`
mx-auto
min-w-full
max-w-none
min-h-full
grow
flex
`
const SCNeon = styled.h1`
  text-shadow: 0px 0px 15px #06b6d4, 0px 0px 15px #8b5cf6, 0px 0px 15px #06b6d4;
`
const Neon = tw(SCNeon)`
text-6xl 
text-stone-200 
text-center 
font-limelight
sm:text-5xl 
xs:text-3xl 
xs:mb-2
`
const IndexPage = () => {
  const { contentfulLandingPage } = useStaticQuery(
    graphql`
      query {
        contentfulLandingPage {
          callToActionDestination
          callToActionText
          pageTitle
          socials
          logo {
            filename
            gatsbyImageData(placeholder: TRACED_SVG)
          }
          heroImage {
            gatsbyImageData(placeholder: BLURRED)
            filename
          }
          backgroundImage {
            gatsbyImageData(placeholder: BLURRED)
            filename
          }
        }
      }
    `
  )
  return (
    <Layout>
      <Container>
        <BgImage
          image={[
            `linear-gradient(#1C1917EE, #1C1917cc, #1C191799)`,
            contentfulLandingPage.backgroundImage.gatsbyImageData,
          ]}
          className="grow min-h-full flex flex-col justify-center items-center"
          placeholder="blurred"
        >
          {/* Any content here will be centered in the component */}
          <div className="flex flex-col justify-center items-center">
            <div className="container mx-auto grid md:grid-cols-2 md:gap-4 items-center justify-items-center">
              <GatsbyImage
                image={contentfulLandingPage.logo.gatsbyImageData}
                className="w-9/12"
                imgStyle={{
                  filter: "drop-shadow(0px 0px 15px #06b6d4)",
                }}
                placeholder="tracedSVG"
                alt={contentfulLandingPage.logo.filename}
              />
              <Neon>{contentfulLandingPage.pageTitle}</Neon>
            </div>
            <div className="max-w-md mx-auto grid grid-cols-2 xs:gap-2 md:gap-4 my-4">
              <Link
                to={`/${contentfulLandingPage.callToActionDestination}`}
                className="inline-block xs:py-2 md:py-5 xs:px-4 md:px-12 text-white xs:text-sm font-bold bg-cyan-500 hover:bg-cyan-600 rounded-full transition duration-200"
              >
                Contact Today
              </Link>
              <Link
                to={`/${contentfulLandingPage.callToActionDestination}`}
                className="inline-block xs:py-2 md:py-5 xs:px-4 md:px-12 text-white xs:text-sm hover:text-cyan-500 font-bold border border-gray-300 hover:border-cyan-500 rounded-full transition duration-200 text-center"
              >
                See Work
              </Link>
            </div>
          </div>
        </BgImage>
      </Container>
    </Layout>
  )
}

export default IndexPage
