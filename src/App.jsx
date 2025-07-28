import './App.css';


import styles from "./Button.module.css"

function App() {
  return (
  <>
    <h1 className='bg-blue-900 text-white my-4 text-center'>Named containers</h1>
      <div className="bg-amber-200 h-50 container mx-auto">
        container
      </div>

    <h1 className='bg-blue-900 text-white my-4 text-center'>  container </h1>

  <div class="@container ">
    <div class="flex flex-row @max-md:flex-col">
      <div className='bg-blue-600 '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi cumque officiis, cupiditate sit error quis voluptatem eveniet expedita. Eaque, maxime aliquid praesentium reiciendis possimus ut reprehenderit in consequuntur nisi consectetur.</div>
      <div className="bg-red-600  ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus optio asperiores fugit ut corporis ad, quia itaque possimus, totam deserunt atque. Provident suscipit culpa sint! Expedita vero molestiae dignissimos dolores!</div>

    </div>
  </div>
    <h1 className='bg-blue-900 text-white my-4 text-center'>Max-width container queries</h1>

  <div className="@container flex justify-center items-center flex-col">
    <div className="w-50 h-50 bg-red-500 @2xl:bg-blue-400">
      <h1>container : min - width : 672 px 2xl</h1>
    </div>
    <div className='w-50 h-50 bg-green-300 @max-lg:bg-amber-300 '>
      <h1>contaienr : max - width
        max : 512 px large
      </h1>
    </div>
  </div>
  <h1 className='bg-blue-900 text-white my-4 text-center'>Named containers</h1>

  <div className="@container/main">
    <div className="flex flex-row m-3 @max-xl/main:flex-col ">
      <div className="bg-red-500 @max-md:bg-green-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex in itaque enim suscipit maxime doloribus voluptatem explicabo assumenda nihil incidunt facilis non sunt deserunt temporibus minus odio, possimus amet sapiente!</div>
      <div className="bg-yellow-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, quaerat explicabo itaque, unde illo aliquid vel a labore nostrum optio architecto repellat dignissimos modi corporis similique, quibusdam praesentium tenetur error.</div>
    </div>
  </div>
  <h1 className='bg-blue-900 text-white my-4 text-center'>Using arbitrary values</h1>
  <div className="@container flex justify-center items-center">
    <div className="w-50 h-50 bg-red-500 @max-[675px]:bg-amber-400">
      Using arbitrary value
      max-width : 675px
    </div>
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