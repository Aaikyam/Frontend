import React from 'react'
import "../css/loader.css"

const Loader = () => {
  return (
    <div className=' w-screen h-screen flex justify-center items-center bg-black'>
      <div class="pyramid-loader">
  <div class="wrapper">
    <span class="side side1"></span>
    <span class="side side2"></span>
    <span class="side side3"></span>
    <span class="side side4"></span>
    <span class="shadow"></span>
  </div>
</div>

    </div>
  )
}

export default Loader
