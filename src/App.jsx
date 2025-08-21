import './App.css';
function App() {

  return (
    
    <>    
      <h1 className='bg-blue-900  text-white my-4 text-center'>text wrap</h1>


      <h1 className='bg-blue-900  text-white my-4 text-center'>Allowing text to wrap</h1>
      <div className="flex items-center justify-center  ">
          <div className="  text-wrap  bg-gray-300  justify-center gap-4 mx-2  w-90 border-l-2 border-l-red-500 border-r-2 border-r-red-500">
            <h3>Beloved Manhattan soup stand closes</h3>
            <p>New Yorkers are facing the winter chill with less warmth this year as the city's most revered soup stand unexpectedly shutters, following a series of events that have left the community puzzled.</p>
          </div>
      </div>    
      
      <h1 className='bg-blue-900  text-white my-4 text-center'>Preventing text from wrapping</h1>
      <div className="flex items-center justify-center  ">
          <div className="  text-nowrap  bg-gray-300  justify-center gap-4 mx-2  w-90 border-l-2 border-l-red-500 border-r-2 border-r-red-500">
            <h3>Beloved Manhattan soup stand closes</h3>
            <p>New Yorkers are facing the winter chill with less warmth this year as the city's most revered soup stand unexpectedly shutters, following a series of events that have left the community puzzled.</p>
          </div>
      </div>    

      <h1 className='bg-blue-900  text-white my-4 text-center'>Balanced text wrapping</h1>
      <div className="flex items-center justify-center  ">
          <div className="  text-balance  bg-gray-300  justify-center gap-4 mx-2  w-90 border-l-2 border-l-red-500 border-r-2 border-r-red-500">
            <h3>Beloved Manhattan soup stand closes</h3>
            <p>New Yorkers are facing the winter chill with less warmth this year as the city's most revered soup stand unexpectedly shutters, following a series of events that have left the community puzzled.</p>
          </div>
      </div>    
  
      <h1 className='bg-blue-900  text-white my-4 text-center'>Pretty text wrapping</h1>
      <div className="flex items-center justify-center  ">
          <div className="  text-pretty  bg-gray-300  justify-center gap-4 mx-2  w-90 border-l-2 border-l-red-500 border-r-2 border-r-red-500">
            <h3>Beloved Manhattan soup stand closes</h3>
            <p>New Yorkers are facing the winter chill with less warmth this year as the city's most revered soup stand unexpectedly shutters, following a series of events that have left the community puzzled.</p>
          </div>
      </div>    
  



    
 
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

