import './App.css';

function App() {

  return (
    
    <>    
      <h1 className='bg-blue-900  text-white my-4 text-center'>columns</h1>
      <div className="" style={{columns : 4}}>
        <div className='w-10 h-10 bg-amber-300'></div>
        <div className='w-10 h-10 bg-blue-300'></div>
        <div className='w-10 h-10 bg-red-300'></div>
        <div className='w-10 h-10 bg-green-300'></div>
        <div className='w-10 h-10 bg-orange-300'></div>
      </div>
    
    <h1 className='bg-blue-900  text-white my-4 text-center'>Setting by number</h1>
    <div className="columns-3 bg-black">
      <img src="https://cdn.pixabay.com/photo/2025/04/24/01/29/trees-9554109_1280.jpg" alt="" className="aspect-2/3 w-full" /> 
      <img src="https://cdn.pixabay.com/photo/2025/07/20/07/37/hand-9723837_1280.jpg" alt="" className="aspect-square" />
      <img src="https://cdn.pixabay.com/photo/2025/06/12/07/37/cow-lake-9655657_1280.jpg" alt="" className="aspect-retro" />
      <img src="https://cdn.pixabay.com/photo/2025/07/22/22/21/iceberg-9729316_1280.jpg" alt="" className="aspect-16/9" />
      <img src="https://cdn.pixabay.com/photo/2025/06/14/21/46/plane-9660343_1280.jpg" alt="" className="aspect-3/2" />
      <img src="https://cdn.pixabay.com/photo/2025/07/09/12/15/fox-9704574_1280.jpg" alt="" className="aspect-auto" />
      <img src="https://cdn.pixabay.com/photo/2022/10/04/11/47/glass-front-7498002_1280.jpg" alt="" className="aspect-square" />
      <img src="https://cdn.pixabay.com/photo/2025/05/21/16/21/stork-9614143_1280.jpg" alt="" className="aspect-18/15" />
      <img src="https://cdn.pixabay.com/photo/2025/04/04/16/44/clouds-9513725_1280.jpg" alt="" className="" />
    </div>
    
    <h1 className='bg-blue-900  text-white my-4 text-center'>Setting by width</h1>

    <div className=" bg-yellow-500 columns-sm">
        <img src="https://cdn.pixabay.com/photo/2025/04/24/01/29/trees-9554109_1280.jpg" alt=" "/> 
        <img src="https://cdn.pixabay.com/photo/2025/07/20/07/37/hand-9723837_1280.jpg" alt=""  />
        <img src="https://cdn.pixabay.com/photo/2025/06/12/07/37/cow-lake-9655657_1280.jpg" alt=""  />
        <img src="https://cdn.pixabay.com/photo/2025/07/22/22/21/iceberg-9729316_1280.jpg" alt=""  />
        <img src="https://cdn.pixabay.com/photo/2025/06/14/21/46/plane-9660343_1280.jpg" alt=""  />
        <img src="https://cdn.pixabay.com/photo/2025/04/24/01/29/trees-9554109_1280.jpg" alt="" /> 
        <img src="https://cdn.pixabay.com/photo/2025/07/20/07/37/hand-9723837_1280.jpg" alt="" />
    </div>

    <h1 className='bg-blue-900  text-white my-4 text-center'>Using a custom value</h1>


    <div className="bg-blue-300 columns-[250px]">
      <div className="bg-red-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit nihil consequatur magni, non fugit molestiae magnam perferendis impedit. Quae sint praesentium quis consectetur exercitationem consequuntur incidunt minima voluptatibus corporis tenetur.</div>
      <div className="bg-blue-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit nihil consequatur magni, non fugit molestiae magnam perferendis impedit. Quae sint praesentium quis consectetur exercitationem consequuntur incidunt minima voluptatibus corporis tenetur.</div>
      <div className="bg-green-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit nihil consequatur magni, non fugit molestiae magnam perferendis impedit. Quae sint praesentium quis consectetur exercitationem consequuntur incidunt minima voluptatibus corporis tenetur.</div>
      <div className="bg-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit nihil consequatur magni, non fugit molestiae magnam perferendis impedit. Quae sint praesentium quis consectetur exercitationem consequuntur incidunt minima voluptatibus corporis tenetur.</div>
      <div className="bg-yellow-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit nihil consequatur magni, non fugit molestiae magnam perferendis impedit. Quae sint praesentium quis consectetur exercitationem consequuntur incidunt minima voluptatibus corporis tenetur.</div>
    </div>
    
    <h1 className='bg-blue-900  text-white my-4 text-center'>Responsive design</h1>

    <div className="@container">
      <div className=" bg-red-200 columns-4  @lg:columns-2">
        <img src="https://cdn.pixabay.com/photo/2025/04/24/01/29/trees-9554109_1280.jpg" alt=" "/> 
        <img src="https://cdn.pixabay.com/photo/2025/07/20/07/37/hand-9723837_1280.jpg" alt=""  />
        <img src="https://cdn.pixabay.com/photo/2025/06/12/07/37/cow-lake-9655657_1280.jpg" alt=""  />
        <img src="https://cdn.pixabay.com/photo/2025/07/22/22/21/iceberg-9729316_1280.jpg" alt=""  />
        <img src="https://cdn.pixabay.com/photo/2025/06/14/21/46/plane-9660343_1280.jpg" alt=""  />
        <img src="https://cdn.pixabay.com/photo/2025/04/24/01/29/trees-9554109_1280.jpg" alt="" /> 
        <img src="https://cdn.pixabay.com/photo/2025/07/20/07/37/hand-9723837_1280.jpg" alt="" />
      </div>
    </div>
    
    <h1 className='bg-blue-900  text-white my-4 text-center'>Customizing your theme</h1>

    <div className="bg-blue-300 columns-16xs">
      <div className="bg-red-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit nihil consequatur magni, non fugit molestiae magnam perferendis impedit. Quae sint praesentium quis consectetur exercitationem consequuntur incidunt minima voluptatibus corporis tenetur.</div>
      <div className="bg-blue-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit nihil consequatur magni, non fugit molestiae magnam perferendis impedit. Quae sint praesentium quis consectetur exercitationem consequuntur incidunt minima voluptatibus corporis tenetur.</div>
      <div className="bg-green-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit nihil consequatur magni, non fugit molestiae magnam perferendis impedit. Quae sint praesentium quis consectetur exercitationem consequuntur incidunt minima voluptatibus corporis tenetur.</div>
      <div className="bg-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit nihil consequatur magni, non fugit molestiae magnam perferendis impedit. Quae sint praesentium quis consectetur exercitationem consequuntur incidunt minima voluptatibus corporis tenetur.</div>
      <div className="bg-yellow-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit nihil consequatur magni, non fugit molestiae magnam perferendis impedit. Quae sint praesentium quis consectetur exercitationem consequuntur incidunt minima voluptatibus corporis tenetur.</div>
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

