import './App.css';
import img from "./assets/1016556-free-manhattan-wallpaper-2560x1600-4k.jpg"
function App() {

  return (
    
    <>    
      <h1 className='bg-blue-900  text-white my-4 text-center'>visibility</h1>
      <h1 className='bg-blue-900  text-white my-4 text-center'>Making elements invisible</h1>
    
      <div className="flex justify-center items-center gap-4">
        <div className="bg-blue-300 w-20 h-20 rounded-md flex items-center justify-center text-white">01</div>
        <div className="invisible bg-blue-300 w-20 h-20 rounded-md flex items-center justify-center text-white">02</div>
        <div className="bg-blue-300 w-20 h-20 rounded-md flex items-center justify-center text-white">03</div>
      </div>

      <h1 className='bg-blue-900  text-white my-4 text-center'>Collapsing elements</h1>
      <table>
        <thead>
          <tr>
            <th>Invoice #</th>
            <th>Client</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#100</td>
            <td>Pendant Publishing</td>
            <td>$2,000.00</td>
          </tr>
          <tr className='collapse'>
            <td>#101</td>
            <td>Kruger Industrial Smoothing</td>
            <td>$545.00</td>
          </tr>
          <tr>
            <td>#102</td>
            <td>J. Peterman</td>
            <td>$10,000.25</td>
          </tr>
        </tbody>
      </table>
      <h1 className='bg-blue-900  text-white my-4 text-center'>Making elements visible</h1>
    
      <div className="flex justify-center items-center gap-4">
        <div className="bg-blue-300 w-20 h-20 rounded-md flex items-center justify-center text-white">01</div>
        <div className="visible bg-blue-300 w-20 h-20 rounded-md flex items-center justify-center text-white">02</div>
        <div className="bg-blue-300 w-20 h-20 rounded-md flex items-center justify-center text-white">03</div>
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

