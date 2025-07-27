import './App.css';


import styles from "./Button.module.css"

function App() {
    return (
    
    <>
    <h1 className='bg-blue-900 text-white my-4'>not hover not focus</h1>
    {/* not hover not focus */}
      <button className="bg-sky-700 hover:not-focus:bg-indigo-700">
        saved
      </button>

      <button className={styles.testButton}>
        please click me
      </button>




      {/* <div className="not-supports-[display:grid]:flex">
        <div>column1</div>
        <div>column2</div>
        <div>column3</div>
      </div>
 */}


      <h1 className='bg-blue-900 text-white my-4 '>Styling based on parent state </h1>
      {/* Styling based on parent state */}
      <div className='group bg-amber-200'>
        <div className='group-hover:bg-amber-700'>
          ✅
        </div>
        <div className='group-hover:text-white'>
          new project
        </div>
        <div className='group-hover:text-blue-800 group-hover:bg-green-700'>
          create a new project 
        </div>
      </div>


      <h1 className='bg-blue-900 text-white my-4'>Differentiating nested groups</h1>


      {/* Differentiating nested groups */}
      <ul role = "list">
        <li className='group/item'>
          <a href="#" className=''>
            click one 
            <span className='px-5  group/edit invisible group-hover/item:visible hover:text-green-600'>call</span>
          </a>
        </li>
        <li className='group/item'>
          <a href="#" className=''>
            click two 
            <span className='px-5 group/edit invisible group-hover/item:visible hover:text-green-600'>call</span>
          </a>
        </li>
        <li className='group/item'>
          <a href="#" className=''>
            click three
            <span className='px-5 group/edit invisible group-hover/item:visible hover:text-green-600'>call</span>
          </a>
        </li>
      </ul>


      <h1 className='bg-blue-900 text-white my-4'>Arbitrary groups</h1>

      <div className='group is-published'>
        <div className='hidden group-[.is-published]:block'>
          Published
        </div>
      </div>

      <div className="group">
        <div className="group-[:nth-of-type(3)_&]:block">
          <div className='hidden'>1</div>
          <div className='hidden'>2</div>
          <div className='hidden'>3</div>
          <div className='hidden'>4</div>
        </div>
      </div>


      <h1 className='bg-blue-900 text-white my-4'>Implicit groups</h1>
      <div className='group' tabIndex="0">
          <button className="opacity-50 group-focus:opacity-100 bg-blue-300">          test focus
          </button>
      </div>

      <div className="" tabIndex="0">
        <button className='opacity-20 in-focus:opacity-100 bg-red-700'>
          test focus
        </button>
      </div>

      <h1 className='bg-blue-900 text-white my-4'>Styling based on sibling state</h1>

        <form action="">
          <label htmlFor="" className="">Email</label>
          <div></div>
          <input type="email" className="peer border border-rose-900" />
          <p className='visible peer-invalid:invisible'>
            Please provide a valid email address.
          </p>
        </form>


      <h1 className='bg-blue-900 text-white my-4'>Differentiating peers</h1>

      <fieldset>
        <legend>Published status</legend>
        <input type="radio"  name = "status" id = "draft" className='peer/draft'/>
        <label for = "draft" className='peer-checked/draft:text-sky-500'>Draft</label>

        <input type="radio"  name = "status" id = "published" className='peer/published'/>
        <label for = "published" className='peer-checked/published:text-red-500'>Published</label>

        <div className="hidden peer-checked/draft:block text-sky-500">Drafts are only visible to adminstrators</div>
        <div className="hidden peer-checked/published:block text-red-500">Your post will be publicly visible on your site.</div>
      </fieldset>

      <h1 className='bg-blue-900 text-white my-4'>Arbitrary peers</h1>
      <form>
        <label htmlFor="" for = "email">Email :</label>
        <input type="email" name = 'email' id = "email" className='is-dirty peer  border-2 border-amber-300' required />
        <div className="hidden peer-[.is-dirty]:peer-required:block">This field is required.</div>
      </form>
      

      <h1 className='bg-blue-900 text-white my-4'>::before and ::after</h1>
      
      <form action="">
        <label htmlFor="" >
          <span className='text-gray-700 after:ml-2.5 after:text-red-700 after:content-["*"]'>Email</span>
          <div></div>
          <input type="email" name = "email" className='border-red-300 border-4' />
        </label>
      </form>

      <div className='my-2'></div>
      <blockquote class="text-center text-2xl font-semibold text-gray-900 italic dark:text-white bg-yellow-950">
          When you look
          <span class="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-pink-500">
            <span class="relative text-white dark:text-gray-950">annoyed</span>
          </span>
          all the time, people think that you're busy.
      </blockquote>

      <h1 className='bg-blue-900 text-white my-4'>::placeholder</h1>
      <input
        className='placeholder:text-gray-500 placeholder:italic border-2 border-amber-300'
        placeholder='Search for anything...'
        type = "text"
        name = "search"
      ></input>


      <h1 className='bg-blue-900 text-white my-4'>::file</h1>
      <div className="bg-indigo-90">
        <input type="file"
          className='file:mr-4 file:h-10 file:w-25 file:rounded-full file:border-0 file:bg-violet-500 file:text-sm file:font-semibold file:text-violet-700 hover:file:bg-violet-600 dark:file:text-violet-100 dark:hover:file:bg-violet-500 ' 
        />

      </div>


      <h1 className='bg-blue-900 text-white my-4'>::marker</h1>
      <ul role = "list" className='list-disc marker:text-sky-400'>
        <li className='list-disc marker:text-sky-500'>5 cups chopped Porcini mushrooms</li>
        <li className='list-disc marker:text-sky-500'>1/2 cup of olive oil</li>
        <li className='list-disc marker:text-sky-500'>3lb of celery</li>
      </ul>
      
      <h1 className='bg-blue-900 text-white my-4'>::selection</h1>
      <div className='selection:bg-fuchsia-300 selection:text-fuchsia-900'>
        <p>    
          So I started to walk into the water. I won't lie to you boys, I was terrified. But I pressed on, and as I made my
          way past the breakers a strange calm came over me. I don't know if it was divine intervention or the kinship of all
          living things but I tell you Jerry at that moment, I <em>was</em> a marine biologist.
        </p>
      </div>
      
      <h1 className='bg-blue-900 text-white my-4'>::first-line and ::first-letter</h1>
      <div className='text-gray-700'>
        <p className='first-letter:float-left first-letter:mr-3 first-letter:font-bold first-letter:text-7xl first-letter:text-gray-900 first-line:tracking-widest first-line:uppercase'>
          Well, let me tell you something, funny boy. Y'know that little stamp, the one that says "New York Public Library"?
        </p>
        <p class="mt-6">Well that may not mean anything to you, but that means a lot to me. One whole hell of a lot.</p>
      </div>
      <h1 className='bg-blue-900 text-white my-4'>::backdrop</h1>

      <div className='backdrop-blur-2xl bg-blue-50'>
        <form action="" method = "dialog">
          <label htmlFor="">NAME</label>
          <input type="text" className='border-2 border-amber-300'/>
        </form>
      </div>
      
      <h1 className='bg-blue-900 text-white my-4'>Responsive breakpoints</h1>
        <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-1">
          <div  className='bg-amber-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint corrupti omnis quam tempore? Corrupti, a quibusdam quisquam dolores esse atque, minima eos doloribus illo ducimus excepturi, ratione culpa? Quidem, commodi.</div>
          <div  className='bg-red-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint corrupti omnis quam tempore? Corrupti, a quibusdam quisquam dolores esse atque, minima eos doloribus illo ducimus excepturi, ratione culpa? Quidem, commodi.</div>
          <div  className='bg-blue-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint corrupti omnis quam tempore? Corrupti, a quibusdam quisquam dolores esse atque, minima eos doloribus illo ducimus excepturi, ratione culpa? Quidem, commodi.</div>
        </div>

      <h1 className='bg-blue-900 text-white my-4'>prefers-color-scheme</h1>
      <div className="bg-white dark:bg-gray-900">
        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem doloribus inventore ab aliquam, officiis, earum recusandae nesciunt porro, adipisci voluptate modi dolorum. Aut consectetur quia fuga quibusdam magnam et laborum!</h3>
      </div>
      
      <h1 className='bg-blue-900 text-white my-4'>prefers-reduced-motion</h1>
     <button type="button" class="bg-indigo-500 ..." disabled>
          <svg class="animate-spin motion-reduce:hidden ..." viewBox="0 0 24 24"></svg>
          Processing...
      </button>

      <h1 className='bg-blue-900 text-white my-4'>prefers-contrast</h1>

      <div className="bg-amber-100">
          <span className='block text-sm font-medium text-gray-700'>
            Social Security Number
          </span>
          <input type="text" className='border-4 border-gray-200 placeholder-sky-200 contrast-more:border-gray-400 contrast-more:placeholder-orange-400' placeholder='000-00-0000'  />
      </div>
     
      <h1 className='bg-blue-900 text-white my-4'>forced-colors</h1>
      <label>
        <input type="radio" className="forced-colors:appearance-auto" />
        <p className="hidden forced-colors:block">Cyan</p>
        <div className="bg-cyan-200 forced-colors:none ...">one</div>
        <div className="bg-cyan-500 forced-colors:hidden ...">two</div>
        <div className="bg-cyan-700 forced-colors:hidden ...">three</div>
      </label>

      <h1 className='bg-blue-900 text-white my-4'>print</h1>
      <div>
        <article class="print:hidden">
          <h1>My Secret Pizza Recipe</h1>
          <p>This recipe is a secret, and must not be shared with anyone</p>

        </article>
        <div class=" print:block">Are you seriously trying to print this? It's secret!</div>
      </div>
    </>

  )
}

export default App

