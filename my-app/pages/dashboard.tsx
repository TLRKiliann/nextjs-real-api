import { useState, useEffect } from "react"
import Head from 'next/head'

const Dashboard:React.FC = () => {

  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [dashboardData, setDashboardData] = useState<any>(null)

  useEffect(() => {
    const fetchDashboard = async () => {
      const response = await fetch('http://localhost:4000/dashboard')
      const data = await response.json()
      setDashboardData(data)
      setIsLoading(false)
    }
    fetchDashboard()
    return () => {
      console.log("clean-up effect (client)")
    }
  }, [])

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  return (
    <>

      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Dashboard page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div style={{marginTop: '90px'}}>
        <h2>Dashboard</h2>
        <h3>Posts: {dashboardData.posts}</h3>
        <h3>Likes: {dashboardData.likes}</h3>
        <h3>Followers: {dashboardData.followers}</h3>
        <h3>Following: {dashboardData.following}</h3>
      </div>

    </>
  )
}
export default Dashboard