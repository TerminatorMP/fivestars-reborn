import Head from 'next/head'
import Navbar from '../src/components/nav/Navbar';
import Hero from '../src/components/Hero';
import Trailer from '../src/components/Trailer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>FiveStars Reborn</title>
        <meta name="description" content="FiveStars Reborn Discord" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar position="fixed"/>
      <main>
        <Hero />
        <Trailer />
      </main>
      
    </div>
  )
}


export async function getStaticProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  }
}