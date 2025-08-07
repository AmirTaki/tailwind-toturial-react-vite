import './App.css';
import img from "./assets/1016556-free-manhattan-wallpaper-2560x1600-4k.jpg"
function App() {

  return (
    
    <>    
      <h1 className='bg-blue-900  text-white my-4 text-center'>object-position</h1>
      <div className="grid grid-cols-3 gap-4 m-2" >
      
        <img className="size-44 object-top-left object-cover  w-50 h-20"  src={img} />
        <img className="size-44 object-top object-cover  w-50  h-20"       src={img} />
        <img className="size-44 object-top-right object-cover  w-50 h-20" src={img} />
        <img className="size-44 object-left object-cover  w-50 h-20"      src={img} />
        <img className="size-44 object-center object-cover  w-50 h-20"    src={img} />
        <img className="size-44 object-right object-cover  w-50 h-20"     src={img} />
        <img className="size-44 object-bottom-left object-cover  w-50 h-20" src={img} />
        <img className="size-44 object-bottom object-cover  w-50 h-20"      src={img} />
        <img className="size-44 object-bottom-right object-cover  w-50 h-20"src={img} />
     
      </div>
      <h1 className='bg-blue-900  text-white my-4 text-center'>Using a custom value</h1>



      <img className="object-[25%_75%] object-cover w-250" src = {img}></img>
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

