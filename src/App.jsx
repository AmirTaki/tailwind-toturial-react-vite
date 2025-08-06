import './App.css';

function App() {

  return (
    
    <>    
      <h1 className='bg-blue-900  text-white my-4 text-center'>break-after</h1>
      
      <div className="columns-4  ">
        <article className='border-dotted border-4 border-red-800  '>
          <h1>headeing</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam voluptatibus incidunt quas unde eius ab sit quibusdam quisquam, vero excepturi, temporibus nulla at tempore quasi deserunt debitis! Non, incidunt nobis?</p>
        </article>
        <article className='border-dotted border-4 border-red-800  break-before-column'>
          <h1>headeing</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam voluptatibus incidunt quas unde eius ab sit quibusdam quisquam, vero excepturi, temporibus nulla at tempore quasi deserunt debitis! Non, incidunt nobis?</p>
        </article>
        <article className='border-dotted border-4 border-red-800 break-before-column'>
          <h1>headeing</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam voluptatibus incidunt quas unde eius ab sit quibusdam quisquam, vero excepturi, temporibus nulla at tempore quasi deserunt debitis! Non, incidunt nobis?</p>
        </article>
        <article className='border-dotted border-4 border-red-800 '>
          <h1>headeing</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam voluptatibus incidunt quas unde eius ab sit quibusdam quisquam, vero excepturi, temporibus nulla at tempore quasi deserunt debitis! Non, incidunt nobis?</p>
        </article>
        <article className='border-dotted border-4 border-red-800'>
          <h1>headeing</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam voluptatibus incidunt quas unde eius ab sit quibusdam quisquam, vero excepturi, temporibus nulla at tempore quasi deserunt debitis! Non, incidunt nobis?</p>
        </article>
      </div>


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

