import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import S from "../components/s"
import Logo from "../components/logo"
import Smile from "../components/Smile"
import Source from "../components/Source"
import Sprout from "../components/Sprout"
import Scene from "../components/Scene"
import Self from "../components/Self"
import Style from "../components/Style"
import scrollTo from "gatsby-plugin-smoothscroll"

const pages = [
  {
    title: "source",
    c: <Source className="lg:h-[230px] lg:w-auto" />,
    image: (
      <StaticImage
        alt="source"
        src="../images/source.jpg"
        width={640}
        height={996}
      />
    ),
    body: {
      list: [
        "Buyer",
        "Visual merchandising",
        "Retail concept development",
        "Distinctive curation",
      ],
      content:
        "<p>In an ever-more homogenized world, I use my global network to locate the hidden gems - talented creators,artisans, unique products - for world class retailers, past and present</p><p>MACYS, I. MAGNIN, NEIMAN MARCUS, BULLOCKS WILSHIRE, SMITH & HAWKEN, ILLUMINATIONS, NORDSTROM, RESTORATION HARDWARE, GUIDEBOAT, TERRAIN, NIKE</p>",
    },
  },
  {
    title: "style",
    c: <Style className="lg:h-[230px] lg:w-auto" />,
    image: (
      <StaticImage
        alt="style"
        src="../images/style.jpg"
        width={640}
        height={996}
      />
    ),
    body: {
      list: ["EDITOR AT LARGE", "STYLIST", "CREATIVE LEAD", "AUTHOR"],
      content:
        "<p>I love capturing stories that shine a light on quirky lifestyles, sustainable skills, and intriguing perspectives for magazines, books, print and digital</p><p>GARTENLUST, WORKMAN, GUARDIAN WEEKEND, GREEN PROFIT, FLEA MARKET STYLE, CICO, ARTISAN, WOMEN CREATE</p>",
    },
  },
  {
    title: "sprout",
    c: <Sprout className="lg:h-[230px] lg:w-auto" />,
    image: (
      <StaticImage
        alt="sprout"
        src="../images/sprout.jpg"
        width={640}
        height={996}
      />
    ),
    body: {
      list: ["PRESS TRIPS", "FLORAL TRENDS", "TRADE EVENTS", "LOGISTICS"],
      content:
        "If I had to pick a favorite sector of expertise, it would be this one!",
    },
  },
  {
    title: "scene",
    c: <Scene className="lg:h-[230px] lg:w-auto" />,
    image: (
      <StaticImage
        alt="scene"
        src="../images/scene.jpg"
        width={640}
        height={996}
      />
    ),
    body: {
      list: ["SAN FRANCISCO", "LONDON/BRIGHTON", "HONG KONG", "AMSTERDAM"],
      content:
        "<p>“Business or pleasure?”</p><p>Having lived and worked in some of the world’s most dynamic and inspiring destinations, my answer to this question has always been “Both!” My projects take me from rural workshops in India to cutting-edge factories in SE Asia, from design studios across Europe to home crafters in Scandinavia.</p>",
    },
  },
  {
    title: "self",
    c: <Self className="lg:h-[230px] lg:w-auto" />,
    image: (
      <StaticImage
        alt="self"
        src="../images/self.jpg"
        width={640}
        height={996}
      />
    ),
    body: {
      list: [],
      content: "",
    },
  },
]

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />

    <div className=" relative w-full text-2xl ">
      <nav className=" -mx-2 sticky top-0 bg-white py-4 z-20">
        <ul class="uppercase flex ">
          {pages.map(p => (
            <li>
              <button
                className="appearance-none p-2"
                onClick={() => scrollTo("#" + p.title)}
              >
                {p.title}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <Logo className="w-[110px] h-auto mt-6" />

      <div className="lg:flex gap-4 relative z-10 mt-28 border-b-[10px] border-[#7c868c] border-opacity-20 pb-32">
        <div className="lg:w-[390px]">
          <S className="w-full h-auto" />
        </div>
        <div className="flex-1">
          <Smile className="lg:h-[262px] lg:-mt-2" />
        </div>
      </div>

      {pages.map(p => (
        <>
          <div
            id={p.title}
            className="lg:flex lg:flex-wrap gap-4 relative z-10 pt-16 border-b-[10px] border-[#7c868c] border-opacity-20 pt-32 pb-48"
          >
            <div className="lg:w-[390px]">
              <S className="w-full h-auto" />
            </div>
            <div className="flex-1">{p.c}</div>
            <div className="lg:w-[390px] pt-4">{p.image}</div>
            <div className="flex-1 text-left pt-4">
              {p.body.list.length > 0 && (
                <ul className="border-t mb-12">
                  {p.body.list.map(l => (
                    <li className="uppercase py-[0.15rem] border-b">{l}</li>
                  ))}
                </ul>
              )}
              <div dangerouslySetInnerHTML={{ __html: p.body.content }} />
            </div>
          </div>
        </>
      ))}
    </div>
  </Layout>
)

export default IndexPage
