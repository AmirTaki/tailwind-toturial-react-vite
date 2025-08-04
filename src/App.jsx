import './App.css';
import Button from './component/Button';
import ButtonTwo from './component/ButtonTwo';

function App() {
  const error = true;
  return (
    
    <>    
      <h1 className='bg-blue-900  text-white my-4 text-center'>Detecting classes in source files</h1>
      <h1 className='bg-blue-900 text-white my-4 text-center'>    How classes are detected</h1>
      
      <Button color = "white" children="click button"/>
      <Button color = "black" children="click button"/>
      <Button color = "blue" children="click button"/>

      <h1 className='bg-blue-900 text-white my-4 text-center'>  Always use complete class names</h1>    

      <div className= {error ? "text-green-500" : "text-red-500"}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores accusamus optio tempore molestias nemo delectus nam ratione corporis eum eligendi natus excepturi provident minus, facilis suscipit ullam consectetur maiores atque.
      </div>

      <h1 className='bg-blue-900 text-white my-4 text-center'>  Always map props to static class names</h1>    
      <ButtonTwo color = "red" children = "clickMe"/>
      <ButtonTwo color = "blue" children = "clickMe"/>
      <ButtonTwo color = "white" children = "clickMe"/>
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

