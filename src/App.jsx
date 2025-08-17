import './App.css';
function App() {

  return (
    
    <>    
      <h1 className='bg-blue-900  text-white my-4 text-center'>font-stretch</h1>
      <h1 className='bg-blue-900  text-white my-4 text-center'>Basic example </h1>
      <div className="flex flex-col  bg-gray-300  justify-center gap-4">
      </div>

  
      <div className="flex flex-col  bg-gray-300  justify-center gap-4">
        <h3 className='bg-amber-100 font-stretch-ultra-condensed' >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta, perferendis!</h3>
        <h3 className='bg-amber-200 font-stretch-extra-condensed' >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta, perferendis!</h3>
        <h3 className='bg-amber-300 font-stretch-condensed'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta, perferendis!</h3>
        <h3 className='bg-amber-400 font-stretch-semi-condensed' >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta, perferendis!</h3>
        <h3 className='bg-amber-500 font-stretch-noraml' >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta, perferendis!</h3>
        <h3 className='bg-amber-600 font-stretch-expanded' >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta, perferendis!</h3>
        <h3 className='bg-green-100 font-stretch-extra-expanded' >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta, perferendis!</h3>
        <h3 className='bg-green-200 font-stretch-ultra-expanded' >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta, perferendis!</h3>
      </div>
    
      <h1 className='bg-blue-900  text-white my-4 text-center'>Using percentages  </h1>
      <div className="flex flex-col  bg-gray-300  justify-center gap-4">
        <h3 className='bg-amber-100 font-stretch-50%' >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta, perferendis!</h3>
        <h3 className='bg-amber-200 font-stretch-100%' >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta, perferendis!</h3>
        <h3 className='bg-green-100 font-stretch-150%' >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta, perferendis!</h3>
        <h3 className='bg-green-200 font-stretch-500%' >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta, perferendis!</h3>
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

