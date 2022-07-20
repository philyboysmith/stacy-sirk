import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import S from "../components/s";
const pages = [
  {
    title: 'source',
    image: '../images/source.jpg',
    body: {
      list: ['Buyer', 'Visual merchandising', 'Retail concept development', 'Distinctive curation'],
      content: 'In an ever-more homogenized world, I use my global network to locate the hidden gems - talented creators,artisans, unique products - for world class retailers, past and present\n\nMACYS, I. MAGNIN, NEIMAN MARCUS, BULLOCKS WILSHIRE, SMITH & HAWKEN, ILLUMINATIONS, NORDSTROM, RESTORATION HARDWARE, GUIDEBOAT, TERRAIN, NIKE'
    }

  }
]

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className="text-center relative">
      <StaticImage
        src="../images/homepage.jpg"
        loading="eager"

        formats={["auto", "webp", "avif"]}
        alt=""
        className="w-full absolute left-0 "
      />

      <div className="flex relative z-10 hidden">
        <div className="col-span-1">
          <S />
        </div>
        <div className="flex-1">
          <p>Hello world</p>
        </div>

      </div>
    </div>

  </Layout>
)

export default IndexPage
