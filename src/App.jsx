import './App.css';
import img from "./assets/1016556-free-manhattan-wallpaper-2560x1600-4k.jpg"
function App() {

  return (
    
    <>    
      <h1 className='bg-blue-900  text-white my-4 text-center'>flex-basis</h1>
      <h1 className='bg-blue-900  text-white my-4 text-center'>Using the spacing scale</h1>
      <div className="flex items-center justify-around">
        <div className="basis-20 w-30 h-20 rounded-3xl flex items-center justify-center text-white bg-pink-400">01</div>
        <div className="basis-50 w-30 h-20 rounded-3xl flex items-center justify-center text-white bg-pink-400">02</div>
        <div className="basis-150  w-30 h-20 rounded-3xl flex items-center justify-center text-white bg-pink-400">03</div>
      </div>

      <h1 className='bg-blue-900  text-white my-4 text-center'>Using the container scale</h1>
      <div className="flex items-center justify-around">
        <div className="basis-3xs w-30 h-20 rounded-3xl flex items-center justify-center text-white bg-blue-400">01</div>
        <div className="basis-2xs w-30 h-20 rounded-3xl flex items-center justify-center text-white bg-blue-400">02</div>
        <div className="basis-xs  w-30 h-20 rounded-3xl flex items-center justify-center text-white bg-blue-400">03</div>
        <div className="basis-md  w-30 h-20 rounded-3xl flex items-center justify-center text-white bg-blue-400">04</div>
      </div>
     
      <h1 className='bg-blue-900  text-white my-4 text-center'>Using percentages</h1>
      <div className="flex items-center justify-around">
        <div className="basis-2/3 w-30 h-20 rounded-3xl flex items-center justify-center text-white bg-green-400">01</div>
        <div className="basis-1/3 w-30 h-20 rounded-3xl flex items-center justify-center text-white bg-green-400">02</div>
      </div>

      <h1 className='bg-blue-900  text-white my-4 text-center'>Using a custom value</h1>
      <div className="flex items-center justify-around">
        <div className="basis-[50vw] w-30 h-20 rounded-3xl flex items-center justify-center text-white bg-yellow-400">01</div>
        <div className="basis-[200px] w-30 h-20 rounded-3xl flex items-center justify-center text-white bg-yellow-400">02</div> 
        <div className="basis-(--my-basis) w-30 h-20 rounded-3xl flex items-center justify-center text-white bg-yellow-400">03</div> 
      </div>
    

      <h1 className='bg-blue-900  text-white my-4 text-center'>Customizing your theme</h1>
      <div className="flex items-center justify-around">
        <div className="basis-100xs w-30 h-20 rounded-3xl flex items-center justify-center text-white bg-red-400">01</div>

      </div>
      <h1 className='bg-blue-900  text-white my-4 text-center'></h1>
    </>

  )
}

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

