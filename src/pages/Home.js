import React, {useState, useEffect} from 'react'
import Filter from '../components/Filter'
import SearchForm from '../components/SearchForm'
import SearchList from '../components/SearchList'

function Home() {
  const [searchedJobs, setsearchedJobs] = useState([
    {
      id: 'wbius',
      company: 'bakery',
      type: 'Full time',
      title: 'Frotnt-End software Engineer',
      location: 'New york',
      time: '5 days ago',
    },
    {
      id: 'w96948bius',
      company: 'bakery',
      type: 'Full time',
      title: 'Frotnt-End software Engineer',
      location: 'New york',
      time: '5 days ago',
    },
    {
      id: 'w96948bis',
      company: 'bakery',
      type: 'Full time',
      title: 'Frotnt-End software Engineer',
      location: 'New york',
      time: '5 days ago',
    },
    {
      id: 'w9694ius',
      company: 'bakery',
      type: 'Full time',
      title: 'Frotnt-End software Engineer',
      location: 'New york',
      time: '5 days ago',
    },
    {
      id: 'w968bius',
      company: 'bakery',
      type: 'Full time',
      title: 'Frotnt-End software Engineer',
      location: 'New york',
      time: '5 days ago',
    },
    {
      id: 'w96948s',
      company: 'bakery',
      type: 'Full time',
      title: 'Frotnt-End software Engineer',
      location: 'New york',
      time: '5 days ago',
    },
    {
      id: 'w969Sd48biu',
      company: 'bakery',
      type: 'Full time',
      title: 'Frotnt-End software Engineer',
      location: 'New york',
      time: '5 days ago',
    },
    {
      id: 'z948bius',
      company: 'bakery',
      type: 'Full time',
      title: 'Frotnt-End software Engineer',
      location: 'New york',
      time: '5 days ago',
    },
    {
      id: 'w9dscadfa6948bius',
      company: 'bakery',
      type: 'Full time',
      title: 'Frotnt-End software Engineer',
      location: 'New york',
      time: '5 days ago',
    },
    {
      id: 'asdfg',
      company: 'bakery',
      type: 'Full time',
      title: 'Frotnt-End software Engineer',
      location: 'New york',
      time: '5 days ago',
    },
    {
      id: 'adgaed',
      company: 'bakery',
      type: 'Full time',
      title: 'Frotnt-End software Engineer',
      location: 'New york',
      time: '5 days ago',
    },
  ])

  const [searchLocation, setsearchLocation] = useState('')
  const [searchDescription, setsearchDescription] = useState('')

  const currentJobs = async () => {
    const data = await fetch(
      'https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?&description=&location='
    )

    const response = await data.json()
    console.log(response)
    setsearchedJobs(response)
  }

  const newSearchJobs = async () => {
    const newdata = await fetch(
      `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?&description=${searchDescription}&location=${searchLocation}`
    )

    const response = await newdata.json()
    console.log('I was called')
    setsearchedJobs(response)
  }

  useEffect(() => {
    currentJobs()
  }, [])

  return (
    <React.Fragment>
      <SearchForm
        searchDescription={searchDescription}
        setsearchDescription={setsearchDescription}
        newSearchJobs={newSearchJobs}
      />
      <Filter setsearchLocation={setsearchLocation} />
      <SearchList jobs={searchedJobs} />
    </React.Fragment>
  )
}

export default Home
