import useSWR from 'swr'
import Head from 'next/head'

const fetcher = async () => {
  const response = await fetch('http://localhost:4000/dashboard')
  const data = await response.json()
  return data
}

const DashboardSWR = () => {
  const {data, error} = useSWR('dashboard', fetcher)

  if (error) {
    return <h2>An error as occured !</h2>
  }

  if (!data) {
    return <h2>Loading ...</h2>
  }

  return (
    <div>

      <Head>
        <title>Dashboard-SWR</title>
        <meta name="description" content="Dashboard-SWR page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h2>Posts: {data.posts}</h2>
      <h2>Likes: {data.likes}</h2>
      <h2>Followers: {data.followers}</h2>
      <h2>Following: {data.following}</h2>
    </div>
  )
}
export default DashboardSWR