import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'

type ArticlesProps = {
  category: any
  articles: {
    map: any
    id: number
    title: string
    description: string
    category: string
  }
}

const Articles = ({ articles, category }: ArticlesProps) => {
  const router = useRouter() as any

  const handleBackHome = () => {
    router.push('/')
  }
  return (
    <div>

      <Head>
        <title>News By Category</title>
        <meta name="description" content="News By Category page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h2>Article category: {category}</h2>
      <button type='button' onClick={handleBackHome}>Back to Home</button>
      {articles.map((article: any) => (
        <div key={article.id}>
          <p>
            {article.title}
          </p>
          <p>{article.description}</p>
          <p>{article.category}</p>
          <hr />
        </div>
      ))}
    </div>
  )
}
export default Articles

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const { params }: any = context
  const { category }: any = params
  const response = await fetch(`http://localhost:4000/news?category=${category}`)
  const data = await response.json()
  return {
    props: {
      articles: data,
      category
    }
  }
}