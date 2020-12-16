import React from 'react'

function SearchForm(props) {
  const formSubmmit = e => {
    e.preventDefault()
    props.newSearchJobs()

    // e.target.value.reset()
  }
  return (
    <div className='mt-8 h-28 rounded-xl bg-searchImage bg-no-repeat bg-cover bg-center '>
      <div className=' px-4 h-full flex flex-wrap justify-center content-center'>
        <div className='input  w-full h-14 p-1 pl-2 flex flex-row bg-white rounded-md items-center justify-between '>
          <i className='fas fa-briefcase'></i>
          <form className='flex  items-center'>
            <input
              type='search'
              className='w-3/5 h-8 outline-none ml-1 truncate'
              placeholder='title, company, expertise or benfits'
              value={props.searchDescription}
              onChange={e => props.setsearchDescription(e.target.value)}
            />
            <input
              type='submit'
              value='Search'
              className='h-12 bg-blue-500 text-white rounded-md px-8 '
              onClick={formSubmmit}
            />
          </form>
        </div>
      </div>
    </div>
  )
}

export default SearchForm
