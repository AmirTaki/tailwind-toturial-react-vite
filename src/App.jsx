import './App.css';

function App() {

  return (
    
    <>    
      <h1 className='bg-blue-900  text-white my-4 text-center'>break-inside</h1>
      {/* <div className="columns-2">
        <p>Well, let me tell you something, ...</p>
        <p className="break-inside-avoid-column">Sure, go ahead, laugh...</p>
        <p>Maybe we can live without...</p>
        <p>Look. If you think this is...</p>
    </div> */}

    <div className="columns-3 bg-gray-300">
      <div className="bg-white mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, omnis.</div>
      <div className="bg-white mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias voluptatum qui earum! Quidem, quo!</div>
      <div className="bg-white mb-2 break-inside-avoid-column">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat eos maiores aut consequuntur a vitae maxime explicabo ipsa vel numquam?</div>
      <div className="bg-white mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum dolor dolorum sapiente enim.</div>
      <div className="bg-white mb-2 break-inside-avoid">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae illo magni vel quis eaque!</div>     
      <div className="bg-white mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, ab ratione nisi dolor saepe autem sunt voluptatem quae consectetur exercitationem omnis aliquid labore itaque eum, ipsum sapiente incidunt consequatur? Officiis.</div>
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

