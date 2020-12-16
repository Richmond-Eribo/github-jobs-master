import React from 'react'

function SearchCard(props) {
  return (
    <div>
      <div className='card mt-2 p-2 grid grid-cols-3 h-36 rounded-md shadow-md '>
        <div className='image bg-red-300 '></div>
        <div className='cardContent col-start-2 col-span-2 grid grid-rows-4 '>
          <p>{props.jobs.company}</p>

          <p> the box</p>

          <p>{props.jobs.type}</p>
        </div>
      </div>
    </div>
  )
}

export default SearchCard
