import wave from './assets/wave.png'

const Introduction = () => {
  return (
    <div className="flex text-center h-full w-full bg-slate-100">
        <div className="flex h-2/3 w-2/3 bg-slate-200 mx-auto my-auto rounded-md px-10 py-10">
          <div className='grid grid-rows-6 gap-4 w-full'>
            <div className='flex'>
              <p className="text-4xl font-semibold mt-3">Hi There!</p>
              <div className='flex w-12 h-12 ml-3'>
                <img src={wave} className='hover:animate-shake'/>
              </div> 
            </div>
            <div className='row-start-2 row-end-7'>
              <p className='text-2xl text-left'>My name is Siddharth Gupta! I'm a recent Computer Science and Engineering undergraduate that specializes in frontend technologies such as Reactjs as well as some backend technologies like nodejs and flask. I'm also currently exploring the world of web3 and its various new applications in the webspace.</p>
              <p className='text-2xl text-left mt-6'>Oh and welcome to my portfolio!</p>
            </div>
            
          </div>
          
          {/* <p className="text-2xl font-light text-black">My Name is Siddharth Gupta</p> */}
        </div>
    </div>
  )
}

export default Introduction

{/* <span className="animate-spin">👋</span> */}