import './App.css';
import img from "./assets/1016556-free-manhattan-wallpaper-2560x1600-4k.jpg"
function App() {

  return (
    
    <>    
      <h1 className='bg-blue-900  text-white my-4 text-center'>order</h1>
      <h1 className='bg-blue-900   text-white my-4 text-center'>Explicitly setting a sort order</h1>
      
      <div className="flex flex-row justify-around   bg-blue-400 gap-3">
        <div className="order-3 w-30 h-20 rounded-3xl flex items-center justify-center text-white bg-pink-400">01</div>
        <div className="order-1 w-30 h-20 rounded-3xl flex items-center justify-center text-white bg-pink-400">02</div>
        <div className="order-2 w-30 h-20 rounded-3xl flex items-center justify-center text-white bg-pink-400">03</div>
      </div>
     
      <h1 className='bg-blue-900  text-white my-4 text-center'>Ordering items first or last</h1>
      <div className="flex flex-row justify-around   bg-gray-200 gap-3">
        <div className="order-last w-30 h-20 rounded-3xl flex items-center justify-center text-white bg-blue-400">01</div>
        <div className=" w-30 h-20 rounded-3xl flex items-center justify-center text-white bg-green-400">02</div>
        <div className="order-first w-30 h-20 rounded-3xl flex items-center justify-center text-white bg-red-400">03</div>
        <div className=" w-30 h-20 rounded-3xl flex items-center justify-center text-white bg-yellow-400">04</div>
      </div>
      
      <h1 className='bg-blue-900  text-white my-4 text-center'></h1>
      <h1 className='bg-blue-900  text-white my-4 text-center'></h1>
    </>

  )
}
// https://www.youtube.com/watch?v=ZOK-DU7vT0A&t=66s

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

