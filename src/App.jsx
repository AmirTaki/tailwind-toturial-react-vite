import './App.css';


function App() {
 const numbers = [1, 2, 3, 4, 5, 6]

  return (
    
    <>    
      <h1 className='bg-blue-900 text-white my-4 text-center'>Adding custom styles</h1>
     
      <h1 className='bg-blue-900 text-white my-4 text-center'>Customizing your theme</h1>
      
      <div className="font-display bg-avocado-300 3xl:bg-avocado-600 ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis dolores esse nihil laudantium libero vero quasi dolore expedita, eius adipisci exercitationem odit eaque reprehenderit quod! Distinctio et porro sequi sit?
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa pariatur facilis aut, id numquam suscipit ipsum magnam perferendis sit nostrum consectetur ex excepturi nemo reprehenderit enim odio atque ducimus veritatis!</h1>
        <button className='border-2 m-3 bg-avocado-500'>button</button>
        <p className='bg-[#93ae] text-[#fff] before:content-["Festivus"]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat alias minima officia voluptatibus delectus beatae saepe laudantium. Omnis tempora animi porro laborum voluptatibus nisi. Maxime atque ipsa ab ut dolore.</p>
  
        <p className='mt-5 bg-amber-100 text-(--my-brand-color)'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio saepe necessitatibus harum deleniti magnam exercitationem molestias nisi, consequatur quo veritatis quisquam, consectetur nemo eum, mollitia animi! Molestias ad perferendis voluptas?
        </p>
      </div>

      <h1 className='bg-blue-900 text-white my-4 text-center'>Arbitrary properties</h1>
      <div className='[background-color:red] lg:[background-color:blue]' >
        <svg viewBox="0 0 1024 1024" style ={{width:"50px"}} className='w-10 [mask-type:luminance] hover:[mask-type:alpha] '  class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M447.934 684h136v179h-136z" fill="#2CC4FE"></path><path d="M587.934 867h-144V680h144v187z m-136-8h128V688h-128v171z" fill="#515151"></path><path d="M872.934 698.076h-724c-11.046 0-20-8.954-20-20v-472c0-11.046 8.954-20 20-20h724c11.046 0 20 8.954 20 20v472c0 11.046-8.955 20-20 20z" fill="#2CC4FE"></path><path d="M872.934 702.076h-724c-13.234 0-24-10.766-24-24v-472c0-13.233 10.766-24 24-24h724c13.234 0 24 10.767 24 24v472c0 13.234-10.767 24-24 24z m-724-512c-8.822 0-16 7.178-16 16v472c0 8.822 7.178 16 16 16h724c8.822 0 16-7.178 16-16v-472c0-8.822-7.178-16-16-16h-724z" fill="#515151"></path><path d="M889 621H133V206.538c0-9.092 7.37-16.462 16.462-16.462h723.076c9.092 0 16.462 7.37 16.462 16.462V621z" fill="#A1E4FD"></path><path d="M324 863h383" fill="#2CC4FE"></path><path d="M707 867H324a4 4 0 0 1 0-8h383a4 4 0 0 1 0 8z" fill="#515151"></path><path d="M177.248 350.183l86.995-86.996" fill="#2CC4FE"></path><path d="M177.248 354.183a4 4 0 0 1-2.829-6.828l86.996-86.996a4 4 0 0 1 5.657 5.657l-86.996 86.996a3.991 3.991 0 0 1-2.828 1.171z" fill="#D7F9FF"></path><path d="M177.248 420.679L329.37 268.557" fill="#2CC4FE"></path><path d="M177.248 424.679a4 4 0 0 1-2.829-6.828l152.123-152.123a4 4 0 0 1 5.657 5.657L180.076 423.508a3.987 3.987 0 0 1-2.828 1.171z" fill="#D7F9FF"></path></g></svg>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, nemo culpa aperiam est vitae nobis fuga amet! Dicta, quod ducimus exercitationem pariatur autem magni qui iure dignissimos, quos, alias atque?
      </div>

      <h1 className='bg-blue-900 text-white my-4 text-center'>Arbitrary variants</h1>
      <ul>
        {numbers.map(number => (
          <li className="lg:[&:nth-child(-n+3)]:hover:underline"> item{number}</li>
        ))}
      </ul>

      <h1 className='bg-blue-900 text-white my-4 text-center'>Handling whitespace</h1>
      <div className="grid grid-cols-[1fr_500px_2fr]">
        <div className="w-auto h-20 bg-amber-300"></div>
        <div className="w-auto h-20 bg-amber-500"></div>
        <div className="w-auto h-20 bg-amber-800"></div>
      </div>
      
      <div className="bg-red-700 text-yellow-300 my-3">important</div>
      
      <div className="w-50 h-50 bg-[url('assets/pexels_marcele.jpg')]"></div>
      
      <div className="before:content-['hello\_world']"></div>
      
      <div className={String.raw`before:content-['hello\_world']`}></div>

      <h1 className='bg-blue-900 text-white my-4 text-center'>Resolving ambiguities</h1>

      <div className="text-[var(--color-avocado-200)]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam sit inventore sapiente necessitatibus et in porro, error autem ea blanditiis optio repellat! Minima totam dolorem veritatis molestiae fugit quam. Nisi.</div>
      
      <div className="text-(--color-avocado-600)">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea dolor doloribus eius unde assumenda aperiam. Ipsum amet quod illum autem modi, illo quia culpa sunt consequatur dolore doloribus. Repellendus, cumque.  </div>
      
      <div className='bg-[var(--color-avocado-300)] hover:bg-[var(--my-brand-color)]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque corporis eaque, magnam eos nostrum odio eveniet ipsum, quod qui iusto debitis? Nulla molestiae totam ducimus odit maiores ex reiciendis quae.</div>
      
      <div className="bg-(color:--color-avocado-600) hover:bg-(color:--my-brand-color) ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo unde ducimus maxime porro, eius, aspernatur consequatur accusamus placeat aut modi velit nisi sequi ex, deleniti dolores quidem quae. Eaque, voluptatibus!</div>
   
      <br />
      <div className="text-[30px] text-[var(--my-brand-color)]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi amet obcaecati similique ipsam tempore repellendus recusandae cupiditate! Illum accusamus quos blanditiis nobis atque praesentium tenetur sequi! Architecto accusantium voluptas magnam!</div>
      <br />
      <div className="text-(length:--size-font) text-(color:--my-brand-color)" >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis laudantium dignissimos expedita explicabo laborum porro obcaecati vel ducimus, dolor officia. Sequi perspiciatis mollitia tempora cupiditate numquam saepe debitis repellat laborum?</div>
        
      <h1 className='bg-blue-900 text-white my-4 text-center'>Adding base styles</h1>
      <h4 className='text-(color:--color-avocado-600)'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga soluta obcaecati qui nesciunt consequuntur reiciendis libero eaque debitis culpa. Dicta aliquid dolor laborum vero alias fugit corporis ipsam delectus nemo?</h4>
      <h5 className='text-[var(--color-avocado-400)]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut dolorem quaerat sunt minima facilis at harum corporis! Libero, dignissimos earum quis quia sunt sint repellat in, laboriosam voluptates officiis nemo.</h5>
    
      <br />
      <h1 className='bg-blue-900 text-white my-4 text-center'>Adding component classes</h1>
      <div className="w-50 h-50 card rounded-none">
          lorem test part of adding commpinnet classes
      </div>

      <br />
      <h1 className='bg-blue-900 text-white my-4 text-center'>Using variants</h1>
      <div  data-theme = "dark">
        <div className="my-element ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quaerat necessitatibus tempore itaque ratione incidunt non, soluta autem quos facere maiores eaque illo? Obcaecati dolor consequatur vel maxime sed ipsam?
        </div>
      </div>
      
      <br />
      <h1 className='bg-blue-900 text-white my-4 text-center'>Simple utilities</h1>
      <div className="hover:content-auto">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae voluptatem nesciunt necessitatibus laboriosam perferendis. Ut illo, omnis autem reiciendis consequatur sunt repudiandae, expedita perferendis laboriosam fugiat fuga aspernatur nisi nesciunt ad mollitia minima rerum, eveniet illum quos consectetur a? Deleniti nulla voluptatum sed molestiae ratione animi possimus voluptates? Tempora nemo eum, quae voluptate minus laudantium hic sunt est porro atque sequi debitis, voluptates iste exercitationem officiis corporis dicta quas aut eos impedit! Ipsam accusamus fuga aspernatur culpa nostrum nisi quas nemo doloremque! Similique, quia dolorum commodi atque maiores hic, et optio a dicta quae consectetur! Magni modi debitis inventore? Ut itaque mollitia corrupti voluptates nam, consectetur, at saepe tempora assumenda vel, amet voluptatem a! Tempora nobis saepe voluptatum aspernatur cum cumque magni autem iure, aliquid dolor, optio id illo expedita repellat! Autem saepe itaque unde cumque quasi rem iste natus facilis fuga officia repellat voluptatibus asperiores ut delectus similique commodi, inventore maxime quisquam provident molestias obcaecati numquam! Beatae adipisci eos fugit! Deleniti facere, assumenda aperiam unde impedit eveniet nulla debitis commodi itaque laborum rem cum harum vero, ex, sapiente quam laudantium ipsa consectetur a tempora! Ab provident libero officia nostrum. Illo facilis ea eum dolor, ullam ut repellat minima atque.</div>
         
      <br />
      <h1 className='bg-blue-900 text-white my-4 text-center'>Complex utilities</h1>
      <div className="h-80 overflow-auto bg-red-100 scrollbar-hidden p-2">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, fugit aspernatur! Molestias animi ex a nemo, pariatur eum ut placeat temporibus repellendus, excepturi maiores eius alias fuga esse est ducimus perspiciatis distinctio dolore. Delectus vero soluta, quibusdam assumenda dolore, autem quisquam optio voluptate harum fugiat ipsam perferendis nisi non alias architecto. Tenetur blanditiis debitis omnis vel sequi aliquid repellendus, ipsam dolorum incidunt fuga commodi autem, quia eveniet, nemo obcaecati recusandae eius ullam non hic asperiores voluptates qui. Repudiandae quos magni quibusdam fugit! Voluptatibus aut hic delectus eum itaque, nihil ab ullam corporis harum atque voluptas qui, sunt sed tempora soluta enim eos commodi autem quia eveniet? Cupiditate illo dolor atque nobis unde ipsum ullam? Consequuntur eveniet, rem, unde voluptate debitis cupiditate iste veniam atque, at voluptatem placeat dignissimos recusandae molestiae libero dolorem doloribus et! In dolorem quos necessitatibus nulla similique ut blanditiis ipsam animi magnam asperiores minima molestiae, optio maxime? Cupiditate quisquam dolore adipisci mollitia amet doloremque voluptate recusandae omnis nam consectetur? Facilis cumque voluptatem corporis voluptas obcaecati blanditiis quas sit minus alias quidem possimus beatae, nesciunt reprehenderit dolorum officia. Vitae dolorum soluta sequi sunt fugiat? Laudantium, iste nostrum reprehenderit assumenda, adipisci aperiam nulla omnis quae expedita perspiciatis quidem reiciendis accusamus beatae numquam veritatis dolore tempore quibusdam sequi. Nobis minus doloremque possimus ipsa repellat tenetur culpa alias magnam amet quas maxime reprehenderit officia nemo, cumque sed iure dignissimos eos deleniti. Dignissimos eveniet consectetur enim esse dolorum reiciendis modi perferendis saepe cum? Natus consequuntur recusandae, voluptatibus fugiat nemo quam adipisci, labore tempore distinctio, dolorum aspernatur nostrum odit debitis voluptates error quo obcaecati hic ducimus ab facere expedita illum! Dolor sunt recusandae itaque nesciunt! Corrupti facere sequi reprehenderit dolores architecto id consequatur hic accusantium debitis repellat minima iste, nesciunt error nemo. Architecto repellat aut rem ut fugiat illo alias sed hic cum.
      </div>
      
      
      <br />
      <h1 className='bg-blue-900 text-white my-4 text-center'>Functional utilities</h1>

      <div className=" bg-blue-100   h-30 overflow-hidden " >
        <button className='border-red-300 border-2 w-100 '>123224123</button>
      </div>

      <div className="border-2  h-50 bg-red-500">
          <div className='w-10 h-10 bg-yellow-300 mt-3'></div>
      </div>

        <div className="custom-link-avocado-400">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam voluptatem, quae aperiam laborum numquam cumque modi facere voluptatibus velit recusandae minus atque assumenda repellendus explicabo exercitationem non nobis eius corrupti.
        </div>

        <div className="custom-link-red-500">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, est optio quasi non iusto, molestiae amet laudantium voluptatem maiores doloremque nemo tempore quibusdam voluptate veritatis omnis officiis, quos possimus quis.
        </div>

        <br></br>
        <div className="custom-link-yellow-900  opacity-30">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero iusto saepe aut repudiandae odit soluta, dolorem nemo corporis eaque optio reprehenderit natus? Nam quasi nisi optio dolorum praesentium labore laudantium.
        </div>

        <br />
        <h1 className='bg-blue-900 text-white my-4 text-center'>Adding custom variants</h1>

        <div data-theme="midnight">
          <div className="theme-midnight:bg-yellow-300" >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis, ab laudantium fugiat aspernatur explicabo non nemo dicta quo dolorum soluta ea molestias alias magnam nam voluptatum, numquam maxime. Eaque, pariatur.
          </div>
        </div>

        <div data-theme="midlight">
          <div className="theme-midnight:bg-blue-50">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni modi et reprehenderit, veniam facilis fugiat ipsum, voluptatum quod asperiores praesentium molestiae ullam voluptatibus suscipit temporibus voluptatem itaque iste nemo commodi?
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