import { GetServerSideProps } from 'next'
import Link from 'next/link'
import Head from 'next/head'
import styles from '@/styles/News.module.scss'

type ArticlesProps = {
  articles: {
    map: any
    id: number
    title: string
    description: string
    category: string
  }
}

const NewArticles = ({ articles }: ArticlesProps) => {
  return (
    <>

      <Head>
        <title>News</title>
        <meta name="description" content="News page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.news}>
        <h1>List of News Articles</h1>
        {articles.map((article: any)=> (
          <div key={article.id}>
            <Link href={`/news/${article.category}`}>{article.title}</Link>
            <p>{article.category}</p>
            <hr />
          </div>
        ))}
      </div>

    </>
  )
}
export default NewArticles

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch("http://localhost:4000/news")
  const data = await response.json()
  return {
    props: {
      articles: data,
    }
  }
}