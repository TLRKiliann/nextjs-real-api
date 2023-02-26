import { useState } from 'react'
import { useRouter } from 'next/router'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import styles from '@/styles/Events.module.scss'

type EnventListProps = {
  eventList: {
    id: number
    article: string
    location: string
    category: string
  }
}

const EventList = ({ eventList }: EnventListProps) => {
  const router = useRouter() as any
  const [events, setEvents] = useState<any>(eventList)
  const [isSwitched, setIsSwitched] = useState<boolean>(true)

  const fetchByCategory = async (category: string) => {
    const response = await fetch(`http://localhost:4000/events?category=${category}`)
    const data = await response.json()
    setEvents(data)
    setIsSwitched(false)
    router.push(`/events?category=${category}`, undefined, { shallow: true })
  }

  const handleBackHome = () => {
    router.push('/')
  }
  return (
    <>
      <Head>
        <title>Events</title>
        <meta name="description" content="Events page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.events}>
        {events.map((event: any) => (
          <div key={event.id}> 
            <h2>{event.article}</h2>
            <h2>{event.location}</h2>
            <h2>{event.category}</h2>
            {isSwitched ? (
              <button
                type="button"
                onClick={() => fetchByCategory(event.category)}>
                Choose this category
              </button>
              ) : (
              <button
                type='button'
                onClick={handleBackHome}
              >
                Return
              </button>
              )
            }
            <hr />
          </div>
        ))}
      </div>
    </>
  )
}
export default EventList

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch('http://localhost:4000/events')
  const data = await response.json()
  return {
    props: {
      eventList: data,
    }
  }
}