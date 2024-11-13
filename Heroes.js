function heroes(arr) {
  let heroes = [];
  let hero;
  for (let i = 0; i < arr.length; i++) {
    hero = {};
    let data = arr[i].split(" / ");
    hero.name = data[0];
    hero.level = parseInt(data[1]);
    hero.items = data[2];
    heroes.push(hero);
  }

  let compare = (a, b) => {
    if (a.level < b.level) {
      return -1;
    }
    if (a.age > b.age) {
      return 1;
    }
    return 0;
  };

  heroes.sort(compare);

  for (let i = 0; i < heroes.length; i++) {
    console.log(`Hero: ${heroes[i].name}`);
    console.log(`level => ${heroes[i].level}`);
    console.log(`items => ${heroes[i].items}`);
  }
}

heroes([
  "George / 30 / Apple, GravityGun",

  "Martin / 13 / BarrelVest, Sword",

  "Blago / 1 / Desolator, Gun, Antara",
]);
