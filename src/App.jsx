import './App.css';

function App() {

  return (
    
    <>    
      <h1 className='bg-blue-900  text-white my-4 text-center'>display</h1>
      <h1 className='bg-blue-900  text-white my-4 text-center'>Block and Inline</h1>
      <p className='bg-red-200'>
        When controlling the flow of text, using the CSS property <span className="inline">display: inline</span> will cause the
        text inside the element to wrap normally.
      </p>
      <hr />
      <p className='bg-blue-200'>
        While using the property <span className="inline-block">display: inline-block</span> will wrap the element to prevent the
        text inside from extending beyond its parent.
      </p>
      <hr />
      <p className='bg-green-200'>
        Lastly, using the property <span className="block">display: block</span> will put the element on its own line and fill its
        parent.
      </p>

      <div className="w-10 h-10 bg-yellow-500 block"></div>
      <div className="w-10 h-10 bg-red-500 inline">21</div>
      <div className="w-10 h-10 bg-green-500 inline-block"></div>
      <div className="w-10 h-10 bg-gray-500"></div>
      
      
      <h1 className='bg-blue-900  text-white my-4 text-center'>Flow Root</h1>
      <div class="p-4">
        <div class="flow-root bg-blue-200">
          <div class="my-4 ...">Well, let me tell you something, Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus consequatur nulla error dolorum praesentium similique aperiam eum a ducimus aliquid quis expedita, veniam voluptate! Expedita fugit eos doloremque! Inventore, blanditiis.</div>
        </div>
        <div class=" bg-yellow-200">
          <div class="my-4 ...">Sure, go ahead, laugh if you want..., Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit necessitatibus voluptatem quibusdam explicabo praesentium, hic officia molestias libero numquam consequatur esse enim minus assumenda deleniti facilis quia, sapiente temporibus? Fugit!</div>
        </div>
      </div>


      <h1 className='bg-blue-900  text-white my-4 text-center'>Flex </h1>
      <div className="bg-blue-300 flex items-center flex-col">
        <img 
          className='w-20 h-20  rounded-full'
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb2DFkEQQFyU0vPOZoUP4mMyMGEjYycTfb3A&s" alt="" 
        />
        <div className="flex flex-col">
          <strong>Andrew Alfred</strong>
          <span>Technical advisor</span>
        </div>
      </div>
      <h1 className='bg-blue-900  text-white my-4 text-center'>Inline Flex </h1>
      <p className='bg-amber-200'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat maxime maiores magni qui saepe deserunt consectetur, ipsam suscipit tempore distinctio, aut, nesciunt laboriosam. Totam reprehenderit quos dolorum enim quaerat fuga?
        <span className='inline-flex items-baseline'>
          <img 
            className='w-5 h-5  rounded-full'
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb2DFkEQQFyU0vPOZoUP4mMyMGEjYycTfb3A&s" alt="" 
          />
          <strong>kramer</strong>
        </span>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, similique!
      </p>

      <h1 className='bg-blue-900  text-white my-4 text-center'>Grid  </h1>
      <div className="grid  grid-rows-3 grid-cols-3 gap-4  ">
        <div className="h-10 w-20 bg-purple-400 rounded-full text-center flex items-center justify-center text-white">01</div>
        <div className="h-10 w-20 bg-purple-400 rounded-full text-center flex items-center justify-center text-white">02</div>
        <div className="h-10 w-20 bg-purple-400 rounded-full text-center flex items-center justify-center text-white">03</div>
        <div className="h-10 w-20 bg-purple-400 rounded-full text-center flex items-center justify-center text-white">04</div>
        <div className="h-10 w-20 bg-purple-400 rounded-full text-center flex items-center justify-center text-white">05</div>
        <div className="h-10 w-20 bg-purple-400 rounded-full text-center flex items-center justify-center text-white">06</div>
        <div className="h-10 w-20 bg-purple-400 rounded-full text-center flex items-center justify-center text-white">07</div>
        <div className="h-10 w-20 bg-purple-400 rounded-full text-center flex items-center justify-center text-white">08</div>
        <div className="h-10 w-20 bg-purple-400 rounded-full text-center flex items-center justify-center text-white">09</div>
      </div>
      


      <h1 className='bg-blue-900  text-white my-4 text-center'>Inline Grid  </h1>
      <div className="inline-grid grid-cols-3 gap-4 bg-gray-300 mr-3">
        <div className="h-20 w-20 bg-blue-400 rounded-3xl text-center flex items-center justify-center text-white">01</div>
        <div className="h-20 w-20 bg-blue-400 rounded-3xl text-center flex items-center justify-center text-white">02</div>
        <div className="h-20 w-20 bg-blue-400 rounded-3xl text-center flex items-center justify-center text-white">03</div>
        <div className="h-20 w-20 bg-blue-400 rounded-3xl text-center flex items-center justify-center text-white">04</div>
        <div className="h-20 w-20 bg-blue-400 rounded-3xl text-center flex items-center justify-center text-white">05</div>
        <div className="h-20 w-20 bg-blue-400 rounded-3xl text-center flex items-center justify-center text-white">06</div>
      </div>
      <div className="inline-grid grid-cols-3 gap-4 bg-yellow-300">
        <div className="h-20 w-20 bg-blue-400 rounded-3xl text-center flex items-center justify-center text-white">01</div>
        <div className="h-20 w-20 bg-blue-400 rounded-3xl text-center flex items-center justify-center text-white">02</div>
        <div className="h-20 w-20 bg-blue-400 rounded-3xl text-center flex items-center justify-center text-white">03</div>
        <div className="h-20 w-20 bg-blue-400 rounded-3xl text-center flex items-center justify-center text-white">04</div>
        <div className="h-20 w-20 bg-blue-400 rounded-3xl text-center flex items-center justify-center text-white">05</div>
        <div className="h-20 w-20 bg-blue-400 rounded-3xl text-center flex items-center justify-center text-white">06</div>
      </div>


      <h1 className='bg-blue-900  text-white my-4 text-center'>Contents   </h1>
      <div className="flex mx-3 gap-2">
        <div className="flex-1 h-20 w-20 bg-purple-400 rounded-2xl text-center flex items-center justify-center text-white">01</div>
        <div className="contents">
          <div className=" flex-1 h-20 w-20 bg-purple-400 rounded-2xl text-center flex items-center justify-center text-white">02</div>
          <div className=" flex-1 h-20 w-20 bg-purple-400 rounded-2xl text-center flex items-center justify-center text-white">03</div>
        </div>
        <div className=" flex-1 h-20 w-20 bg-purple-400 rounded-2xl text-center flex items-center justify-center text-white">04</div>
      </div>

      <h1 className='bg-blue-900  text-white my-4 text-center'>Table   </h1>
      
      <div className="table w-full bg-amber-200 p-3 ">
        <div className="table-header-group ">
          <div className="table-row bg-red-200 ">
            <div className="table-cell ">Song</div>
            <div className="table-cell">Artist</div>
            <div className="table-cell">Year</div>
          </div>
           
          <div class="table-row bg-blue-200">
            <div class="table-cell ...">The Sliding Mr. Bones (Next Stop, Pottersville)</div>
            <div class="table-cell ...">Malcolm Lockyer</div>
            <div class="table-cell ...">1961</div>
          </div>
          <div class="table-row bg-green-200">
            <div class="table-cell ...">Witchy Woman</div>
            <div class="table-cell ...">The Eagles</div>
            <div class="table-cell ...">1972</div>
          </div>
          <div class="table-row bg-gray-200">
            <div class="table-cell ...">Shining Star</div>
            <div class="table-cell ...">Earth, Wind, and Fire</div>
            <div class="table-cell ...">1975</div>
          </div>
        </div>
      </div>
      
      
      <h1 className='bg-blue-900  text-white my-4 text-center'>Hidden   </h1>
      <div className="flex mx-3 gap-2">
        <div className="flex-1 h-20 w-20 bg-purple-400 rounded-2xl text-center flex items-center justify-center text-white">01</div>
        <div className="contents hidden">
          <div className=" flex-1 h-20 w-20 bg-purple-400 rounded-2xl text-center flex items-center justify-center text-white">02</div>
          <div className=" flex-1 h-20 w-20 bg-purple-400 rounded-2xl text-center flex items-center justify-center text-white">03</div>
        </div>
        <div className=" flex-1 h-20 w-20 bg-purple-400 rounded-2xl text-center flex items-center justify-center text-white">04</div>
      </div>

      <h1 className='bg-blue-900  text-white my-4 text-center'>Screen-reader only   </h1>

      <a href="#" className='bg-amber-200'>
        <span >Settings</span>
        <p className='sr-only'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum a tenetur quibusdam vitae corporis! Rem unde beatae sapiente sit corporis? Quas ab sint nam odio et quos corporis dolore porro.</p>
      </a>

      <h1 className='bg-blue-900  text-white my-4 text-center'>Not Screen-reader only   </h1>


      <a href="#" className='bg-red-200'>
        <span >Settings</span>
        <p className='not-sr-only'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum a tenetur quibusdam vitae corporis! Rem unde beatae sapiente sit corporis? Quas ab sint nam odio et quos corporis dolore porro.</p>
      </a>


      <hr />

      


{/* https://www.youtube.com/watch?v=vBLu3g-W8Bo */}

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

