import './App.css';


function App() {



  return (
    <>    
      <h1 className='bg-blue-900 text-white my-4 text-center'>Theme variables</h1>
     
      <div style = {{backgroundColor : "var(--color-mint-500)", fontFamily : "var(--font-poppins)"}}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum sint officiis, expedita mollitia voluptatem atque quae iusto consequatur eum repudiandae laborum distinctio quam sit nesciunt saepe reiciendis debitis eos temporibus?
      </div>

      <br />

      <div className='bg-mint-500 '>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat omnis nulla ea fuga temporibus explicabo aut distinctio eius! Esse quo corrupti nulla! Aliquam autem quo voluptatum, nihil ullam maxime in.
      </div>

      <br />
      <div className='text-mint-500 font-poppins '>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia maxime, asperiores reiciendis, unde omnis cum quo maiores aperiam facilis, earum dolorem nisi at sapiente nesciunt sequi iusto sed. Fugiat, et?
      </div>

      <br />
      <div className="bg-red-300 font-script">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci quisquam tenetur laudantium nihil distinctio unde, a, accusamus repellat doloribus laborum repellendus laboriosam qui voluptates vitae nostrum perferendis? Labore, non nemo.
      </div>

      <h1 className='bg-blue-900 text-white my-4 text-center'>Theme variables breakpint</h1>

      <div className="w-50 h-50 bg-yellow-500 sm:bg-mint-500">
        min width : 160px chnage color
      </div>
      <br />
      
      <div className="w-50 h-50 bg-red-500 max-large:bg-mint-500">
        max width : 1760px chnage color
      </div>
      <h1 className='bg-blue-900 text-white my-4 text-center'>Theme variables color</h1>
      
      <div className='bg-red-900 text-challenge'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, tenetur! Possimus hic consectetur, voluptatum dolore dolores ea nulla incidunt odio illo quasi minima, facere saepe quos deleniti nisi. Corrupti, rerum?</div>
      
      <div className='bg-purple'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, tenetur! Possimus hic consectetur, voluptatum dolore dolores ea nulla incidunt odio illo quasi minima, facere saepe quos deleniti nisi. Corrupti, rerum?</div>
      
      <div className='bg-midnight text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, tenetur! Possimus hic consectetur, voluptatum dolore dolores ea nulla incidunt odio illo quasi minima, facere saepe quos deleniti nisi. Corrupti, rerum?</div>
      
      <div className='bg-tahiti'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, tenetur! Possimus hic consectetur, voluptatum dolore dolores ea nulla incidunt odio illo quasi minima, facere saepe quos deleniti nisi. Corrupti, rerum?</div>
      
      <div className='bg-bermuda'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, tenetur! Possimus hic consectetur, voluptatum dolore dolores ea nulla incidunt odio illo quasi minima, facere saepe quos deleniti nisi. Corrupti, rerum?</div>
      <br />

      <h1 className='bg-blue-900 text-white my-4 text-center'>Defining animation keyframes</h1>

      <div className="w-60 h-60 bg-bermuda rounded-full animate-fade-in-scale"></div>
                  
      <h1 className='bg-blue-900 text-white my-4 text-center'>Referencing other variables</h1>

     <div className="bg-blue-sky">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit repellat omnis, accusamus, debitis autem in illo eaque ab sit atque quis non similique saepe optio earum aliquid eius nisi vitae. 
     </div>
      <br />
      <div className="text-textColor bg-backgroundColor">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid aspernatur veniam non. Ipsam corrupti, repellendus porro eaque, deleniti, tempore voluptatum quis officia dolor accusamus laborum dolores reiciendis maiores provident obcaecati.
      </div>

      <h1 className='bg-blue-900 text-white my-4 text-center'>Generating all CSS variables</h1>
      <div className="" style={{backgroundColor:"var(--color-red-500)"}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto eveniet sint aperiam officiis aspernatur ipsum, maiores numquam, cupiditate atque, exercitationem pariatur deserunt tempora? Nobis aspernatur excepturi fugiat dignissimos quidem. Ducimus.
      </div>
      <br></br>
      <div className="text-primmary">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse excepturi quos repellat nihil optio obcaecati a quibusdam animi quis enim, eos consectetur quasi commodi aliquid incidunt dolorem cum dolore. Similique?
      </div>
    
    
      <h1 className='bg-blue-900 text-white my-4 text-center'>With custom CSS</h1>
   
      <div className="typography">
        <h1>title lore h1 </h1>
        <h2>description h2</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa aut asperiores aliquid quos corporis inventore consequatur. Repellat, laboriosam. Tempore amet totam quia perspiciatis distinctio dolorem repellat molestiae voluptatibus officiis quibusdam?</p>
      </div>

      <h1 className='bg-blue-900 text-white my-4 text-center'>With arbitrary values</h1>

      <div className="w-60 h-60 bg-red-200 rounded-[calc(var(--radius-3xl)-2px)]"></div>


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