const PI = 3.1415;
const radius = 5;
const area = PI * radius * radius;
const plant_area = PI * (0.8 * 0.8);
const cir = 2 * PI * radius;
let number_of_plants = 20;
const plant_need = plant_area * number_of_plants;
const extra_space = area - plant_need;
let number_of_weeks = 0;
let num;

function doubling (number_of_weeks){
    number_of_plants = (number_of_plants * 2)
}
// For 20 plants

console.log(`For 20 plants the radius needed would be ${plant_need}.`)
console.log(`The aviable area after ${number_of_plants} plants ${extra_space}.`)

//week 1

doubling(0)
    console.log(`The number of plants after 1 week is ${number_of_plants}.`)

//week 2
doubling(1)
    console.log(`The number of plants after 1 week is ${number_of_plants}.`)

//week 3
doubling(2)
    console.log(`The number of plants after 1 week is ${number_of_plants}.`)

