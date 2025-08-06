import './App.css';

function App() {

  return (
    
    <>    
      <h1 className='bg-blue-900  text-white my-4 text-center'>box-decoration-break</h1>


      <div className="" >
        <h2 style={{    backgroundImage: "linear-gradient(to right, #ffef7e, #b7f9e9)", width:'250px' , fontSize:"30px", display:"inline", padding:"5px" ,border:"2px solid gray" , boxDecorationBreak:"clone", WebkitBoxDecorationBreak:"clone" }}>
          Box Decoration Break Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti maiores exercitationem nam dicta non cumque sit qui in vitae veniam quae eum quam mollitia, sunt enim porro quos vero natus!
        </h2>

        <br />
        <br />
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi aliquam animi est eveniet in? Sequi voluptates nobis iusto, suscipit nam voluptate corporis quos ducimus possimus rem eveniet nostrum laborum officiis!</p>
      </div>

      <br />
      <br />
      <br />
      <h1 className='bg-blue-900  text-white my-4 text-center'>Basic example</h1>
      <div className="bg-black">
        <span className='box-decoration-slice bg-linear-to-r from-indigo-600 to-pink-500 px-2 text-white font-bold'>
          Hello<br />World
        </span>
        <br />
      </div>
      <br />
      <div className="bg-black">
        <span className='box-decoration-clone bg-linear-to-r from-indigo-600 to-pink-500 px-2 text-white font-bold'>
          Hello<br />World
        </span>
        <br />
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

