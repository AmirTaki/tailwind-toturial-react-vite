import './App.css';


function App() {



  return (
    <>    
      <h1 className='bg-blue-900 text-white my-4 text-center'>Theme variables</h1>
      <br />
      <div className="flex">
        <div className="w-20 h-20 bg-sky-50"></div>
        <div className="w-20 h-20 bg-sky-100"></div>
        <div className="w-20 h-20 bg-sky-200"></div>
        <div className="w-20 h-20 bg-sky-300"></div>
        <div className="w-20 h-20 bg-sky-400"></div>
        <div className="w-20 h-20 bg-sky-500"></div>
        <div className="w-20 h-20 bg-sky-600"></div>
        <div className="w-20 h-20 bg-sky-700"></div>
        <div className="w-20 h-20 bg-sky-800"></div>
        <div className="w-20 h-20 bg-sky-900"></div>
      </div>

      <h1 className='bg-blue-900 text-white my-4 text-center'>Adjusting opacity</h1>  
      <div className="flex bg-black h-30 items-center justify-center">
        <div className="w-20 h-20 bg-sky-500/10"></div>
        <div className="w-20 h-20 bg-sky-500/20"></div>
        <div className="w-20 h-20 bg-sky-500/30"></div>
        <div className="w-20 h-20 bg-sky-500/40"></div>
        <div className="w-20 h-20 bg-sky-500/50"></div>
        <div className="w-20 h-20 bg-sky-500/60"></div>
        <div className="w-20 h-20 bg-sky-500/70"></div>
        <div className="w-20 h-20 bg-sky-500/80"></div>
        <div className="w-20 h-20 bg-sky-500/90"></div>
        <div className="w-20 h-20 bg-sky-500/100"></div>
      </div>

      <div className="flex bg-gray-400 h-30 items-center justify-center">
        <div className="h-20 w-20 bg-pink-500/[71.37%]"></div>
        <div className="bg-cyan-400/(--my-alpha-value) h-20 w-20"></div>
      </div>
            
      <h1 className='bg-blue-900 text-white my-4 text-center'>Referencing in CSS</h1>  
      <div className="typography">
        <a href="">Referencing in CSS</a>
      </div>

      <h1 className='bg-blue-900 text-white my-4 text-center'>Customizing your colors</h1>  
      <div className="bg-midnight text-tahiti border-bermuda border-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dignissimos ullam excepturi! Aliquam sunt libero reiciendis totam nihil inventore, asperiores, aspernatur voluptas veniam aliquid soluta corrupti nemo cum? Eligendi, incidunt!
      </div>
      <br />
      <h1 className='bg-blue-900 text-white my-4 text-center'>Referencing other variables</h1>  
      <div className="" style={{backgroundColor:"var(--acme-canvas-color)"}}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat iusto molestias aspernatur nesciunt rem expedita ex dolorum deserunt officiis dolores, tempore temporibus quae debitis similique illum distinctio maxime voluptates ut?
      </div>
      <br />
      <div className="dark:bg-canvas">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus rerum ipsum magni maiores voluptates vero, nam voluptatum accusantium et vel alias, quidem unde beatae dolorem quam! Velit sint impedit enim.
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