// 🏆 Code Question 1
// const hamburger = { name: "Cheese Burger", weight: 250 };
// const secondBurger = hamburger;
// secondBurger.name = 'Double Cheese Burger';
// secondBurger.weight = 500;

// console.log(hamburger.name); // double cheese burger
// console.log(secondBurger.name ); // double cheese burger

//Domande:
// 1. Senza lanciare il codice, riesci a prevedere cosa viene stampato in console? 

/* Viene stampato "double cheese burger" per tutt'e due, perché entrambi i nomi puntano allo stesso oggetto in memoria. 
Quindi, quando modifichiamo il nome di secondBurger, stiamo modificando anche il nome di hamburger, poiché sono lo stesso oggetto.*/

// 2. Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice? 1



// 🏆 Code Question 2
const hamburger = { 
    name: "Cheese Burger", 
    weight: 250,
    ingredients: ["Cheese", "Meat", "Bread", "Tomato"]
};

const secondBurger = {...hamburger};
secondBurger.ingredients[0] = "Salad";

console.log(hamburger.ingredients[0]); // Salad
console.log(secondBurger.ingredients[0]); // Salad

//Domande:
// P.S.: Ricordati che gli Array, come gli oggetti, sono dei Reference Type (Tipi di Riferimento)!

// 1. Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?
// Viene stampato "Salad" per tutt'e due, perché lo spread operator non copia gli oggetti annidati, come l'array di questo caso.//

// 2. Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice? 
// 2 (hamburger e secondBurger) ma entrambi condividono lo stesso array ingredients, perciò sono 3 oggetti in memoria: hamburger, secondBurger e l'array ingredients.



// 🏆 Code Question 3
// const hamburger = { 
//     name: "Cheese Burger", 
//     weight: 250,
//     maker: {
//         name: "Anonymous Chef",
//         restaurant: {
//             name: "Hyur's Burgers",
//             address: "Main Street, 123",
//             isOpen: true,
//         },
//         age: 29
//     }
// };
// ​
// const secondBurger = structuredClone(hamburger);
// const thirdBurger = structuredClone(hamburger);

//Domande:
// Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?



// 🏆 Code Question 4
// const chef = {
//     name: "Chef Hyur",
//     age: 29,
//     makeBurger: (num = 1) => {
//         console.log(`Ecco ${num} hamburger per te!`);
//     },
// }
// ​
// const restaurant = {
//     name: "Hyur's Burgers",
//     address: {
//         street: 'Main Street',
//         number: 123,
//     },
//     openingDate: new Date(2025, 3, 11),
//     isOpen: false,
// };

//Domande:
// Qual è il metodo migliore per clonare l’oggetto chef, e perché?
// Qual è il metodo migliore per clonare l’oggetto restaurant, e perché?



// 🎯 Code Question 5 (Bonus)
// const hamburger = { 
//     name: "Cheese Burger", 
//     weight: 250,
//     maker: {
//         name: "Anonymous Chef",
//         restaurant: {
//             name: "Hyur's Burgers",
//             address: "Main Street, 123",
//             isOpen: true,
//         },
//         age: 29
//     }
// };
// ​
// const newRestaurant = {...hamburger.maker.restaurant};
// newRestaurant.name = "Hyur's II";
// newRestaurant.address = "Second Street, 12";
// const secondBurger = {...hamburger};
// secondBurger.maker.restaurant = newRestaurant;
// secondBurger.maker.name = "Chef Hyur";
// ​
// console.log(hamburger.maker.name); // ?
// console.log(secondBurger.maker.name); // ?
// console.log(hamburger.maker.restaurant.name); // ?
// console.log(secondBurger.maker.restaurant.name); // ?

//Domande:
// Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?
// Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?



// 🎯 Code Question 6 (Bonus)
// const chef = {
//     name: "Chef Hyur",
//     age: 29,
//     makeBurger: (num = 1) => {
//         console.log(`Ecco ${num} hamburger per te!`);
//     },
//     restaurant: {
//         name: "Hyur's Burgers",
//         welcomeClient: () => {
//             console.log("Benvenuto!");
//         },
//         address: {
//             street: 'Main Street',
//             number: 123,
//             showAddress: () => {
//                 console.log("Main Street 123");
//             }
//         },
//         isOpen: true,
//     }
// }

//Domande:
// Qual è il metodo migliore per clonare l’oggetto chef, e perché?


// 🎯 Snack  (Bonus)
// Crea una funzione che permette la copia profonda (deep copy) di un oggetto, che copia anche i suoi metodi (proprietà che contengono funzioni). Usa l’oggetto di Code Question 6 come test.

// ⚠️ Serve usare una funzione ricorsiva! (fai un po’ di ricerca).
