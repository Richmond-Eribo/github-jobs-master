import React from 'react'

function SearchForm(props) {
  // const [Url, setUrl] = useState([])

  return (
    <div>
      <div className=' bg-contain bg-searchImage '>
        <input type='search' name='search' />
        <input type='button' value='search' />
        {/* {props.obs.map(job => (
          <div> {job.company} </div>
        ))} */}
      </div>
    </div>
  )
}

export default SearchForm
