// import {heroes} from './Data/heroes';
// import heroes from './Data/heroes';
  import { heroes } from "./Data/heroes";

const getHeroeByID = (id) =>{
    return heroes.find(element => element > id);
};

console.log(getHeroeByID(2));