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
    color: "#2f2f2f",
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
    color: "#ddded8",
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
    color: "#b2318b",
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
    color: "#c55a12",
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
    color: "#aa926e",
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
      <nav className="fixed top-0 bg-white py-4 z-50 bg-black w-full left-0">
        <ul class="uppercase flex ss-container -mx-2">
          {pages.map(p => (
            <li>
              <button
                className="appearance-none p-2 text-white"
                onClick={() => scrollTo("#" + p.title)}
              >
                {p.title}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <div>
        <StaticImage
          alt="scene"
          src="../images/home.jpg"
          width={1831}
          height={1438}
          layout="fixed"
          className="fixed top-0 left-0 w-full h-screen"
          style={{
            maxHeight: "100vh",
          }}
        />
        <div className="ss-container flex flex-col lg:flex-row gap-4 relative z-10 h-screen items-center justify-center ">
          <div className="lg:w-[390px]">
            <S className="w-full h-auto" fill="rgba(255,255,255,0.8)" />
          </div>
          <div className="lg:flex-1">
            <Smile className="w-full lg:w-auto lg:h-[262px] lg:-mt-2" />
          </div>
        </div>
      </div>

      <div className="bg-white relative z-20">
        {pages.map(p => (
          <>
            <div
              id={p.title}
              className="ss-container flex flex-col lg:flex-row lg:flex-wrap gap-4 relative z-10 pt-16 border-b-[10px] border-[#7c868c] border-opacity-20 pt-32 pb-48"
            >
              <div className="lg:w-[390px]">
                <S className="w-full h-auto" fill={p.color} />
              </div>
              <div className="lg:flex-1">{p.c}</div>
              <div className="lg:w-[390px] pt-4">{p.image}</div>
              <div className="flex-1 text-left pt-4">
                {p.body.list.length > 0 ? (
                  <ul className="border-t mb-12">
                    {p.body.list.map(l => (
                      <li className="uppercase py-[0.15rem] border-b">{l}</li>
                    ))}
                  </ul>
                ) : (
                  <Logo className="w-32 h-auto" />
                )}
                <div dangerouslySetInnerHTML={{ __html: p.body.content }} />
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  </Layout>
)

export default IndexPage
