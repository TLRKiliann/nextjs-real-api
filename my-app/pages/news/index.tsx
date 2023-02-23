import { GetServerSideProps } from 'next'
import Link from 'next/link'

type ArticlesProps = {
  articles: {
    any: any
    id: number
    title: string
    description: string
    category: string
  }
}

const NewArticles:React.FC = ({ articles }: ArticlesProps) => {
  return (
    <div>
      <h1>List of News Articles</h1>
      {articles.map((article: any)=> (
        <div key={article.id}>
          <Link href={`/news/${article.category}`}>{article.title}</Link>
          <p>{article.category}</p>
        </div>
      ))}
    </div>
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