import './App.css';
function App() {

  return (
    
    <>    
      <h1 className='bg-blue-900  text-white my-4 text-center'>width</h1>
      <h1 className='bg-blue-900  text-white my-4 text-center'>basic example  'w-number'</h1>
      <div className="flex flex-col bg-gray-300">
        <div className="w-96 h-10 bg-yellow-400 flex justify-center items-center rounded-3xl">w-96</div>
        <div className="w-80 h-10 bg-blue-400 flex justify-center items-center rounded-3xl">w-80</div>
        <div className="w-64 h-10 bg-red-400 flex justify-center items-center rounded-3xl">w-64</div>
        <div className="w-48 h-10 bg-green-400 flex justify-center items-center rounded-3xl">w-48</div>
        <div className="w-40 h-10 bg-pink-400 flex justify-center items-center rounded-3xl">w-40</div>
        <div className="w-32 h-10 bg-orange-400 flex justify-center items-center rounded-3xl">w-32</div>
        <div className="w-24 h-10 bg-emerald-400 flex justify-center items-center rounded-3xl">w-24</div>
      </div>

      <h1 className='bg-blue-900  text-white my-4 text-center'>Using a percentage</h1>
      <div className="flex flex-col bg-gray-300 gap-4">
        <div className="flex">
          <div className="w-1/2 h-10 bg-yellow-400 flex justify-center items-center rounded-3xl">w-1/2</div>
          <div className="w-1/2 h-10 bg-blue-400 flex justify-center items-center rounded-3xl">w-1/2</div>
        </div>
        
        <div className="flex">
          <div className="w-2/5 h-10 bg-red-400 flex justify-center items-center rounded-3xl">w-2/5</div>
          <div className="w-3/5 h-10 bg-green-400 flex justify-center items-center rounded-3xl">w-3/5</div>
        </div>
    
        <div className="flex">
          <div className="w-1/3 h-10 bg-pink-400 flex justify-center items-center rounded-3xl">w-1/3</div>
          <div className="w-2/3 h-10 bg-orange-400 flex justify-center items-center rounded-3xl">w-2/3</div>
        </div>
        <div className="flex">
          <div className="w-1/4 h-10 bg-yellow-400 flex justify-center items-center rounded-3xl">w-1/4</div>
          <div className="w-3/4 h-10 bg-emerald-400 flex justify-center items-center rounded-3xl">w-3/4</div>
        </div>
    
    
        <div className="flex">
          <div className="w-1/5 h-10 bg-yellow-800 flex justify-center items-center rounded-3xl">w-1/5</div>
          <div className="w-4/5 h-10 bg-blue-800 flex justify-center items-center rounded-3xl">w-4/2</div>
        </div>

        <div className="flex">
          <div className="w-1/6 0h-10 bg-red-800 flex justify-center items-center rounded-3xl">w-1/6</div>
          <div className="w-5/6 h-10 bg-green-800 flex justify-center items-center rounded-3xl">w-5/6</div>
        </div>
    
        <div className="flex">
          <div className="w-full h-10 bg-pink-400 flex justify-center items-center rounded-3xl">w-full</div>
        </div>
      </div>

      <h1 className='bg-blue-900  text-white my-4 text-center'>Using the container scale</h1>
      <div className="flex flex-col bg-gray-300">

        <div className="w-3xl h-10 bg-green-400 flex justify-center items-center rounded-3xl">w-3xl</div>
        <div className="w-2xl h-10 bg-orange-400 flex justify-center items-center rounded-3xl">w-2xl</div>
        <div className="w-xl h-10 bg-yellow-400 flex justify-center items-center rounded-3xl">w-xl</div>
        <div className="w-lg h-10 bg-blue-400 flex justify-center items-center rounded-3xl">w-lg</div>
        <div className="w-md h-10 bg-red-400 flex justify-center items-center rounded-3xl">w-md</div>
        <div className="w-sm h-10 bg-green-400 flex justify-center items-center rounded-3xl">w-sm</div>
        <div className="w-xs h-10 bg-pink-400 flex justify-center items-center rounded-3xl">w-xs</div>
        <div className="w-2xs h-10 bg-orange-400 flex justify-center items-center rounded-3xl">w-2xs</div>
        <div className="w-3xs h-10 bg-emerald-400 flex justify-center items-center rounded-3xl">w-3xs</div>
      </div>
      <h1 className='bg-blue-900  text-white my-4 text-center'>Matching the viewport</h1>
      
      <div className="flex flex-col bg-gray-300 w-screen">
        <div className="  bg-green-400 flex justify-center items-center rounded-3xl">w-screen</div>
        <div className="  bg-blue-400 flex justify-center items-center rounded-3xl">w-screen</div>
      </div>
  
      <h1 className='bg-blue-900  text-white my-4 text-center'>Setting both width and height</h1>
      <div className="flex flex-col bg-gray-300 ">
        <div className=" size-20 bg-red-400 flex justify-center items-center rounded-3xl">size-20</div>
        <div className=" size-full bg-yellow-400 flex justify-center items-center rounded-3xl">size-full</div>
        <div className="size-[30vw] bg-pink-400 flex justify-center items-center rounded-3xl">size-[30vw = value]</div>

      </div>
      

          
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

