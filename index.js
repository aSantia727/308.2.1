const PI = 3.1415;
const radius = 5;
const area = PI * Math.sqrt(radius);
const plant_area = .8;
const cir = 2 * PI * radius;
let number_of_plants = 20;
let plant_need = plant_area * number_of_plants;
const extra_space = area - plant_need;
let number_of_weeks = 0;
let num;

//doubling

function doubling (number_of_weeks){
    number_of_plants = (number_of_plants * 2)
    plant_need = Math.round(plant_area * number_of_plants)
    console.log(`The number of plants after ${number_of_weeks} week is ${number_of_plants}.`)
    console.log(`At ${number_of_weeks} the amount of space the plants would need is ${plant_need} Squared meters.`)
}

//free space

// For 20 plants

console.log(`For 20 plants the radius needed would be ${plant_need}.`)
console.log(`The aviable area after ${number_of_plants} plants ${extra_space}.`)

//week 1
doubling(0)

//week 2
doubling(1)

//week 3
doubling(2)

//After 10 weeks
doubling(10)
