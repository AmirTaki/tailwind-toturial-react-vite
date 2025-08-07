import './App.css';

function App() {

  return (
    
    <>    
      <h1 className='bg-blue-900  text-white my-4 text-center'>float</h1>
      <h1 className='bg-blue-900  text-white my-4 text-center'>Floating elements to the right</h1>


      <div className=" bg-blue-400">
        <article>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcIiNk61ejzN_sz8P9TJh6i1wJb1eb3UGNVQ&s" alt="" className='w-50 float-right' />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet omnis nihil consequuntur tenetur maiores! Excepturi, est velit nemo ab totam aut blanditiis magni a eaque, natus, officiis dolore tempora cum.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia pariatur vero reiciendis, repellat explicabo dignissimos rerum fugit! Aut, aliquid molestias! Corrupti harum quaerat cupiditate accusamus doloremque officiis illum ipsum enim!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi laborum corporis aliquid accusamus repudiandae consequuntur praesentium error, quos, fugit incidunt quam perferendis eum perspiciatis optio quidem voluptate. Aliquam, placeat totam.
          </p>
        </article>
      </div>

      <br />
      <h1 className='bg-blue-900  text-white my-4 text-center'>Floating elements to the left</h1>

      <div className=" bg-red-400">
        <article>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcIiNk61ejzN_sz8P9TJh6i1wJb1eb3UGNVQ&s" alt="" className='w-50 float-left' />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet omnis nihil consequuntur tenetur maiores! Excepturi, est velit nemo ab totam aut blanditiis magni a eaque, natus, officiis dolore tempora cum.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia pariatur vero reiciendis, repellat explicabo dignissimos rerum fugit! Aut, aliquid molestias! Corrupti harum quaerat cupiditate accusamus doloremque officiis illum ipsum enim!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi laborum corporis aliquid accusamus repudiandae consequuntur praesentium error, quos, fugit incidunt quam perferendis eum perspiciatis optio quidem voluptate. Aliquam, placeat totam.
          </p>
        </article>
      </div>
      <br />
      <h1 className='bg-blue-900  text-white my-4 text-center'>Using logical properties</h1>

      <div className=" bg-green-400">
        <article>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcIiNk61ejzN_sz8P9TJh6i1wJb1eb3UGNVQ&s" alt="" className='w-50 float-start' />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet omnis nihil consequuntur tenetur maiores! Excepturi, est velit nemo ab totam aut blanditiis magni a eaque, natus, officiis dolore tempora cum.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia pariatur vero reiciendis, repellat explicabo dignissimos rerum fugit! Aut, aliquid molestias! Corrupti harum quaerat cupiditate accusamus doloremque officiis illum ipsum enim!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi laborum corporis aliquid accusamus repudiandae consequuntur praesentium error, quos, fugit incidunt quam perferendis eum perspiciatis optio quidem voluptate. Aliquam, placeat totam.
          </p>
        </article>
        
      </div>
      <div className=" bg-yellow-400">
        <article dir = "rtl">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcIiNk61ejzN_sz8P9TJh6i1wJb1eb3UGNVQ&s" alt="" className='w-50 float-start' />
          <p>
            ربما يمكننا العيش بدون مكتبات، أشخاص مثلي ومثلك. ربما. بالتأكيد، نحن أكبر من أن نغير العالم، ولكن ماذا عن ذلك الطفل الذي يجلس ويفتح كتابًا الآن في أحد فروع المينيكتبة المحلية ويجد رسومات للتبول والبول على القطة في القبخوة السّلام؟ ألا یستحق الأفضل؟ ينظر. إذا كنت تعتقد أن الأمر يتعلق بالغرامات المتأخرة والكتب المفقودة، فمن الأفضل أن تفكر مرة أخرى. یتعلق الأمر بحق ذلک الطفل فی قراءة کتاب دون أن یتشوه عقله! أو: ربما یثیرك هذا یا سینفیلد. ربما هذه هی الطریقة التی تحصل بها علی رکلاتک. أنت ورفاقك الطيبين
          </p>
        </article>
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

