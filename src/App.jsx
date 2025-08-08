import './App.css';
import img from "./assets/1016556-free-manhattan-wallpaper-2560x1600-4k.jpg"
function App() {

  return (
    
    <>    
      <h1 className='bg-blue-900  text-white my-4 text-center'>top / right / bottom / left</h1>
      <h1 className='bg-blue-900  text-white my-4 text-center'>Basic example</h1>
      {/* <div className="bg-amber-300 h-60 w-50 relative">
          <div className="bg-red-500  h-10 w-10 top-2 left-5 absolute "></div>
          <div className="bg-red-500  h-10 w-10 absolute inset-x- "></div>
      </div>


      <div className="bg-red-600 h-60 relative">
          <div className="bg-black   absolute " style={{top : '5px', left: '10px', right: "50px" , bottom: "20px"}}></div>
          <div className="bg-black  w-10  h-10 absolute " style={{insetBlockStart : "20px"}}></div>
      </div> */}


      <div className="flex  flex-wrap justify-between  ">
        <div className="bg-gray-300 w-80 h-50 relative" >
          top: 10 ; left 10
          <div className="w-10 h-10 bg-red-800 absolute top-10 left-10"></div>
        </div>
        
        <div className="bg-blue-300 w-80 h-50 relative" >
          <div className="h-10 bg-red-800 absolute inset-x-0 top-0 " >
            <p className='z-10'>inset-x-0 ; top : 0</p>
          </div>
        </div>

        <div className="bg-green-400 h-50 w-80 relative">
          top:0; right :0
          <div className="bg-blue-800 w-10 h-10 absolute " style={{top:"0px", right:"0px"}}></div>
        </div>

        <div className="bg-red-500 h-50 w-80 relative">
          <p>inset-y-0 ;  right-0</p>
          <div className="bg-black absolute w-10 inset-y-0 right-0"></div>
        </div>

        <div className="bg-black w-80 h-50 relative">
          <div className="bg-blue-800 inset-0 w-full h-full">inset-0</div>
        </div>
      

      <div className="bg-green-700 w-80 h-50 relative">
        <div className="bg-yellow-400  w-10 absolute left-0 inset-y-0">
                  inset-y-0 ; left-0
        </div>
      </div>

      <div className="bg-gray-700 w-80 h-50 relative">
        left-0; bottom-0
        <div className="bg-white w-10 h-10 left-0 bottom-0 absolute"></div>
      </div>
      
      <div className="bg-blue-800 w-80 h-50 relative">
        inset-x-0; bottom-0
        <div className="bg-red-500 absolute inset-x-0 bottom-0 h-10"></div>
      </div>

      <div className="bg-gray-300 w-80 h-50 relative">
        right-0 ; bottom-0
        <div className="bg-red-800  w-10 h-10 absolute right-0 bottom-0"></div>
      </div>
      
      </div>

      <h1 className='bg-blue-900  text-white my-4 text-center'>Using negative values</h1>
      <div className="flex justify-center items-center mt-14">
        <div className="h-50 w-80 bg-gray-300 relative">
          <div className="w-20 h-20 bg-green-400 absolute -top-10 -left-10"></div>
          <div className="w-20 h-20 bg-red-400 absolute -inset-y-10 right-0 "></div>
          <div className="w-20 h-20 bg-blue-400 absolute -inset-x-10 -bottom-10 "></div>
          <div className="w-20 h-20 bg-yellow-400 absolute -right-0  -bottom-10 "></div>
\        </div>
      </div>

      <div className="my-15"></div>
      <h1 className='bg-blue-900  text-white my-4 text-center'>Using logical properties</h1>

      <div className="flex justify-center items-center ">
        <div className="h-50 w-80 bg-gray-300 relative "dir = "ltr">
          <div className="w-20 h-20 bg-red-500 absolute stert-0 top-0" ></div>
          <div className="w-20 h-20 bg-green-500 absolute end-0 top-0" ></div>
          <div className="w-20 h-20 bg-blue-500 absolute start-0 bottom-0" ></div>
          <div className="w-20 h-20 bg-yellow-500 absolute end-0 bottom-0"></div>
        </div>
      </div>
      <div className="my-10"></div>
      <div className="flex justify-center items-center ">
        <div className="h-50 w-80 bg-gray-300 relative"dir = "rtl">
          <div className="w-20 h-20 bg-red-500 absolute stert-0 top-0" ></div>
          <div className="w-20 h-20 bg-blue-500 absolute start-0 bottom-0" ></div>
          <div className="w-20 h-20 bg-green-500 absolute end-0 top-0" ></div>
          <div className="w-20 h-20 bg-yellow-500 absolute end-0 bottom-0"></div>

        </div>
      </div>

      <h1 className='bg-blue-900  text-white my-4 text-center'>Using a custom value</h1>
      <div className="flex justify-center items-center ">
        <div className="h-50 w-80 bg-gray-300 relative">
          <div className="w-20 h-20 bg-red-500 absolute inset-[10px] " ></div>
          <div className="  bg-blue-500 absolute inset-(--my-position) " ></div>
                   

        </div>
      </div>
      <h1 className='bg-blue-900  text-white my-4 text-center'>Customizing your theme</h1>
     <div className="flex justify-center items-center ">
        <div className="h-50 w-80 bg-gray-300 relative">
          <div className="w-20 h-20 bg-red-500 absolute inset- " ></div>
                   

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

