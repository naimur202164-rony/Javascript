const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order:function(starterIndex,mainIndex){
    return [this.starterMenu[starterIndex],[this.mainMenu[mainIndex]]];
  }

};

 
const {name,openingHours,categories}=restaurant;
console.log(name,openingHours,categories)
const{name:restaurantName,openingHours:horus,categories:tags}=restaurant;
console.log(restaurantName,horus,tags)


// Default Values
const   {menu=[]}












// Working with arrey discription
// const arr = [2, 3, 4];
// const a = arr[0];
// const [x, y, z] = arr;
// console.log(x, y, z);
// let name = "Naimur Rahman D";
// console.log(name);
// console.log("Naimur Rahman D");
// console.log(arr);



// const [frist,secound]=restaurant.categories;
// console.log(frist,secound);
// console.log(restaurant.order(2,8))

// Working on nasted arrey

// const nasted=[2,4,[5,6]];

// const [i,,j]=nasted;

// console.log(i,j)


// Working on Objects

// const {name,openingHours}=restaurant;
