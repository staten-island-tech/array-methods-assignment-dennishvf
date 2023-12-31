const Elephants = {
  Name: "Elephant",
  weight: "13000lbs",
  Fur: "No",
  Diet: "Herbivore",
  Status: "Endangered",
  foods: ["grass", "leaves", "fruits"],
};
const Lemurs = {
  Name: "Lemur",
  weight: "10lbs",
  Fur: "Yes",
  Diet: "Omnivore",
  Status: "Endangered",
  foods: ["insects", "leaves", "fruits"],
};
const Lizards = {
  Name: "Lizard",
  weight: "1lb",
  Fur: "No",
  Diet: "Omnivore",
  Status: "Abundant",
  foods: ["insects", "fruits"],
};
const Penguins = {
  Name: "Penguin",
  weight: "60lbs",
  Fur: "Yes",
  Diet: "Carnivore",
  Status: "Abundant",
  foods: ["Fish", "Snow"],
};
const Salmon = {
  Name: "Salmon",
  weight: "10lbs",
  Fur: "No",
  Diet: "Omnivore",
  Status: "Abundant",
  foods: ["insects", "Fish"],
};
let animals = [Elephants, Lemurs, Lizards, Penguins, Salmon];
animals.forEach((animal) => console.log(animal.Name));
animals.forEach((animals) => {
  animals.foods.forEach((food) => {
    console.log(food);
  });
});
const diet = animals.filter((animal) => {
  return animal.foods.includes("insects");
});
diet.forEach((diet) => console.log(diet.Name, diet.foods));
