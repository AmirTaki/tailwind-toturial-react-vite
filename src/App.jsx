import './App.css';
function App() {

  return (
    
    <>    
      <h1 className='bg-blue-900  text-white my-4 text-center'>grid-auto-flow</h1>
      <h1 className='bg-blue-900  text-white my-4 text-center'>GRID FLOW COLUMN</h1>

      
      <div className="bg-gray-200 grid grid-cols-3  grid-rows-3 gap-3  grid-flow-col">
        <div className=" h-20  bg-red-400 rounded-4xl flex items-center justify-center text-white">01</div>
        <div className=" h-20  bg-blue-400 rounded-4xl flex items-center justify-center text-white" >02</div>
        <div className=" h-20 bg-green-400 rounded-4xl flex items-center justify-center text-white">03</div>
        <div className=" h-20  bg-black rounded-4xl flex items-center justify-center text-white">04</div>
        <div className=" h-20  bg-yellow-400 rounded-4xl flex items-center justify-center text-white">05</div>
        <div className=" h-20 bg-pink-400 rounded-4xl flex items-center justify-center text-white">06</div>
        <div className=" h-20  bg-amber-400 rounded-4xl flex items-center justify-center text-white">07</div>
        <div className=" h-20  bg-indigo-400 rounded-4xl flex items-center justify-center text-white">08</div>
        <div className=" h-20  bg-red-400 rounded-4xl flex items-center justify-center text-white">09</div>
      </div>
          
      

      
      <h1 className='bg-blue-900  text-white my-4 text-center'>GRID FLOW ROW</h1> 
      <div className="bg-gray-200 grid grid-cols-3  grid-rows-3 gap-3  grid-flow-row">
        <div className=" h-20  bg-red-400 rounded-4xl flex items-center justify-center text-white">01</div>
        <div className=" h-20  bg-blue-400 rounded-4xl flex items-center justify-center text-white" >02</div>
        <div className=" h-20 bg-green-400 rounded-4xl flex items-center justify-center text-white">03</div>
        <div className=" h-20  bg-black rounded-4xl flex items-center justify-center text-white">04</div>
        <div className=" h-20  bg-yellow-400 rounded-4xl flex items-center justify-center text-white">05</div>
        <div className=" h-20 bg-pink-400 rounded-4xl flex items-center justify-center text-white">06</div>
        <div className=" h-20  bg-amber-400 rounded-4xl flex items-center justify-center text-white">07</div>
        <div className=" h-20  bg-indigo-400 rounded-4xl flex items-center justify-center text-white">08</div>
        <div className=" h-20  bg-red-400 rounded-4xl flex items-center justify-center text-white">09</div>
      </div>
          
      <h1 className='bg-blue-900  text-white my-4 text-center'>GRID FLOW DENSE</h1> 
      <div className="bg-gray-200 grid grid-cols-3  grid-rows-3 gap-3  grid-flow-donse">
        <div className=" h-20  bg-red-400 rounded-4xl flex items-center justify-center text-white">01</div>
        <div className=" h-20  bg-blue-400 rounded-4xl flex items-center justify-center text-white" >02</div>
        <div className=" h-20 bg-green-400 rounded-4xl flex items-center justify-center text-white">03</div>
        <div className=" h-20  bg-black rounded-4xl flex items-center justify-center text-white">04</div>
        <div className="col-start-2 row-start-2 row-span-3   bg-yellow-400 rounded-4xl flex items-center justify-center text-white">05</div>
        <div className=" h-20 bg-pink-400 rounded-4xl flex items-center justify-center text-white">06</div>
        <div className=" h-20  bg-amber-400 rounded-4xl flex items-center justify-center text-white">07</div>
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

