import './App.css';
function App() {

  return (
    
    <>    
      <h1 className='bg-blue-900  text-white my-4 text-center'>hyphens</h1>

      <h1 className='bg-blue-900  text-white my-4 text-center'>Preventing hyphenation</h1>
      <div className="bg-blue-200 mx-2 w-50">

          <p className="hyphens-none">
            Lorem ipsum &shy; dolor sit amet consectetur, &shy;adipisicing elit. Illo est fugiat explicabo cumque quia recusandae ad, soluta laboriosam saepe voluptatum corrupti eveniet expedita, quam nisi eligendi quidem, numquam aspernatur? Dolores.</p>     
      </div>
   
      <h1 className='bg-blue-900  text-white my-4 text-center'>Preventing hyphenation</h1>
      <div className="bg-blue-200 mx-2 w-50 overflow-hidden">

          <p className="hyphens-manual">
            Lorem ipsum dolor &shy;sit amet consectetur, a&shy;dipisicing elit.&shy; Illo est fugiat explicabo&shy; cumque quia recusandae ad, soluta laboriosam &shy;&shy; &shy; saepe&shy; voluptatum corrupti eveniet expedita, quam nisi eligendi quidem, numquam aspernatur? Dolores.</p>     
      </div>
   
   
      <h1 className='bg-blue-900  text-white my-4 text-center'>Preventing hyphenation</h1>
      <div className="bg-blue-200 mx-2 w-50 overflow-hidden">

          <p className="hyphens-none">
            Lorem ipsum dolor sit amet consectetur&shy;, adipisicing elit. Illo est fugiat explicabo cumque quia recusandae ad, &shy;soluta laboriosam saepe voluptatum corrupti eveniet&shy; expedita, quam nisi eligendi quidem, numquam aspernatur? Dolores.</p>     
      </div>
   
  
    
 
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

