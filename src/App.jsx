import './App.css';
function App() {

  return (
    
    <>    
      <h1 className='bg-blue-900  text-white my-4 text-center'>justify-content</h1>
      <h1 className='bg-blue-900  text-white my-4 text-center'>Start</h1>

      <div className="flex bg-gray-300  justify-start">
        <div className="w-30 h-30  bg-blue-300 rounded-4xl"></div>
        <div className="w-30 h-30  bg-red-300  rounded-4xl" ></div>
        <div className="w-30 h-30  bg-pink-300 rounded-4xl "></div>
      </div>

      
      <h1 className='bg-blue-900  text-white my-4 text-center'>Self Start</h1>
      <div className="flex bg-gray-300  justify-self-start">
        <div className="w-30 h-30  bg-blue-300 rounded-4xl"></div>
        <div className="w-30 h-30  bg-red-300  rounded-4xl" ></div>
        <div className="w-30 h-30  bg-pink-300 rounded-4xl "></div>
      </div>
   
      <h1 className='bg-blue-900  text-white my-4 text-center'>Center</h1>
      <div className="flex bg-gray-300  justify-center">
        <div className="w-30 h-30  bg-blue-300 rounded-4xl"></div>
        <div className="w-30 h-30  bg-red-300  rounded-4xl" ></div>
        <div className="w-30 h-30  bg-pink-300 rounded-4xl "></div>
      </div>
    
      <h1 className='bg-blue-900  text-white my-4 text-center'>Self Center</h1>
      <div className="flex bg-gray-300  justify-self-center">
        <div className="w-30 h-30  bg-green-300 rounded-4xl"></div>
        <div className="w-30 h-30  bg-amber-300  rounded-4xl" ></div>
        <div className="w-30 h-30  bg-pink-500 rounded-4xl "></div>
      </div>
      
      
      <h1 className='bg-blue-900   text-white my-4 text-center'>justify End</h1>
      <div className="flex bg-gray-300   justify-end">
        <div className="w-30 h-30  bg-green-300 rounded-4xl"></div>
        <div className="w-30 h-30  bg-amber-300  rounded-4xl" ></div>
        <div className="w-30 h-30  bg-pink-500 rounded-4xl "></div>
      </div>

      <h1 className='bg-blue-900  text-white my-4 text-center '>Self End</h1>
      <div className="flex bg-gray-300  justify-self-end ">
        <div className="w-30 h-30  bg-green-300 rounded-4xl"></div>
        <div className="w-30 h-30  bg-amber-300  rounded-4xl" ></div>
        <div className="w-30 h-30  bg-pink-500 rounded-4xl "></div>
      </div>

      <h1 className='bg-blue-900  text-white my-4 text-center'>Space between</h1>
      <div className="flex bg-gray-300  justify-between">
        <div className="w-30 h-30  bg-green-300 rounded-4xl"></div>
        <div className="w-30 h-30  bg-amber-300  rounded-4xl" ></div>
        <div className="w-30 h-30  bg-pink-500 rounded-4xl "></div>
      </div>
     
      <h1 className='bg-blue-900  text-white my-4 text-center'>Space evenly</h1>
      <div className="flex bg-gray-300  justify-evenly">
        <div className="w-30 h-30  bg-green-300 rounded-4xl"></div>
        <div className="w-30 h-30  bg-amber-300  rounded-4xl" ></div>
        <div className="w-30 h-30  bg-pink-500 rounded-4xl "></div>
      </div>

      <h1 className='bg-blue-900  text-white my-4 text-center'>Stretch</h1>
      <div className="flex bg-gray-300  justify-stretch">
        <div className=" w-30 h-30  bg-green-300 rounded-4xl"></div>
        <div className="w-full h-30 bg-amber-300  rounded-4xl" ></div>
        <div className="w-30 h-30  bg-pink-500 rounded-4xl "></div>
      </div>
      
      
      <h1 className='bg-blue-900  text-white my-4 text-center'>Normal</h1>
      <div className="flex bg-gray-300  justify-normal">
        <div className=" w-30 h-30  bg-green-300 rounded-4xl"></div>
        <div className="w-30 h-30 bg-amber-300  rounded-4xl" ></div>
        <div className="w-30 h-30  bg-pink-500 rounded-4xl "></div>
      </div>
      <h1 className='bg-blue-900  text-white my-4 text-center'></h1>
      

          
    </>

  )
}
// https://www.youtube.com/@Codevolution/playlists

export default App
/*
small   : sm  =>  640px
medium  : md  =>  768px
large   : lg  =>  1024px
XLarge  : xl  =>  1280px
2XLarge : 2xl => 1536px
*/

/*
@media screenn (min-width : px)
@media (width >= rem)
  sm  : 640px   40rem
  md  : 768px   48rem
  lg  : 1024px  64rem
  xl  : 1280px  80rem
  2xl : 1536px  96rem
*/


/*
@media screen (max-width : px)
@media (width < rem)
  max-sm  : 640px    40rem
  max-md  : 768px    48rem
  max-lg  : 1024px   64rem
  max-xl  : 1280px   80rem
  max-2xl : 1536px   96rem
*/


//  1rem === 16px
/*
@container (width >= rem )

  @3xs :    256px    16rem   
  @2xs :    288px    18rem
  @xs  :    320px    20rem
  @sm  :    384px    24rem
  @md  :    448px    28rem
  @lg  :    512px    32rem
  @xl  :    576px    36rem
  @2xl :    672px    42rem
  @3xl :    768px    48rem
  @4xl :    896px    56rem
  @5xl :    1024px   64rem
  @6xl :    1152px   72rem
  @7xl :    1280px   80rem

*/

