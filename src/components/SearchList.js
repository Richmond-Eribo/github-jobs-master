// import SearchCard from './SearchCard'

function SearchList(props) {
  // const {
  //   id,
  //   company,
  //   company_logo,
  //   title,
  //   type,
  //   location,
  //   created_at,
  // } = props.jobs

  return (
    <div>
      {props.jobs.map(job => (
        <div key={job.id}>
          <div className='card mt-2 p-2 grid grid-cols-3 gap-4 h-36 rounded-md shadow-md  bg-white overflow-hidden'>
            <div className='image '>
              <div
                className=' flex items-center content-center mx-auto'
                style={{
                  width: '90px',
                  height: '90px',
                }}
              >
                <img src={job.company_logo} alt='' />
              </div>
            </div>

            <div className='cardContent col-start-2 col-span-2 grid grid-rows-4  overflow-hidden'>
              <p className='company'>{job.company}</p>
              <p className='title truncate'>{job.title}</p>
              <div className='type text-center rounded-sm'>
                <p className='border border-black rounded-md w-1/3 py-2 '>
                  {job.type}
                </p>
              </div>
              <div className='map grid grid-cols-2 gap-7 items-center'>
                <p className='truncate'>{job.location} </p>
                <p>{job.time} </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default SearchList
