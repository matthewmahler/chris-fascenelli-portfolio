import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"
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

const About = () => {
  const { contentfulAboutPage } = useStaticQuery(
    graphql`
      query {
        contentfulAboutPage {
          pageTitle
          bioText {
            bioText
          }
          backgroundImage {
            gatsbyImageData(placeholder: BLURRED)
            filename
          }
          profileImage {
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
            `linear-gradient(#1C1917EE, #1C1917dd, #1C1917ee)`,
            contentfulAboutPage.backgroundImage.gatsbyImageData,
          ]}
          className="grow min-h-full flex flex-col justify-start items-center"
          placeholder="blurred"
        >
          <h1 className="text-5xl text-stone-200 text-center sm:text-5xl xs:text-3xl xs:mb-5 font-limelight xs:mt-5">
            {contentfulAboutPage.pageTitle}
          </h1>
          {contentfulAboutPage.bioText.bioText
            .split("\n")
            .filter(s => s !== "")
            .map(s => {
              return (
                <p className="text-stone-200 text-center text-sm w-9/12 mb-4 md:max-w-screen-sm">
                  {s}
                </p>
              )
            })}
          <GatsbyImage
            image={contentfulAboutPage.profileImage.gatsbyImageData}
            className="my-8 w-52"
            placeholder="blurred"
            imgClassName="rounded-full "
            alt={contentfulAboutPage.profileImage.filename}
          />
        </BgImage>
      </Container>
    </Layout>
  )
}

export default About
