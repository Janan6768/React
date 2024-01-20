import {useState} from "react"

function App() {
  const [color, setColor] = useState("olive")

  return (
  <div className="w-full h-full duration-200"
    style={{backgroundColor: color}}
    
    >
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam placeat dolorum sunt ullam aut quisquam ad qui, harum magni corrupti ut sapiente officia quos pariatur blanditiis consequuntur laudantium quo neque.
Aliquam odit, et quis iusto quas provident ipsum fugit perferendis porro aperiam possimus, suscipit quaerat quisquam rem obcaecati recusandae dignissimos? Quod tempora iusto vel. Rem numquam cumque officia sapiente est?
Rem quas nulla labore consectetur, illo, voluptatem cumque autem explicabo error, id sunt quibusdam minima corrupti. Soluta laboriosam rerum veritatis repellendus officia fugiat ea atque dolorum eum quae, nemo quod?
Veritatis quibusdam, assumenda consequuntur error sunt illum a reiciendis facilis maiores suscipit voluptatem in minus. Reiciendis, fugit. Ut deleniti nisi non tenetur, saepe ex ipsam? Eos libero velit a sed.
Atque magnam iste repellat accusantium, vel rerum maxime laboriosam consectetur perspiciatis natus id minus inventore pariatur eveniet porro? Iure, veniam. Quas quaerat provident totam repudiandae aliquam odit culpa quis non?
Tempore eos, earum praesentium sunt, id ducimus laudantium consequatur, quidem quam quos accusamus dolor. Laudantium cumque maiores in ad, obcaecati veritatis nostrum optio sint dicta architecto sunt enim esse eaque.
Consectetur eius tempore porro minus perferendis vero sequi fuga harum eos quidem. Iure fugit recusandae iusto error labore assumenda facere dolores at impedit dicta, eveniet aliquid quibusdam quae non corporis.
Vel similique reprehenderit doloribus quisquam, sapiente, aliquam perferendis iure asperiores fugiat ut eos aspernatur! Minus deleniti fugit at veniam explicabo. Eaque adipisci soluta sapiente. Quisquam rerum consequatur quas deleniti aliquid.</p>
    <div className="fixed flex flex-wrap
    justify-center bottom-12 inset-x-0 px-2"
    >
      <div className="flex flex-wrap justify-center
      gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl"
      >
        <button
        onClick={() => setColor("red")}
        className="outline-none px-4 py-1
        rounded-full text-white shadow-lg"
        style={{backgroundColor:"red"}}>
          Red
        </button>
        <button
        onClick={() => setColor("green")}
        className="outline-none px-4 py-1
        rounded-full text-white shadow-lg"
        style={{background:'green'}}>
          Green
        </button>
        <button
        onClick={() => setColor("blue")}
        className="outline-none px-4 py-1
        rounded-full text-white shadow-lg"
        style={{background:'blue'}}>
          Blue
        </button>
        <button
        onClick={() => setColor("olive")}
        className="outline-none px-4 py-1
        rounded-full text-white shadow-lg"
        style={{background:'olive'}}>
          Olive
        </button>
        <button
        onClick={() => setColor("grey")}
        className="outline-none px-4 py-1
        rounded-full text-white shadow-lg"
        style={{background:'grey'}}>
          Grey
        </button>
        <button
        onClick={() => setColor("pink")}
        className="outline-none px-4 py-1
        rounded-full text-white shadow-lg"
        style={{background:'pink'}}>
          Pink
        </button>
        <button
        onClick={() => setColor("purple")}
        className="outline-none px-4 py-1
        rounded-full text-white shadow-lg"
        style={{background:'purple'}}>
          Purple
        </button>
        <button
        onClick={() => setColor("black")}
        className="outline-none px-4 py-1
        rounded-full text-white shadow-lg"
        style={{background:'black'}}>
          Black
        </button>
        <button
        onClick={() => setColor("yellow")}
        className="outline-none px-4 py-1
        rounded-full text-black shadow-lg"
        style={{background:'yellow'}}>
          Yellow
        </button>
        <button
        onClick={() => setColor("lavender")}
        className="outline-none px-4 py-1
        rounded-full shadow-lg text-black"
        style={{background:'lavender'}}>
          Lavender
        </button>
        <button
        onClick={() => setColor("white")}
        className="outline-none px-4 py-1
        rounded-full shadow-lg text-black"
        style={{background:'white'}}>
          White
        </button>

      </div>
    </div> 
  </div>
  )
}

export default App
