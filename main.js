let pokeAll = [];

let displayedPokemon = document.querySelector(".poke-image");
let pokeName = document.querySelector(".name1");
let pokeHp1 = document.querySelector(".hp1");
let pokeAttack1 = document.querySelector(".attack1")
let pokeDefense1 = document.querySelector(".defense1");
let pokeAbi1 = document.querySelector(".abi1-1");
let pokeAbi2 = document.querySelector(".abi1-2");

let crobatTarget = document.querySelector("#firstball");
let croconawTarget = document.querySelector("#secondball");
let crustleTarget = document.querySelector('#thirdball');


class Tony {
  constructor() {
    this.all = []
  }

  add(pokeData) {
    this.all.push(pokeData)
  }
}

get(pokemonName) {
    for(let i = 0; i < this.all.length; i++){
      if (this.all[i].name === pokemonName)
      return this.all[i]
    }

  }
}

class Pokemon {
  constructor(name, hp, attack, defense, ability1, ability2) {
    this.name = name
    this.hp = hp
    this.attack = attack
    this.defense = defense
    this.ability1 = ability1
    this.ability2 = ability2
  }
}

axios.get("https://raw.githubusercontent.com/tonymacas/pokedex/master/crobat.json")
  .then((response) => {
   
    let data = response.data
    
    let section = document.querySelector("#crobat")
    let name = document.querySelector(".name1")
    let hp = document.querySelector(".hp1")
    let attack = document.querySelector(".attack1")
    let defense = document.querySelector(".defense1")
    let ability1 = document.querySelector(".abi1-1")
    let ability2 = document.querySelector(".abi1-2")

    crobat = new Pokemon(
      data.name,
      data.stats[5].base_stat,
      data.stats[4].base_stat,
      data.stats[3].base_stat,
      data.abilities[0].ability.name,
      data.abilities[1].ability.name,
    )

    pokeAll.push(crobat);

    name.innerHTML = data.name;
    hp.innerHTML = "HP: " + data.stats[5].base_stat;
    attack.innerHTML = "Attk:" + " " + data.stats[4].base_stat
    defense.innerHTML = "Def: " + data.stats[3].base_stat
    ability1.innerHTML = data.abilities[0].ability.name
    ability2.innerHTML = data.abilities[1].ability.name

    let index = pokeAll.length - 1;

    crobatTarget.addEventListener("click", function () {
      changePokemon(index)
    });
    crobatTarget.classList.add("pointer");

  }).catch((error) => {
    console.log(error)
  })

axios.get("https://raw.githubusercontent.com/tonymacas/pokedex/master/croconaw.json")
  .then((response) => {
  
    let data = response.data
    let section = document.querySelector("#croconaw")
    let name = document.querySelector(".name2")
    let hp = document.querySelector(".hp2")
    let attack = document.querySelector(".attack2")
    let defense = document.querySelector(".defense2")
    let ability1 = document.querySelector(".abi2-1")
    let ability2 = document.querySelector(".abi2-2")

    let croconaw = new Pokemon(
      data.name,
      data.stats[5].base_stat,
      data.stats[4].base_stat,
      data.stats[3].base_stat,
      data.abilities[0].ability.name,
      data.abilities[1].ability.name,
    )

    pokeAll.push(croconaw);

    name.innerHTML = data.name;
    hp.innerHTML = "HP: " + data.stats[5].base_stat;
    attack.innerHTML = "ATTK:" + " " + data.stats[4].base_stat
    defense.innerHTML = "DFNS: " + data.stats[3].base_stat
    ability1.innerHTML = data.abilities[0].ability.name
    ability2.innerHTML = data.abilities[1].ability.name

    let index = pokeAll.length - 1;

    croconawTarget.addEventListener("click", function () {
      changePokemon(index)
    });
    croconawTarget.classList.add("pointer");

  }).catch((error) => {
    console.log(error)
  })

axios.get("https://raw.githubusercontent.com/tonymacas/pokedex/master/crustle.json")
  .then((response) => {
    // creates new li element
    let data = response.data
    let section = document.querySelector("#crustle")
    let name = document.querySelector(".name3")
    let hp = document.querySelector(".hp3")
    let attack = document.querySelector(".attack3")
    let defense = document.querySelector(".defense3")
    let ability1 = document.querySelector(".abi3-1")
    let ability2 = document.querySelector(".abi3-2")
    let ability3 = document.querySelector(".abi3-3")

    let crustle = new Pokemon(
      data.name,
      data.stats[5].base_stat,
      data.stats[4].base_stat,
      data.stats[3].base_stat,
      data.abilities[0].ability.name,
      data.abilities[1].ability.name,
      data.abilities[2].ability.name,
    )

    pokeAll.push(crustle);

    name.innerHTML = data.name;
    hp.innerHTML = "HP: " + data.stats[5].base_stat;
    attack.innerHTML = "Attk:" + " " + data.stats[4].base_stat
    defense.innerHTML = "Def: " + data.stats[3].base_stat
    ability1.innerHTML = data.abilities[0].ability.name
    ability2.innerHTML = data.abilities[1].ability.name
    ability3.innerHTML = data.abilities[2].ability.name

    let index = pokeAll.length - 1;
    // add event listener and pointer class inside of axios
    crustleTarget.addEventListener("click", function () {
      changePokemon(index)
    });
    crustleTarget.classList.add("pointer");
    console.log(index);
  }).catch((error) => {
    console.log(error)
  })

function changePokemon(number) {
  displayedPokemon.src = `./pokemon/${pokeAll[number].name}.gif`
  pokeName.innerHTML = pokeAll[number].name;
  pokeHp1.innerHTML = pokeAll[number].hp;
  pokeAttack1.innerHTML = pokeAll[number].attack;
  pokeDefense1.innerHTML = pokeAll[number].defense;
  pokeAbi1.innerHTML = pokeAll[number].ability1;
  pokeAbi2.innerHTML = pokeAll[number].ability2;
}




