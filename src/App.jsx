import './App.css';


import styles from "./Button.module.css"

function App() {
  return (
  <>
    <h1 className='bg-blue-900 text-white my-4'>Responsive design</h1>  
    <div className='flex items-center justify-center'>
      <div className='w-50 h-50 bg-red-500 max-xl:bg-blue-500 max-lg:bg-green-400 max-md:bg-gray-400 max-sm:bg-amber-400'><p>width {`<`} x </p> </div>
      <div className='w-50 h-50 bg-red-500 xl:bg-blue-500 lg:bg-green-400 md:bg-gray-400 sm:bg-amber-400'><p>width {`>=`} x </p> </div>
    </div>
    
    <h1 className='bg-blue-900 text-white my-4'>Using arbitrary values</h1>  
    <div className='flex items-center justify-center'>
      <div className='w-50 h-50 bg-amber-400 max-[600px]:bg-sky-400 min-[1000px]:bg-green-400'><h1>Using arbitrary values</h1></div>
    </div>
    
    <h1 className='bg-blue-900 text-white my-4'>What are container queries?</h1>  
    <div className="">
      <div className='flex flex-col lg:flex-row'>
        <div className='bg-blue-600 '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi cumque officiis, cupiditate sit error quis voluptatem eveniet expedita. Eaque, maxime aliquid praesentium reiciendis possimus ut reprehenderit in consequuntur nisi consectetur.</div>
        <div className="bg-red-600  ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus optio asperiores fugit ut corporis ad, quia itaque possimus, totam deserunt atque. Provident suscipit culpa sint! Expedita vero molestiae dignissimos dolores!</div>
        <div className='bg-gray-600 @container'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat amet enim repellat deserunt repudiandae aut sint quos recusandae repellendus? Itaque recusandae fuga quisquam quaerat nemo possimus. Mollitia et nobis delectus.</div>
      </div>
    </div>
    
    <h1 className='bg-blue-900 text-white my-4'>Named containers</h1>
    {/* <div className='@container/main'>
      <div className="flex flex-row sm/main:flex-col">
        <div className='bg-blue-600 '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi cumque officiis, cupiditate sit error quis voluptatem eveniet expedita. Eaque, maxime aliquid praesentium reiciendis possimus ut reprehenderit in consequuntur nisi consectetur.</div>
        <div className="bg-red-600  ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus optio asperiores fugit ut corporis ad, quia itaque possimus, totam deserunt atque. Provident suscipit culpa sint! Expedita vero molestiae dignissimos dolores!</div>
      </div>
      <div className="flex flex-row sm/main:flex-col">
        <div className='bg-blue-100 '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi cumque officiis, cupiditate sit error quis voluptatem eveniet expedita. Eaque, maxime aliquid praesentium reiciendis possimus ut reprehenderit in consequuntur nisi consectetur.</div>
        <div className="bg-red-100  ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus optio asperiores fugit ut corporis ad, quia itaque possimus, totam deserunt atque. Provident suscipit culpa sint! Expedita vero molestiae dignissimos dolores!</div>
      </div>
    </div> */}

    <h1 className='bg-blue-900 text-white my-4'>Named containers</h1>


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