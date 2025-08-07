import './App.css';

function App() {

  return (
    
    <>    
      <h1 className='bg-blue-900  text-white my-4 text-center'>clear</h1>
      <h1 className='bg-blue-900  text-white my-4 text-center'>Clearing left</h1>
      

      <div className="bg-amber-300">
        <article>
          <img  className = "float-left "src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR132TBAD0-GhGhN8_2Xr-3obkFd4NzFbk6Hg&s" alt="" />
          <img  className = "float-right h-70 w-80 "src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZeL6XS4S2Btz31wHX_Hgq9NY2zIBcJrO79A&s" alt="" />
          <p className='clear-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur numquam omnis voluptates consequuntur id doloribus. Quidem ullam, praesentium quae at earum quasi provident quos recusandae, dolorem nihil consequuntur illum modi!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius necessitatibus molestias aperiam blanditiis expedita at debitis delectus quidem repudiandae ut, consequuntur nulla! Perferendis totam, culpa quaerat reprehenderit beatae labore nisi.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint quidem molestiae sunt nostrum omnis magni accusantium, dolor inventore, porro a quo eaque maxime architecto vero nisi! Tempora maxime harum vitae?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus quasi ducimus ipsam voluptatem doloribus natus excepturi aspernatur dolores officia ea labore aut illum, placeat deserunt accusantium unde rerum, repudiandae quibusdam.
          </p>
        </article>
      </div>

      <h1 className='bg-blue-900  text-white my-4 text-center'>Clearing right</h1>
      <div className="bg-red-300">
        <article>
          <img  className = "float-left  h-70 w-80"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR132TBAD0-GhGhN8_2Xr-3obkFd4NzFbk6Hg&s" alt="" />
          <img  className = "float-right "src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZeL6XS4S2Btz31wHX_Hgq9NY2zIBcJrO79A&s" alt="" />
          <p className='clear-right'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur numquam omnis voluptates consequuntur id doloribus. Quidem ullam, praesentium quae at earum quasi provident quos recusandae, dolorem nihil consequuntur illum modi!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius necessitatibus molestias aperiam blanditiis expedita at debitis delectus quidem repudiandae ut, consequuntur nulla! Perferendis totam, culpa quaerat reprehenderit beatae labore nisi.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint quidem molestiae sunt nostrum omnis magni accusantium, dolor inventore, porro a quo eaque maxime architecto vero nisi! Tempora maxime harum vitae?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus quasi ducimus ipsam voluptatem doloribus natus excepturi aspernatur dolores officia ea labore aut illum, placeat deserunt accusantium unde rerum, repudiandae quibusdam.
          </p>
        </article>
      </div>

      <h1 className='bg-blue-900  text-white my-4 text-center'>Clearing all</h1>
      <div className="bg-green-300">
          <article>
            <img  className = "float-left  h-70 w-80"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR132TBAD0-GhGhN8_2Xr-3obkFd4NzFbk6Hg&s" alt="" />
            <img  className = "float-right "src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZeL6XS4S2Btz31wHX_Hgq9NY2zIBcJrO79A&s" alt="" />
            <p className='clear-both'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur numquam omnis voluptates consequuntur id doloribus. Quidem ullam, praesentium quae at earum quasi provident quos recusandae, dolorem nihil consequuntur illum modi!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius necessitatibus molestias aperiam blanditiis expedita at debitis delectus quidem repudiandae ut, consequuntur nulla! Perferendis totam, culpa quaerat reprehenderit beatae labore nisi.
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint quidem molestiae sunt nostrum omnis magni accusantium, dolor inventore, porro a quo eaque maxime architecto vero nisi! Tempora maxime harum vitae?
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus quasi ducimus ipsam voluptatem doloribus natus excepturi aspernatur dolores officia ea labore aut illum, placeat deserunt accusantium unde rerum, repudiandae quibusdam.
            </p>
          </article>
        </div>

        <h1 className='bg-blue-900  text-white my-4 text-center'>Using logical properties</h1>
        <div className="bg-orange-300">
          <article dir = "rtl">
            <img  className = "float-left  "src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR132TBAD0-GhGhN8_2Xr-3obkFd4NzFbk6Hg&s" alt="" />
            <img  className = "float-right h-70 w-80 "src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZeL6XS4S2Btz31wHX_Hgq9NY2zIBcJrO79A&s" alt="" />
            <p className='clear-end'>
              ربما يمكننا العيش بدون مكتبات، أشخاص مثلي ومثلك. ربما. بالتأكيد، نحن أكبر من أن نغير العالم، ولكن ماذا عن ذلك الطفل الذي يجلس ويفتح كتابًا الآن في أحد فروع المكتبة المحلية ويجد رسومات للتبول والبول على القطة في القبعة والإخوة الصينيون الخمسة؟ ألا يستحق الأفضل؟ ينظر. إذا كنت تعتقد أن الأمر يتعلق بالغرامات المتأخرة والكتب المفقودة، فمن الأفضل أن تفكر مرة أخرى. يتعلق الأمر بحق ذلك الطفل في قراءة كتاب دون أن يتشوه عقله! أو: ربما يثيرك هذا يا سينفيلد؛ ربما هذه هي الطريقة التي تحصل بها على ركلاتك. أنت ورفاقك الطيبين.
            </p>
          </article>
        </div>

        <h1 className='bg-blue-900  text-white my-4 text-center'>Disabling clears</h1>
        <div className="bg-amber-300">
          <article>
            <img  className = "float-left  h-70 w-80"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR132TBAD0-GhGhN8_2Xr-3obkFd4NzFbk6Hg&s" alt="" />
            <img  className = "float-right "src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZeL6XS4S2Btz31wHX_Hgq9NY2zIBcJrO79A&s" alt="" />
            <p className='clear-none'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur numquam omnis voluptates consequuntur id doloribus. Quidem ullam, praesentium quae at earum quasi provident quos recusandae, dolorem nihil consequuntur illum modi!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius necessitatibus molestias aperiam blanditiis expedita at debitis delectus quidem repudiandae ut, consequuntur nulla! Perferendis totam, culpa quaerat reprehenderit beatae labore nisi.
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint quidem molestiae sunt nostrum omnis magni accusantium, dolor inventore, porro a quo eaque maxime architecto vero nisi! Tempora maxime harum vitae?
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus quasi ducimus ipsam voluptatem doloribus natus excepturi aspernatur dolores officia ea labore aut illum, placeat deserunt accusantium unde rerum, repudiandae quibusdam.
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

