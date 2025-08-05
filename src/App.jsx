import './App.css';

function App() {

  return (
    
    <>    
      <h1 className='bg-blue-900  text-white my-4 text-center'>Functions and directives</h1>
      <h1 className='bg-blue-900  text-white my-4 text-center'>@ import</h1>

      <div className="bg-orange-400 p-5 text-green-900 hover:scale-90">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias fugit dolore reiciendis magnam? Nihil possimus aspernatur necessitatibus eligendi itaque ipsum rem vel non? Aut harum consequuntur accusantium? Velit, optio blanditiis!
      </div>
      <h1 className='bg-blue-900  text-white my-4 text-center'>@ theme</h1>

      <div className="font-display text-avocado-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, officia quibusdam quasi placeat minima vel aliquam asperiores? Est magnam excepturi nobis, pariatur dolor culpa, quia perspiciatis assumenda laboriosam facere numquam!</div>

      <h1 className='bg-blue-900  text-white my-4 text-center'>@ source</h1>
      
      <h1 className='bg-blue-900  text-white my-4 text-center'>@ utility</h1>
      <div className="bg-red-400 p-3">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, vel recusandae officiis numquam tempora odit dolores vero quaerat doloribus neque facere laudantium veniam illum accusantium, harum omnis laboriosam deleniti! Sapiente.
      </div>

      <h1 className='bg-blue-900  text-white my-4 text-center'>@ variant </h1>
      <div data-theme = "">
        <div className="my-element" >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore cumque ipsum aperiam quod eos accusamus commodi magni aliquid nesciunt, est, aspernatur qui quidem unde praesentium quis voluptates beatae similique nemo.
        </div>
      </div>

      <h1 className='bg-blue-900  text-white my-4 text-center'>@ custom-variant </h1>
      <div data-theme = "midnight">
        <div className="alpha:m-3" >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore cumque ipsum aperiam quod eos accusamus commodi magni aliquid nesciunt, est, aspernatur qui quidem unde praesentium quis voluptates beatae similique nemo.
        </div>
      </div>

      <h1 className='bg-blue-900  text-white my-4 text-center'>@  apply </h1>

      <div className="select2-dropdown" >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore cumque ipsum aperiam quod eos accusamus commodi magni aliquid nesciunt, est, aspernatur qui quidem unde praesentium quis voluptates beatae similique nemo.
      </div>
      
      <h1 className='bg-blue-900  text-white my-4 text-center'>@  reference --->> viu.js </h1>
   
      <h1 className='bg-blue-900  text-white my-4 text-center'>--alpha()</h1>

      <div className="bg-avocado-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat error obcaecati nihil saepe pariatur excepturi quasi sed. Unde, consequatur repellendus? Officiis aspernatur assumenda ut quae aliquid excepturi sint distinctio id.</div>
      <div className="ClassAlpha">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat error obcaecati nihil saepe pariatur excepturi quasi sed. Unde, consequatur repellendus? Officiis aspernatur assumenda ut quae aliquid excepturi sint distinctio id.</div>
    
      <h1 className='bg-blue-900  text-white my-4 text-center'>--spacing()</h1>

      <div className="SpacingAlpha bg-avocado-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, magnam. Aspernatur quidem modi aut omnis. Nihil deleniti repudiandae, iste temporibus repellendus perspiciatis id. Nemo earum voluptatibus perspiciatis odio quod iusto.</div>
    
      <div className="bg-red-400 py-[calc(--spacing(6)-2px)]">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla ea atque recusandae, libero animi in nobis tempore tempora fugiat vitae nesciunt iste, at illo iure laboriosam reprehenderit consectetur placeat delectus!
      </div>
      <h1 className='bg-blue-900  text-white my-4 text-center'>theme()</h1>

      <div className="theme bg-amber-300">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium nihil officiis hic numquam porro sunt inventore debitis, explicabo, illo exercitationem eos officia ut aliquid alias in nobis culpa, error sapiente?
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

