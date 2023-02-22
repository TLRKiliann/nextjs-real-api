import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Image from 'next/image'
//import styles from '@/styles/Home.module.css'

type DataProps = {
  data: {
    map: any
    id: number | null
    title: string
  }
}

export default function Home({data}: DataProps) {
  const router = useRouter() as any

  const handleClick = (id: number) => {
    console.log("click")
    router.push(`/posts/${id}`)
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
          <h2>Data from typicode</h2>
            {data?.map((post: any) => (
              <div key={post.id}>      
                <p>{post?.id}</p>
                <p>{post?.title}</p>
                <button type="button" onClick={() => handleClick(post.id)}>Click</button>
              </div>
            ))}
        </div>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
  const data = await response.json();
  return {
    props: {
      data: data,
    }
  }
}