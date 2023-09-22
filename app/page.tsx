import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import Globe from "@/components/globe";
import Frontend from "@/components/frontend";

export default function Home() {
  return (
    <>
      <section className='grid grid-cols-2'>
        <aside className='grid content-center'>
          <article className='text-center'>
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
        </aside>
        <Globe />
      </section>

      <section className='grid grid-cols-2'>
        <Frontend />
        <article className='text-center h-96'>
          <h1 className={title()}>From Data Visualization to</h1>
          <br />
          <h1 className={title({ color: "violet" })}>Frontend Engineering</h1>
          <h2 className={subtitle({ class: "mt-4" })}>
            Data visualization isn't confined to just maps. As I delved into
            Frontend Engineering, I realized that data could 'speak' in numerous
            forms – tables, charts, lists, cards, and more. I mastered the art
            of presenting data in the most effective and captivating ways.
          </h2>
        </article>
      </section>

      <section className='grid grid-cols-2'>
        <div className='inline-block max-w-lg text-center justify-center'>
          <h1 className={title()}>From Data Engineer to</h1>
          <br />
          <h1 className={title({ color: "violet" })}>Backend Engineering</h1>
          <h2 className={subtitle({ class: "mt-4" })}>
            A stellar spatial solution requires a robust data foundation. From
            the backend, I built, optimized, and integrated systems to ensure
            data is delivered swiftly and accurately. From spatial operations to
            crafting responsive APIs, I'm the architect behind the visuals you
            witness.
          </h2>
        </div>
      </section>

      <section className='flex flex-col items-center justify-center gap-4 py-8 md:py-10'>
        <div className='inline-block max-w-lg text-center justify-center'>
          <h1 className={title()}>Finally becoming a </h1>
          <h1 className={title({ color: "yellow" })}>Spatial </h1>
          <h1 className={title({ color: "violet" })}>Software Engineer</h1>
          <h2 className={subtitle({ class: "mt-4" })}>
            With the knowledge I garnered from Geomatics to Computer Science,
            I've bridged these two worlds. I’m not just any software engineer; I
            am a spatial software engineer. This unique expertise empowers me to
            offer integrated and holistic solutions for your geospatial needs.
          </h2>
        </div>

        <div className='flex gap-3'>
          <Link
            isExternal
            as={NextLink}
            href={siteConfig.links.docs}
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
            })}
          >
            Documentation
          </Link>
          <Link
            isExternal
            as={NextLink}
            className={buttonStyles({ variant: "bordered", radius: "full" })}
            href={siteConfig.links.github}
          >
            <GithubIcon size={20} />
            GitHub
          </Link>
        </div>

        <div className='mt-8'>
          <Snippet hideSymbol hideCopyButton variant='flat'>
            <span>
              Get started by editing <Code color='primary'>app/page.tsx</Code>
            </span>
          </Snippet>
        </div>
      </section>
    </>
  );
}
