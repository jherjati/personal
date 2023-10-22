/* eslint-disable react/no-unescaped-entities */
import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { title, subtitle } from "@/components/primitives";
import Globe from "@/components/globe";
import Frontend from "@/components/frontend";
import Backend from "@/components/backend";
import Image from "next/image";
import { BsLinkedin } from "react-icons/bs";
import Spatial from "@/components/spatial";
import Stars from "@/components/stars";
import waveImage from "@/components/frontend/wave.webp";

export default function Home() {
  return (
    <>
      <section className='grid grid-cols-1 md:grid-cols-2 min-h-[24rem] relative overflow-hidden'>
        <Stars />
        <article className='text-center w-full my-auto px-6'>
          <h1 className={title()}>Starting as a</h1>
          <br />
          <h1 className={title({ color: "violet" })}>Geomatics Engineer</h1>
          <h2 className={subtitle({ class: "mt-4" })}>
            At the outset of my journey in Geomatics, I wasn’t just absorbing
            the foundational knowledge of geospatial science, but also
            cultivating a passion for technical solutions. From this point, my
            journey as a software engineer commenced.
          </h2>
        </article>
        <Globe />
      </section>

      <section className='grid grid-cols-1 md:grid-cols-2 min-h-[24rem] relative'>
        <div className='w-full h-full absolute top-0 right-0 z-0 opacity-40 rounded-md'>
          <Image alt='wave background image' fill src={waveImage}></Image>
        </div>
        <Frontend />
        <article className='text-center w-full my-auto px-6 z-10'>
          <h1 className={title()}>From Data Visualization to</h1>
          <br />
          <h1 className={title({ color: "blue" })}>Frontend Engineering</h1>
          <h2 className={subtitle({ class: "mt-4" })}>
            Data visualization isn't confined to just maps. As I delved into
            Frontend Engineering, I realized that data could 'speak' in numerous
            forms – tables, charts, lists, cards, and more. I mastered the art
            of presenting data in the most effective and captivating ways.
          </h2>
        </article>
      </section>

      {/* <section className='grid grid-cols-2 h-96 mb-16'>
        <article className='w-full text-center my-auto px-6'>
          <h1 className={title()}>From Data Engineer to</h1>
          <br />
          <h1 className={title({ color: "cyan" })}>Backend Engineering</h1>
          <h2 className={subtitle({ class: "mt-4" })}>
            A stellar spatial solution requires a robust data foundation. From
            the backend, I built, optimized, and integrated systems to ensure
            data is delivered swiftly and accurately. From spatial operations to
            crafting responsive APIs, I'm the architect behind the visuals you
            witness.
          </h2>
        </article>
        <Backend />
      </section>

      <section className='grid grid-cols-2 mb-6'>
        <Spatial />
        <article className='w-full text-center my-auto px-6'>
          <h1 className={title()}>Finally becoming a </h1>
          <h1 className={title({ color: "yellow" })}>Spatial </h1>
          <h1 className={title({ color: "pink" })}>Software Engineer</h1>
          <h2 className={subtitle({ class: "mt-4" })}>
            With the knowledge I garnered from Geomatics to Computer Science,
            I've bridged these two worlds. I’m not just any software engineer; I
            am a spatial software engineer. This unique expertise empowers me to
            offer integrated and holistic solutions for your geospatial needs.
          </h2>
        </article>
      </section> */}

      <section className='flex flex-col items-center justify-center gap-4 py-8 md:py-10'>
        <div className='flex gap-3'>
          <Link
            isExternal
            as={NextLink}
            href={"https://wa.me/6281312223312"}
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
            })}
          >
            Contact Now
          </Link>
          <Link
            isExternal
            as={NextLink}
            className={buttonStyles({ variant: "bordered", radius: "full" })}
            href={"https://www.linkedin.com/in/jherjati/"}
          >
            <BsLinkedin className='h-4 w-4' />
            LinkedIn
          </Link>
        </div>

        {/* <div className='mt-8'>
          <Snippet hideSymbol hideCopyButton variant='flat'>
            <span>
              Get started by editing <Code color='primary'>app/page.tsx</Code>
            </span>
          </Snippet>
        </div> */}
      </section>
    </>
  );
}
