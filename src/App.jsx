import './App.css';
import img from "./assets/1016556-free-manhattan-wallpaper-2560x1600-4k.jpg"
function App() {

  return (
    
    <>    
      <h1 className='bg-blue-900  text-white my-4 text-center'>flex</h1>
      <h1 className='bg-blue-900  text-white my-4 text-center'>Basic example</h1>
      <div className="flex flex-row  gap-2">
        <div className="flex-2  w-100 h-20 rounded-3xl flex items-center justify-center text-white bg-pink-400">01</div>
        <div className="flex-4 w-100 h-20 rounded-3xl flex items-center justify-center text-white bg-pink-400">02</div>
        <div className=" flex-1 w-100 h-20 rounded-3xl flex items-center justify-center text-white bg-pink-400">03</div>
        <div className=" flex-none w-10 h-20 rounded-3xl flex items-center justify-center text-white bg-pink-400">04</div>
      </div>

      <h1 className='bg-blue-900  text-white my-4 text-center'>initial</h1>
    {/* flex-initial => flex : 0 1 auto */}
    {/* flex-auto => flex : 1 1 auto */}
      <div className="flex flex-row   gap-2">
        <div className=" flex-none w-100 h-20 rounded-3xl flex items-center justify-center text-white bg-blue-400">01</div>
        <div className="flex-initial  w-100 h-20 rounded-3xl flex items-center justify-center text-white bg-blue-400">02</div>
        <div className=" flex-initial  w-100 h-20 rounded-3xl flex items-center justify-center text-white bg-blue-400">03</div>
      </div>
     
      <h1 className='bg-blue-900  text-white my-4 text-center'>Using a custom value</h1>
      <div className="flex flex-row   gap-2 ">
        <div className=" flex-2  w-100 h-20 rounded-3xl flex items-center justify-center text-white bg-red-400">01</div>
        <div className=" flex-1 w-100 h-20 rounded-3xl flex items-center justify-center text-white bg-red-400">02</div>
        <div className=" flex-3  w-100 h-20 rounded-3xl flex items-center justify-center text-white bg-red-400">03</div>
      </div>
      <br></br>
      <div className="flex flex-row   gap-2 ">
        <div className=" flex-[0_1_10px]  w-100 h-20 rounded-3xl flex items-center justify-center text-white bg-green-400">01</div>
        <div className=" flex-[0_1_30px] w-100 h-20 rounded-3xl flex items-center justify-center text-white bg-green-400">02</div>
        <div className=" flex-[0_1_50px]  w-100 h-20 rounded-3xl flex items-center justify-center text-white bg-green-400">03</div>
      </div>
      <br></br>
      <div className="flex flex-row   gap-2 ">
        <div className=" flex-(--one-flex)  w-100 h-20 rounded-3xl flex items-center justify-center text-white bg-yellow-400">01</div>
        <div className=" flex-(--two-flex) w-100 h-20 rounded-3xl flex items-center justify-center text-white bg-yellow-400">02</div>
        <div className=" flex-(--three-flex)  w-100 h-20 rounded-3xl flex items-center justify-center text-white bg-yellow-400">03</div>
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

