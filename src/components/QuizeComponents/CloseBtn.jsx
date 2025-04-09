import React from 'react'

const CloseBtn = (toggleQuizModule) => {
  return (
      <button className='absolute right-0 bottom-[20px] rounded-2xl bg-[crimson] hover:bg-red-400 transition-all duration-700 text-white   border px-4 py-1' onClick={toggleQuizModule}>close</button>
  )
}

export default CloseBtn