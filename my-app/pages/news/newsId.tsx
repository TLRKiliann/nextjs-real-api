import { GetServerSideProps } from 'next'

type ArticlesProps = {
	category: string
	articles: {
		id: number
		title: string
		description: string
		category: category
	}
}

const Articles:React.FC = ({ articles, category }: ArticleProps) => {
	return (
		<div>
			<h2>Article category: {category}</h2>
			{articles.map((article: any) => (
				<div key={article.id}>
					<p>{article.title}</p>
					<p>{article.description}</p>
					<p>{article.category}</p>
				</div>
			))}
		</div>
	)
}
export default Articles

export const getServerSideProps: GetServerSideProps = async (context) => {
	const { params } = context
	const { category } = params
	const response = await fetch(`http://localhost:4000/news?category=${category}`)
	const data = await response.json()
	return {
		props: {
			articles: data,
			category
		}
	}
}