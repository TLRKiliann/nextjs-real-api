import { GetStaticProps, GetStaticPaths } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'

type PostProps = {
  post: {
    id: number | null
    title: string
    body: string
  }
}

const PostId = ({ post }: PostProps) => {

  const router = useRouter() as any

  const handleBackHome = () => {
    router.replace("/")
  };
  
  return (
    <div>

      <Head>
        <title>Post_id</title>
        <meta name="description" content="Post_id page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <p>ID: {post?.id} </p>
        <p>Title: {post?.title}</p> 
        <p>Body: {post?.body}</p>
        <button
          type="button"
          onClick={handleBackHome}>Go back to home
        </button>
        <hr />
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

export const getStaticProps: GetStaticProps = async (context: any) => {
  const { params } = context
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
  const data = await response.json()
  return {
    props: {
      post: data,
    }
  }
};