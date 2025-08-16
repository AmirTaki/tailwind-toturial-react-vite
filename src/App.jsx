import './App.css';
function App() {

  return (
    
    <>    
      <h1 className='bg-blue-900  text-white my-4 text-center'>height</h1>
      <h1 className='bg-blue-900  text-white my-4 text-center'>basic example  'h-number'</h1>
      <div className="flex  bg-gray-300 items-end justify-center gap-4">
        <div className="w-10 h-96 bg-yellow-400 flex justify-center items-center rounded-xl">h-96</div>
        <div className="w-10 h-80 bg-blue-400 flex justify-center items-center rounded-xl">h-80</div>
        <div className="w-10 h-64 bg-red-400 flex justify-center items-center rounded-xl">h-64</div>
        <div className="w-10 h-48 bg-green-400 flex justify-center items-center rounded-xl">h-48</div>
        <div className="w-10 h-40 bg-pink-400 flex justify-center items-center rounded-xl">h-40</div>
        <div className="w-10 h-32 bg-orange-400 flex justify-center items-center rounded-xl">h-32</div>
        <div className="w-10 h-24 bg-emerald-400 flex justify-center items-center rounded-xl">h-24</div>
      </div>

      <h1 className='bg-blue-900  text-white my-4 text-center'>Using a percentage</h1>
      <div className="flex  bg-gray-300 items-end justify-center gap-4 h-100">
        <div className="w-10 h-full bg-yellow-400 flex justify-center items-center rounded-xl">h-full</div>
        <div className="w-10 h-9/10 bg-blue-400 flex justify-center items-center rounded-xl">h-9/10</div>
        <div className="w-10 h-3/4 bg-red-400 flex justify-center items-center rounded-xl">h-3/4</div>
        <div className="w-10 h-1/2 bg-green-400 flex justify-center items-center rounded-xl">h-1/2</div>
        <div className="w-10 h-1/3 bg-pink-400 flex justify-center items-center rounded-xl">h-1/3</div>
      </div>

      <h1 className='bg-blue-900  text-white my-4 text-center'>Matching viewport</h1>
      <div className="flex  bg-gray-300 items-end justify-center gap-4 h-screen">
        <div className="w-10 h-screen bg-yellow-400 flex justify-center items-center rounded-xl">screen</div>
        <div className="w-10 h-[80vh] bg-blue-400 flex justify-center items-center rounded-xl">80vh</div>
        <div className="w-10 h-[50vh] bg-red-400 flex justify-center items-center rounded-xl">50vh</div>
        <div className="w-10 h-[25vh] bg-green-400 flex justify-center items-center rounded-xl">25vh</div>
        <div className="w-10 h-[15vh] bg-pink-400 flex justify-center items-center rounded-xl">15vh</div>
      </div>

      <h1 className='bg-blue-900  text-white my-4 text-center'>Setting both width and height</h1>
      <div className="flex  bg-gray-300 items-start justify-center gap-4 ">
        <div className=" size-16 bg-yellow-400 flex justify-center items-center rounded-xl">screen</div>
        <div className=" size-20 bg-blue-400 flex justify-center items-center rounded-xl">80vh</div>
        <div className=" size-24 bg-red-400 flex justify-center items-center rounded-xl">50vh</div>
        <div className=" size-32 bg-green-400 flex justify-center items-center rounded-xl">25vh</div>
        <div className=" size-52 bg-pink-400 flex justify-center items-center rounded-xl">15vh</div>
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

