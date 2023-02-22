import { GetStaticProps, GetStaticPaths } from 'next'
import { useRouter } from 'next/router'

type PostProps = {
  post: {
    id: number | null
    title: string
  }
}

const PostId:React.FC = ({ post, id, title }: PostProps) => {

  const router = useRouter() as any

  const handleClick = () => {
    router.replace("/")
  };
  
  return (
    <div>
      <div>
        <p>ID: {post?.id} </p>
        <p>Title: {post?.title}</p> 
        <p>Body: {post?.body}</p>
        <button
          type="button"
          onClick={handleClick}>Go back to home
        </button>
      </div>
    </div>
  )
};
export default PostId;


export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      {
        params: { postId : '1' },
      },
      {
        params: { postId : '2' },
      },
      {
        params: { postId : '3' },
      }
    ], fallback: true
  }
};

export const getStaticProps: GetStaticProps = async (context) => {
  const {params} = context
  console.log(params)
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
  const data = await response.json()
  return {
    props: {
      post: data,
    }
  }
};