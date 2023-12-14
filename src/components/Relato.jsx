
const items = [
    {
      name: " Sylvester Stallone",
      title: "Actor | Rocky",
      image:
        "https://m.media-amazon.com/images/M/MV5BOGU0Y2JiMGEtYzc0Ni00MDIwLTgxZGYtOWE2ZDMzYWQ5MjI0XkEyXkFqcGdeQXVyMTI3NjAxODc0._V1_UY209_CR22,0,140,209_AL_.jpg",
      body: "Sylvester Stallone es un actor/guionista/director/productor estadounidense de cabello oscuro construido atléticamente, los fanáticos del cine de todo el mundo han estado acudiendo en masa para ver las películas de Stallone durante más de 40 años, haciendo uno de los sorteos de taquilla más grandes de Hollywood.",
    },
    {
      name: " Ezra Miller",
      title: "Actor | The Perks of Being a Wallflower",
      image: "https://m.media-amazon.com/images/M/MV5BOTQ2YmNlZDEtM2EwNi00N2JhLTk3ZDktMjBmNzYwYWI1OWZmXkEyXkFqcGdeQXVyNjk1MjYyNTA@._V1_UX140_CR0,0,140,209_AL_.jpg",
      body: "Ezra Matthew Miller nació en Wyckoff, Nueva Jersey, de Marta (Koch), una bailarina moderna, y Robert S. Miller, quien trabajó en Workman Publishing y como ex vicepresidente senior. para libros Hyperion. Ezra tiene dos hermanas mayores y es de ascendencia judía asquenazí (padre) y germano-holandesa (madre). "
    
    },
      {
      name: "Millie Bobby Brown",
      title: "Actress | Enola Holmes",
      image:
  "https://m.media-amazon.com/images/M/MV5BMjA5NzA0NzQzMF5BMl5BanBnXkFtZTgwMTQxNjUzNjM@._V1_UX140_CR0,0,140,209_AL_.jpg",
      body: "Millie Bobby Brown (nacida el 19 de febrero de 2004) es una actriz y modelo inglesa. Saltó a la fama por su papel de Eleven en la serie dramática de ciencia ficción de Netflix Stranger Things (2016), por la que obtuvo una nominación al premio Primetime Emmy como Mejor Actriz de Reparto en una Serie Dramática...",
    },
  
    {
      name: " Brad Pitt",
      title: "Actor | Fight Club",
      image:
  "https://m.media-amazon.com/images/M/MV5BMjA1MjE2MTQ2MV5BMl5BanBnXkFtZTcwMjE5MDY0Nw@@._V1_UX140_CR0,0,140,209_AL_.jpg",
      body: "William Bradley  Pitt nació el 18 de diciembre de 1963 en Shawnee, Oklahoma y se crió en Springfield, Missouri, hijo de Jane Etta Pitt (de soltera Hillhouse), consejera escolar y William Alvin  Pitt, gerente de una empresa de camiones. En Kickapoo High School, Pitt participó en deportes, debates, estudiantes...",
    },
    {
      name: " Leonardo DiCaprio",
      title: "Actor | Inception",
      image:
  "https://m.media-amazon.com/images/M/MV5BMjI0MTg3MzI0M15BMl5BanBnXkFtZTcwMzQyODU2Mw@@._V1_UY209_CR7,0,140,209_AL_.jpg",
      body: "Pocos actores en el mundo han tenido una carrera tan diversa como la de Leonardo DiCaprio. DiCaprio ha tenido comienzos relativamente humildes, como miembro secundario del elenco de la comedia ¡Ay! Como duele crecer (1985) y películas de terror de bajo presupuesto, como Critters 3: ¡se comen todo! (1991), a un importante...",
    },
  ]
  
  
  
  export default function Page() {
    return (
      <div className="relative flex  w-screen items-center mb-6">
        <div className="relative flex max-w-[100vw] overflow-hidden py-2">
          <div className="flex w-max animate-marquee [--duration:30s] hover:[animation-play-state:paused]">
            {[...items, ...items].map((item, index) => (
              <div key={index} className="h-full px-1" style={{ marginBottom: "4rem" }}>
                <div className="relative h-full w-[28rem] rounded-2xl border border-white/5 bg-white/5 px-3 py-3">
                  <div className="pb-4 font-light text-white/75">{item.body}</div>
  
                  <div className="mt-auto flex items-center gap-4">
                    <img src={item.image} className="h-25 w-25 rounded-full" />
  
                    <div className="flex flex-col text-sm">
                      <div className="text-white">{item.name}</div>
                      <div className="text-white/75">{item.title}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }