import './App.css';
function App() {

  return (
    
    <>    
      <h1 className='bg-blue-900  text-white my-4 text-center'>white-spacen</h1>

      <h1 className='bg-blue-900  text-white my-4 text-center'>Normal</h1>
      <div className="bg-blue-500 mx-2">

          <p className="whitespace-normal">Hey everyone!
  It's almost 2022       and we still don't know if there             are aliens living among us, or do we? Maybe the person writing this is an alien.
  You will never know.</p>     
      </div>
   
    
      <h1 className='bg-blue-900  text-white my-4 text-center'>No Wrap</h1>
      <div className="bg-red-500 mx-2 ">

          <p className="whitespace-nowrap">Hey everyone!
  It's almost 2022       and we still don't know if there             are aliens living among us, or do we? Maybe the person writing this is an alien.
  You will never know.</p>     
      </div>
   
    
      <h1 className='bg-blue-900  text-white my-4 text-center'>Pre</h1>
      <div className="bg-yellow-500 mx-2 ">

          <p className="whitespace-pre">Hey everyone!<br></br>
  It's almost 2022       and we still don't know if there             are aliens living among us, or do we? Maybe the person writing this is an alien.
  <br></br>You will never know.</p>     
      </div>
      <h1 className='bg-blue-900  text-white my-4 text-center'>PreLine</h1>
      <div className="bg-green-500 mx-2 ">
        <p className='whitespace-pre-line'>Hey everyone!
          It's almost 2022            and we still don't know if there

          You will never know.
          
        </p>
      </div>
   
    
      <h1 className='bg-blue-900  text-white my-4 text-center'>PreWrap</h1>
      <div className="bg-pink-500 mx-2 ">
        <p className='whitespace-pre-wrap'>Hey everyone!
          It's almost 2022            and we still don't know if there

          You will never know.
          
        </p>
      </div>
   
    
   
   
    
      <h1 className='bg-blue-900  text-white my-4 text-center'>Break Spaces</h1>
      <div className="bg-amber-500 mx-2 ">
        <p className='whitespace-break-spaces'>Hey everyone!
          It's almost 2022            and we still don't know if there

          You will never know.
          
        </p>
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

