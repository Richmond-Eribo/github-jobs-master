import React, {useEffect, useState} from 'react'
import Filter from '../components/Filter'
import SearchForm from '../components/SearchForm'

function Home() {
  const [searchJobs, setsearchJobs] = useState([])

  // const url = () => {
  //   let Stat =
  //     'https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json'
  //   return Stat
  // }

  const getJobs = async () => {
    const data = await fetch(
      'https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json'
    )

    const res = await data.json()
    console.log(res)
    setsearchJobs(res)
  }

  useEffect(() => {
    getJobs()
  }, [])

  return (
    <React.Fragment>
      <SearchForm obs={searchJobs} />
      <Filter />
    </React.Fragment>
  )
}

export default Home
