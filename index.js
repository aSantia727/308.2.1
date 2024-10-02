const PI = 3.1415;
const radius = 5;
const area = PI * radius * radius;
const minSpacePerPlant = 0.8;
const initialPlantCount = 20;
const doublingRate = 2;

function futurePlantGrowth(weeks, initialCount) {
  let currentPlantCount = initialCount;
  for (let i = 0; i < weeks; i++) {
    currentPlantCount *= doublingRate;
  }
  return currentPlantCount;
}

function actionNeeded(currentPlantCount, maxCapacity) {
  if (currentPlantCount > maxCapacity * 0.8) {
    return "Pruned";
  } else if (currentPlantCount >= maxCapacity * 0.5) {
    return "Monitored";
  } else {
    return "Planted";
  }
}

function calculateneededSpace(weeks, initialCount) {
  const finalPlantCount = futurePlantGrowth(weeks, initialCount);
  const neededArea = finalPlantCount * minSpacePerPlant;
  return neededArea - area;
}

function calculateNewRadius(additionalArea) {
  const newRadius = Math.sqrt(additionalArea / PI);
  return newRadius;
}

// Part 1
const maxCapacity = area / minSpacePerPlant;
console.log("Week 1:", futurePlantGrowth(1, initialPlantCount), actionNeeded(futurePlantGrowth(1, initialPlantCount), maxCapacity));
console.log("Week 2:", futurePlantGrowth(2, initialPlantCount), actionNeeded(futurePlantGrowth(2, initialPlantCount), maxCapacity));
console.log("Week 3:", futurePlantGrowth(3, initialPlantCount), actionNeeded(futurePlantGrowth(3, initialPlantCount), maxCapacity));

// Part 2
const neededSpace = calculateneededSpace(10, 100);
console.log("Additional space required:", neededSpace);
const newRadius = calculateNewRadius(neededSpace);
console.log("New radius:", newRadius);

// Part 3
try {
  const finalPlantCount = futurePlantGrowth(10, 100);
  const neededArea = finalPlantCount * minSpacePerPlant;
  if (neededArea > area) {
    throw new Error("Insufficient space for the plant population.");
  }
} catch (error) {
  console.error(error.message);
}
