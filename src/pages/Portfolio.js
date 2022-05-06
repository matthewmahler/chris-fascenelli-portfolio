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
const Portfolio = () => {
  return (
    <Layout>
      <Container>Potfolio Here Later</Container>
    </Layout>
  )
}

export default Portfolio

// const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     variableWidth: true,
//     mobileFirst: true,
//   }
// <div className="container mx-auto h-full m-4">
//   <Slider {...settings}>
//     {contentfulLandingPage.slideShowImages.map((image, key) => {
//       return (
//         <div key={key} className="container">
//           <GatsbyImage
//             image={image.gatsbyImageData}
//             alt={image.filename}
//             placeholder="tracedSVG"
//           />
//         </div>
//       )
//     })}
//   </Slider>
// </div>
