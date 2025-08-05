import './App.css';

function App() {

  return (
    
    <>    
      <h1 className='bg-blue-900  text-white my-4 text-center'>aspect-ratio</h1>
   
      <h1 className='bg-blue-900  text-white my-4 text-center'>Basic example</h1>

      <img src="https://tse4.mm.bing.net/th/id/OIP.HxV79tFMPfBAIo0BBF-sOgHaEy?pid=Api&P=0&h=220" className='aspect-3/2 object-cover' alt="" />

      <h1 className='bg-blue-900  text-white my-4 text-center'>Using a video aspect ratio</h1>

      <iframe class="aspect-video " src="https://www.youtube.com/embed/dQw4w9WgXcQ"></iframe>

      <h1 className='bg-blue-900  text-white my-4 text-center'> Using a custom value</h1>

      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9EZNefY1fRsA4qVFTBviWyj-5KHY6U8LG0g&s" className='aspect-[calc(4*3+1)/3] ' alt="" />

      <br />
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9EZNefY1fRsA4qVFTBviWyj-5KHY6U8LG0g&s" className='aspect-(--my-aspect-ratio) ' alt="" />

      <h1 className='bg-blue-900  text-white my-4 text-center'>Responsive design</h1>

      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2m5lrUnvYTjtpAQlMry8arqTYivCPiRYfkA&s" className='aspect-video md:aspect-square' alt="" />

      <h1 className='bg-blue-900  text-white my-4 text-center'>Customizing your theme</h1>

      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCZlf5lc5tX-0gY-y94pGS0mQdL-D0lCH2OQ&s" className='aspect-retro' alt="" />
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

