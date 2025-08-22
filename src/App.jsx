import './App.css';
function App() {

  return (
    
    <>    
      <h1 className='bg-blue-900  text-white my-4 text-center'>background-image</h1>

      <h1 className='bg-blue-900  text-white my-4 text-center'>Basic example</h1>
  
      <div className="flex h-130 bg-gray-200 justify-around items-center bg-[url(https://cdn.pixabay.com/photo/2016/07/17/19/10/background-1524540_1280.jpg)]">       
  
      </div>
 
  
 
      <h1 className='bg-blue-900  text-white my-4 text-center'>Adding a linear gradient </h1>

      <div className="flex flex-col gap-2 ">
        <div class="h-14 bg-linear-to-r from-cyan-500 to-blue-500"></div>
        <div class="h-14 bg-linear-to-t from-sky-500 to-indigo-500"></div>
        <div class="h-14 bg-linear-to-bl from-violet-500 to-fuchsia-500"></div>
        <div class="h-14 bg-linear-65 from-purple-500 to-pink-500"></div>```
      </div>


      <h1 className='bg-blue-900  text-white my-4 text-center'>Adding a radial gradient</h1>

      <div className="flex flex-row gap-2 items-center justify-center ">
        <div class="size-18 rounded-full bg-radial from-pink-400 from-40% to-fuchsia-700"></div>
        <div class="size-18 rounded-full bg-radial-[at_50%_75%] from-sky-200 via-blue-400 to-indigo-900 to-90%"></div>
        <div class="size-18 rounded-full bg-radial-[at_25%_25%] from-white to-zinc-900 to-75%"></div>

      </div>
      <h1 className='bg-blue-900  text-white my-4 text-center'>Adding a conic gradient</h1>

      <div className="flex flex-row gap-2 items-center justify-center ">
        <div class="size-24 rounded-full bg-conic from-blue-600 to-sky-400 to-50%"></div>
        <div class="size-24 rounded-full bg-conic-180 from-indigo-600 via-indigo-50 to-indigo-600"></div>
        <div class="size-24 rounded-full bg-conic/decreasing from-violet-700 via-lime-300 to-violet-700"></div>
      </div>


     
      <h1 className='bg-blue-900  text-white my-4 text-center'>Setting gradient color stops</h1>
      
      <div className="flex flex-row gap-2 items-center justify-center ">
        <div className="w-full h-20 bg-gradient-to-l from-indigo-500 via-purple-500 to-pink-500"></div>
      </div>
      
      
      
      <h1 className='bg-blue-900  text-white my-4 text-center'>Changing interpolation mode</h1>
      <div className="flex flex-col gap-2 ">
        <div class="bg-linear-to-r/srgb from-indigo-500 to-teal-400 h-20" ></div>
        <div class="bg-linear-to-r/hsl from-indigo-500 to-teal-400 h-20" ></div>
        <div class="bg-linear-to-r/oklab from-indigo-500 to-teal-400 h-20" ></div>
        <div class="bg-linear-to-r/oklch from-indigo-500 to-teal-400 h-20" ></div>
        <div class="bg-linear-to-r/longer from-indigo-500 to-teal-400 h-20" ></div>
        <div class="bg-linear-to-r/shorter from-indigo-500 to-teal-400 h-20" ></div>
        <div class="bg-linear-to-r/increasing from-indigo-500 to-teal-400 h-20" ></div>
        <div class="bg-linear-to-r/decreasing from-indigo-500 to-teal-400 h-20" ></div>
      </div>
      
      
      
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

