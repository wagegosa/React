// import {heroes} from './Data/heroes';
// import heroes from './Data/heroes';
  import { heroes } from "./Data/heroes";

const getHeroeByID = (id) =>{
    return heroes.find((heroes) =>{
        if (heroes.id === id) {
            return true;
        } else {
            return false;
        }
    })
}
// otra forma de hacerlo
const getHeroeByID1 = (id) => {
    return heroes.find((heroes) => heroes.id === id);
};
// la mejor forma simplificada
const getHeroByID2 = (id) => heroes.find((heroes) => heroes.id === id)

console.log(getHeroeByID(2));
console.log(getHeroeByID(5));
console.log(getHeroeByID(1));

const getHeroeByOwer = (owner) => heroes.filter( (heroes) => heroes.owner === owner);
// console.log(getHeroeByOwer(1));
console.log(getHeroeByOwer("DC"));