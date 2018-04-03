// container class
class People {
  constructor() {
    this.all = []
  }

  // defines method add to People class
  // it accepts a Person object and adds it to the end
  // of the "all" array
  add(person) {
    this.all.push(person)
  }
}

// individual class
class Pokemon {
  constructor(name, hp, attack, defense, abilities) {
    this.name = name
    this.hp = hp
    this.attack = attack
    this.defense = defense
    this.abilities = abilities
  }
}

// selecting ul from the html side
let ul = document.querySelector("ul")
let pokemon = new Pokemon()

// retrieve data from hosted person-1 json file
axios.get("http://pokeapi.co/api/v2/pokemon/169/")
.then((response) => {
  // creates new li element
  let li = document.createElement("li")
  let data = response.data

  // creates new Person object
  // based on JSON payload
  let crobat = new Pokemon(
    data.name,
    data.stats[5].base_stat,
    data.stats[4].base_stat,
    data.stats[3].base_stat,
    data.abilities[0].ability.name,
    data.abilities[1].ability.name,
)

  console.log(crobat)
  // adds new Person object
  pokemon.add(crobat)

  // changes inner html of li to first name
  li.innerHTML = crobat
    
  // appends created li to the html ul
  ul.appendChild(li)
}).catch((error) => {
  console.log(error)
})

// retrieve data from hosted person-2 json file
axios.get("https://github.com/tonymacas/pokedex/blob/master/croconaw.json")
.then((response) => {
  // creates new li element
  let li = document.createElement("li")
  let data = response.data

  // creates new Person object
  // based on JSON payload
  let croconaw = new Pokemon(
    data.name,
    data.stats[5].base_stat,
    data.stats[4].base_stat,
    data.stats[3].base_stat,
    data.abilities[0].ability.name,
    data.abilities[1].ability.name,
)

  // adds new Person object
  pokemon.add(croconaw)

  // changes inner html of li to first name
  li.innerHTML = croconaw
    
  // appends created li to the html ul
  ul.appendChild(li)
}).catch((error) => {
  console.log(error)
})

// retrieve data from hosted person-3 json file
axios.get("https://raw.githubusercontent.com/tonymacas/pokedex/master/crustle.json#")
.then((response) => {
  // creates new li element
  let li = document.createElement("li")
  let data = response.data

  // creates new Person object
  // based on JSON payload
  let crustle = new Pokemon(
    data.name,
    data.stats[5].base_stat,
    data.stats[4].base_stat,
    data.stats[3].base_stat,
    data.abilities[0].ability.name,
    data.abilities[1].ability.name,
    data.abilities[2].ability.name
)

  // adds new Person object
  pokemon.add(crustle)

  // changes inner html of li to first name
  li.innerHTML = crustle
    
  // appends created li to the html ul
  ul.appendChild(li)
}).catch((error) => {
  console.log(error)
})