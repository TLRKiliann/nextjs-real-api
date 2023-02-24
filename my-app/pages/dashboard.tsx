import { useState, useEffect } from "react"

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
    <div>
      <h2>Posts: {dashboardData.posts}</h2>
      <h2>Likes: {dashboardData.likes}</h2>
      <h2>Followers: {dashboardData.followers}</h2>
      <h2>Following: {dashboardData.following}</h2>
    </div>
  )
}
export default Dashboard