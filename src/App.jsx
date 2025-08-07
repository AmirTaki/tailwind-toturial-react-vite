import './App.css';
import img from "./assets/1016556-free-manhattan-wallpaper-2560x1600-4k.jpg"
function App() {

  return (
    
    <>    
      <h1 className='bg-blue-900  text-white my-4 text-center'>overscroll-behavior</h1>
      <h1 className='bg-blue-900  text-white my-4 text-center'>Preventing parent overscrollingr</h1>

      <div className="bg-red-500 overflow-y-scroll h-70  overscroll-contain">
        <div className="bg-blue-400 w-50 float-right m-5 overflow-y-scroll h-50  ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus sed soluta quis modi velit veritatis optio esse ducimus eveniet, mollitia, pariatur illum quos officia maxime hic. Ea similique natus explicabo?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, veritatis dolore dolores, deleniti eligendi esse numquam, quisquam accusantium velit totam accusamus natus neque ipsa voluptates praesentium corporis at modi placeat!
        </div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos deleniti, dolore nam deserunt incidunt inventore. Culpa minus delectus earum consequuntur. Nemo corporis possimus eligendi maxime, consequuntur aut similique ullam culpa, magni porro corrupti voluptates ducimus optio aliquam, tempora dolores rerum ipsam commodi id vitae quasi impedit? Optio rerum provident magnam doloribus ab autem consequatur unde. Ipsam repellat necessitatibus sapiente, quaerat dolores dignissimos quidem impedit animi! Officia, quasi inventore facilis ea explicabo quae natus repellendus dolor earum cum quo dolore ab odio nostrum soluta eos possimus quis voluptatibus accusantium. Iste, neque provident soluta voluptates laborum fugit quis unde velit natus dolorem?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, veritatis amet, eligendi nemo dolores pariatur, quidem rerum atque recusandae dolor facere officia maxime fugiat distinctio harum! Tempore omnis placeat vitae!
      </div>  

      <h1 className='bg-blue-900  text-white my-4 text-center'>Preventing overscroll bouncing</h1>

      <div className="bg-green-500 overflow-y-scroll h-70 overscroll-y-none">
          <div className="bg-blue-400 w-50 float-right m-5 overflow-y-scroll h-50  overscroll-y-none">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus sed soluta quis modi velit veritatis optio esse ducimus eveniet, mollitia, pariatur illum quos officia maxime hic. Ea similique natus explicabo?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, veritatis dolore dolores, deleniti eligendi esse numquam, quisquam accusantium velit totam accusamus natus neque ipsa voluptates praesentium corporis at modi placeat!
          </div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos deleniti, dolore nam deserunt incidunt inventore. Culpa minus delectus earum consequuntur. Nemo corporis possimus eligendi maxime, consequuntur aut similique ullam culpa, magni porro corrupti voluptates ducimus optio aliquam, tempora dolores rerum ipsam commodi id vitae quasi impedit? Optio rerum provident magnam doloribus ab autem consequatur unde. Ipsam repellat necessitatibus sapiente, quaerat dolores dignissimos quidem impedit animi! Officia, quasi inventore facilis ea explicabo quae natus repellendus dolor earum cum quo dolore ab odio nostrum soluta eos possimus quis voluptatibus accusantium. Iste, neque provident soluta voluptates laborum fugit quis unde velit natus dolorem?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, veritatis amet, eligendi nemo dolores pariatur, quidem rerum atque recusandae dolor facere officia maxime fugiat distinctio harum! Tempore omnis placeat vitae!
      </div>  

      <h1 className='bg-blue-900  text-white my-4 text-center'>Using the default overscroll behavior</h1>

      <div className="bg-amber-500 overflow-y-scroll h-70 overscroll-auto">
        <div className="bg-blue-400 w-50 float-right m-5 overflow-y-scroll h-50  ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus sed soluta quis modi velit veritatis optio esse ducimus eveniet, mollitia, pariatur illum quos officia maxime hic. Ea similique natus explicabo?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, veritatis dolore dolores, deleniti eligendi esse numquam, quisquam accusantium velit totam accusamus natus neque ipsa voluptates praesentium corporis at modi placeat!
        </div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos deleniti, dolore nam deserunt incidunt inventore. Culpa minus delectus earum consequuntur. Nemo corporis possimus eligendi maxime, consequuntur aut similique ullam culpa, magni porro corrupti voluptates ducimus optio aliquam, tempora dolores rerum ipsam commodi id vitae quasi impedit? Optio rerum provident magnam doloribus ab autem consequatur unde. Ipsam repellat necessitatibus sapiente, quaerat dolores dignissimos quidem impedit animi! Officia, quasi inventore facilis ea explicabo quae natus repellendus dolor earum cum quo dolore ab odio nostrum soluta eos possimus quis voluptatibus accusantium. Iste, neque provident soluta voluptates laborum fugit quis unde velit natus dolorem?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, veritatis amet, eligendi nemo dolores pariatur, quidem rerum atque recusandae dolor facere officia maxime fugiat distinctio harum! Tempore omnis placeat vitae!
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

