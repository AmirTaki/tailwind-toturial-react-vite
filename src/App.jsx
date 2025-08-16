import './App.css';
function App() {

  return (
    
    <>    
      <h1 className='bg-blue-900  text-white my-4 text-center'>margin</h1>
      <h1 className='bg-blue-900  text-white my-4 text-center'>margin basic</h1>

      <div className="flex items-center justify-center bg-gray-300 h-50 ">
        <div className="w-20 h-20 bg-amber-400 ">
          <div className="w-20 h-20 bg-blue-400 m-8">m-8</div>
        </div>
      </div>
      <hr />
      <div className="flex items-center justify-center bg-gray-300 h-50 ">
        <div className="w-20 h-20 bg-amber-400 mx-3">mx-3</div>
        <div className="w-20 h-20 bg-blue-400 mx-3">mx-3</div>
      </div>
            <hr />

      <div className="flex items-center justify-center flex-col bg-gray-300 h-50 ">
        <div className="w-20 h-20 bg-amber-400 my-3">my-3</div>
        <div className="w-20 h-20 bg-blue-400 my-3">my-3</div>
      </div>
      <hr />

      <div className="flex items-center justify-center flex-col bg-gray-300 h-50 ">
        <div className="w-30 h-20 bg-amber-400 "></div>
        <div className="w-20 h-20 bg-blue-400 -mt-8">-mt-8</div>
      </div>

      <hr />

      <div className="flex items-center justify-center flex-row bg-gray-300 h-50 ">
        <div className="w-30 h-20 bg-amber-400 "></div>
        <div className="w-20 h-20 bg-blue-400 ms-7">ms-7</div>
      </div>
      <hr />

      <div className="flex items-center justify-center flex-row bg-gray-300 h-50 ">
        <div className="w-30 h-20 bg-amber-400 me-8">me-8</div>
        <div className="w-20 h-20 bg-blue-400 ms-7"></div>
      </div>
      <hr />

      <div className="space-x-4 flex items-center justify-start flex-row bg-gray-300 h-50 ">
        <div className="w-20 h-20 bg-amber-400 ">space - x</div>
        <div className="w-20 h-20 bg-blue-400 ">space - x</div>
        <div className="w-20 h-20 bg-red-400 ">space - x</div>
      </div>
      <hr />

      <div className="space-x-4 space-x-reverse flex items-center justify-start flex-row-reverse bg-gray-300 h-50 ">
        <div className="w-20 h-20 bg-amber-400 ">space - x - reverse</div>
        <div className="w-20 h-20 bg-blue-400 "></div>
        <div className="w-20 h-20 bg-red-400 "></div>
      </div>
      <hr />

      <div className="space-y-3 flex items-center justify-start flex-col bg-gray-300 h-50 ">
        <div className="w-20 h-20 bg-amber-400 ">01</div>
        <div className="w-20 h-20 bg-blue-400 ">02</div>
        <div className="w-20 h-20 bg-red-400 "> space-y-3</div>
      </div>
      <hr />

      <div className="space-y-3 flex items-center justify-start flex-col bg-gray-300 h-50 ">
        <div className="w-20 h-20 bg-amber-400 ">01</div>
        <div className="w-20 h-20 bg-blue-400 ">02</div>
        <div className="w-20 h-20 bg-red-400 "> space-y-3</div>
      </div>
      <hr />

      <div className="space-y-reverse space-y-4 flex items-center justify-start flex-col-reverse bg-gray-300 h-50 ">
        <div className="w-20 h-20 bg-amber-400 ">01</div>
        <div className="w-20 h-20 bg-blue-400 ">02</div>
        <div className="w-20 h-20 bg-red-400 "> space-y-3 reverse</div>
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

