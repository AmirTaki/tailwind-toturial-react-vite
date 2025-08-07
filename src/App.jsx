import './App.css';
import img from "./assets/1016556-free-manhattan-wallpaper-2560x1600-4k.jpg"
function App() {

  return (
    
    <>    
      <h1 className='bg-blue-900  text-white my-4 text-center'>overflow</h1>
    

      <h1 className='bg-blue-900  text-white my-4 text-center'>Showing content that overflows</h1>
      <div className="bg-blue-300 m-4 h-50 overflow-visible" >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates architecto hic, eligendi cum rem, odio nulla non reiciendis assumenda eveniet enim deserunt excepturi magnam, dolorum magni harum illum ex consectetur?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda esse facilis optio saepe libero laborum ipsum eaque ullam aliquam dolorum dolores accusantium quo facere nam doloremque ad numquam, eum in?
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias officia porro maiores quasi delectus commodi velit ad? Enim dignissimos omnis fuga, deserunt soluta obcaecati cumque neque dolore id aperiam incidunt!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam exercitationem, quaerat iste dolores laudantium pariatur at beatae incidunt, corrupti dolorum suscipit minima necessitatibus quam cupiditate minus. Alias, aut expedita? Reprehenderit.
      </div>

      <h1 className='bg-blue-900  text-white my-15 text-center'>Hiding content that overflows</h1>

    <div className="bg-red-300 m-4 h-50 overflow-hidden" >
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates architecto hic, eligendi cum rem, odio nulla non reiciendis assumenda eveniet enim deserunt excepturi magnam, dolorum magni harum illum ex consectetur?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda esse facilis optio saepe libero laborum ipsum eaque ullam aliquam dolorum dolores accusantium quo facere nam doloremque ad numquam, eum in?
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias officia porro maiores quasi delectus commodi velit ad? Enim dignissimos omnis fuga, deserunt soluta obcaecati cumque neque dolore id aperiam incidunt!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam exercitationem, quaerat iste dolores laudantium pariatur at beatae incidunt, corrupti dolorum suscipit minima necessitatibus quam cupiditate minus. Alias, aut expedita? Reprehenderit.
    </div>
    
    <h1 className='bg-blue-900  text-white my-15 text-center'>Clip content that overflows</h1>

    <div className="bg-gray-300 m-4 h-50 overflow-clip" >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates architecto hic, eligendi cum rem, odio nulla non reiciendis assumenda eveniet enim deserunt excepturi magnam, dolorum magni harum illum ex consectetur?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda esse facilis optio saepe libero laborum ipsum eaque ullam aliquam dolorum dolores accusantium quo facere nam doloremque ad numquam, eum in?
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias officia porro maiores quasi delectus commodi velit ad? Enim dignissimos omnis fuga, deserunt soluta obcaecati cumque neque dolore id aperiam incidunt!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam exercitationem, quaerat iste dolores laudantium pariatur at beatae incidunt, corrupti dolorum suscipit minima necessitatibus quam cupiditate minus. Alias, aut expedita? Reprehenderit.
      </div>

    <h1 className='bg-blue-900  text-white my-15 text-center'>Scrolling if needed</h1>
     <div className="bg-yellow-300 m-4 h-50 overflow-auto" >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates architecto hic, eligendi cum rem, odio nulla non reiciendis assumenda eveniet enim deserunt excepturi magnam, dolorum magni harum illum ex consectetur?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda esse facilis optio saepe libero laborum ipsum eaque ullam aliquam dolorum dolores accusantium quo facere nam doloremque ad numquam, eum in?
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias officia porro maiores quasi delectus commodi velit ad? Enim dignissimos omnis fuga, deserunt soluta obcaecati cumque neque dolore id aperiam incidunt!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam exercitationem, quaerat iste dolores laudantium pariatur at beatae incidunt, corrupti dolorum suscipit minima necessitatibus quam cupiditate minus. Alias, aut expedita? Reprehenderit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam exercitationem, quaerat iste dolores laudantium pariatur at beatae incidunt, corrupti dolorum suscipit minima necessitatibus quam cupiditate minus. Alias, aut expedita? Reprehenderit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam exercitationem, quaerat iste dolores laudantium pariatur at beatae incidunt, corrupti dolorum suscipit minima necessitatibus quam cupiditate minus. Alias, aut expedita? Reprehenderit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam exercitationem, quaerat iste dolores laudantium pariatur at beatae incidunt, corrupti dolorum suscipit minima necessitatibus quam cupiditate minus. Alias, aut expedita? Reprehenderit.
      </div>
      
      <h1 className='bg-blue-900  text-white my-15 text-center'>Scrolling horizontally if needed</h1>

     <div className="bg-amber-300 m-4 w-60 flex items-center justify-center m-auto overflow-x-auto gap-2  " >
        <div className="border-2 w-40 h-20">item</div>
        <div className="border-2 w-40 h-20">item</div>
        <div className="border-2 w-40 h-20">item</div>
        <div className="border-2 w-40 h-20">item</div>
        <div className="border-2 w-40 h-20">item</div>
        <div className="border-2 w-40 h-20">item</div>
        <div className="border-2 w-40 h-20">item</div>
        <div className="border-2 w-40 h-20">item</div>
     </div>

      <h1 className='bg-blue-900  text-white my-15 text-center'>overflow x scroll : Scrolling horizontally always</h1>
      <div className="bg-red-300 m-4 w-90 flex items-center justify-center m-auto overflow-x-scroll gap-2  " >
        <div className="border-2 w-40 h-20">item</div>
        <div className="border-2 w-40 h-20">item</div>
        <div className="border-2 w-40 h-20">item</div>
        <div className="border-2 w-40 h-20">item</div>
        <div className="border-2 w-40 h-20">item</div>
        <div className="border-2 w-40 h-20">item</div>
        <div className="border-2 w-40 h-20">item</div>
        <div className="border-2 w-40 h-20">item</div>
     </div>

    <h1 className='bg-blue-900  text-white my-15 text-center'>overflow y scroll : Scrolling vertically always</h1>
     <div className="bg-blue-300 m-4 h-100 overflow-y-scroll" >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates architecto hic, eligendi cum rem, odio nulla non reiciendis assumenda eveniet enim deserunt excepturi magnam, dolorum magni harum illum ex consectetur?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda esse facilis optio saepe libero laborum ipsum eaque ullam aliquam dolorum dolores accusantium quo facere nam doloremque ad numquam, eum in?
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias officia porro maiores quasi delectus commodi velit ad? Enim dignissimos omnis fuga, deserunt soluta obcaecati cumque neque dolore id aperiam incidunt!
      </div>
      
      
    <h1 className='bg-blue-900  text-white my-15 text-center'>overflow scroll : Scrolling in all directions</h1>
    <div className="bg-green-300 m-4 h-50 overflow-scroll" >
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates architecto hic, eligendi cum rem, odio nulla non reiciendis assumenda eveniet enim deserunt excepturi magnam, dolorum magni harum illum ex consectetur?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda esse facilis optio saepe libero laborum ipsum eaque ullam aliquam dolorum dolores accusantium quo facere nam doloremque ad numquam, eum in?
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias officia porro maiores quasi delectus commodi velit ad? Enim dignissimos omnis fuga, deserunt soluta obcaecati cumque neque dolore id aperiam incidunt!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam exercitationem, quaerat iste dolores laudantium pariatur at beatae incidunt, corrupti dolorum suscipit minima necessitatibus quam cupiditate minus. Alias, aut expedita? Reprehenderit.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam exercitationem, quaerat iste dolores laudantium pariatur at beatae incidunt, corrupti dolorum suscipit minima necessitatibus quam cupiditate minus. Alias, aut expedita? Reprehenderit.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam exercitationem, quaerat iste dolores laudantium pariatur at beatae incidunt, corrupti dolorum suscipit minima necessitatibus quam cupiditate minus. Alias, aut expedita? Reprehenderit.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam exercitationem, quaerat iste dolores laudantium pariatur at beatae incidunt, corrupti dolorum suscipit minima necessitatibus quam cupiditate minus. Alias, aut expedita? Reprehenderit.
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

