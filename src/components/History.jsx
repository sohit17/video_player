import React from 'react'

const History = ({history}) => {
  
  return (
    <div className='border-2 pr-0 ml-60 h-full w-2/4 bg-white '>
      <h1 className='py-2 text-xl font-bold bg-[gray] justify-center flex text-black'> History</h1>
      {history.map(member => {
        return (
          <div className='my-5 w-[90%] mx-auto border-2 bg-[grey] rounded-xl text-black'>
            <p className='mx-1 my-1 text-md justify-center flex font-bold'>{member.title}</p>
            <hr></hr>
            <p className='mx-1 my-1 text-md truncate'>{member.mediaLink}</p>
            <p className='mx-1 text-md pb-1'>{member.time}</p>
          </div>
        )
      })}
    </div>
  )
}

export default History