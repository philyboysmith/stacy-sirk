import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import S from "../components/s"
import Logo from "../components/logo"
import Smile from "../components/Smile"
import Source from "../components/Source"

const pages = [
  {
    title: "source",
    c: <Source className="lg:h-[230px] lg:w-auto" />,
    image: <StaticImage src="../images/source.jpg" width={640} height={996} />,
    body: {
      list: [
        "Buyer",
        "Visual merchandising",
        "Retail concept development",
        "Distinctive curation",
      ],
      content:
        "In an ever-more homogenized world, I use my global network to locate the hidden gems - talented creators,artisans, unique products - for world class retailers, past and present\n\nMACYS, I. MAGNIN, NEIMAN MARCUS, BULLOCKS WILSHIRE, SMITH & HAWKEN, ILLUMINATIONS, NORDSTROM, RESTORATION HARDWARE, GUIDEBOAT, TERRAIN, NIKE",
    },
  },
]

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />

    <div className=" relative w-full text-2xl ">
      <nav className="py-4 -mx-2">
        <ul class="uppercase flex ">
          {pages.map(p => (
            <li>
              <a href={`#${p.title}`} className="p-2">
                {p.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <Logo className="w-[110px] h-auto mt-6" />

      <div className="lg:flex gap-4 relative z-10 mt-28 border-b-[10px] border-[#7c868c] border-opacity-20 pb-48">
        <div className="lg:w-[390px]">
          <S className="w-full h-auto" />
        </div>
        <div className="flex-1">
          <Smile className="lg:h-[262px] lg:-mt-2" />
        </div>
      </div>

      {pages.map(p => (
        <>
          <div className="lg:flex lg:flex-wrap gap-4 relative z-10 pt-16 border-b-[10px] border-[#7c868c] border-opacity-20 pb-48">
            <div className="lg:w-[390px]">
              <S className="w-full h-auto" />
            </div>
            <div className="flex-1">{p.c}</div>
            <div className="lg:w-[390px] pt-4">{p.image}</div>
            <div className="flex-1 text-left pt-4">
              <ul className="border-t mb-12">
                {p.body.list.map(l => (
                  <li className="uppercase py-[0.15rem] border-b">{l}</li>
                ))}
              </ul>
              {p.body.content}
            </div>
          </div>
        </>
      ))}
    </div>
  </Layout>
)

export default IndexPage
