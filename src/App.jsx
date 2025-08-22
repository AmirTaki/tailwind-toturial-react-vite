import './App.css';
function App() {

  return (
    
    <>    
      <h1 className='bg-blue-900  text-white my-4 text-center'>background-color</h1>

      <h1 className='bg-blue-900  text-white my-4 text-center'>Basic example</h1>
  
      <div className="flex bg-gray-200 justify-around items-center ">       
        <button class="bg-blue-500 text-white p-2 rounded-xl">Button A</button>
        <button class="bg-cyan-500 text-white p-2 rounded-xl">Button B</button>
        <button class="bg-pink-500 text-white p-2 rounded-xl">Button C</button>
      </div>
 
  
      <h1 className='bg-blue-900  text-white my-4 text-center'>Changing the opacity</h1>
  
      <div className="flex bg-gray-200 justify-around items-center ">       
        <button class="bg-sky-500/100 text-white p-2 rounded-xl">Button A</button>
        <button class="bg-sky-500/75 text-white p-2 rounded-xl">Button B</button>
        <button class="bg-sky-500/50 text-white p-2 rounded-xl">Button C</button>
        <button class="bg-sky-500/25 text-white p-2 rounded-xl">Button D</button>
      </div>
 
      <h1 className='bg-blue-900  text-white my-4 text-center'></h1>
      <h1 className='bg-blue-900  text-white my-4 text-center'></h1>
      <h1 className='bg-blue-900  text-white my-4 text-center'></h1>
      <h1 className='bg-blue-900  text-white my-4 text-center'></h1>
      <h1 className='bg-blue-900  text-white my-4 text-center'></h1>
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

