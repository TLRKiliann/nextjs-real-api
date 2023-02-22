import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'

type PostProps = {
  post: {
    id: number | null
  }
}

const PostId:React.FC = ({ post }: PostProps) => {
  const router = useRouter() as any

  const handleClick = () => {
    router.replace("/")
  }
  return (
    <div>
      <div>
        <p>{post?.id}</p>
        <button
          type="button"
          onClick={handleClick}>Go back to home
        </button>
      </div>
    </div>
  )
}
export default PostId


/*export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch();
  const data = await response.json()
  const paths = data.map((post: any) => {
    return {
      params: {PostId: `${post.id}`}
    }
  })
  return {
    paths: [
      params: {
        postId : '1',
      },
      params: {
        postId : '1',
      },
      params: {
        postId : '1',
      }
    ], fallback: true
  }
}*/
/*
export const getStaticProps: GetStaticProps = async (context) => {
  const {params} = context
  console.log(params)
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
  const data = await response.json()
  return {
    props: {
      data: data,
    }
  }
}
*/