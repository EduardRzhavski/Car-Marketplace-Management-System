const carMarket = require("./obj.js");

// 1

// Search for a car agency by its name or ID

// function findCarAgency(carMarket, searchKey) {
//     const agencyById = carMarket.sellers.find(seller => seller.agencyId === searchKey);

//     if (agencyById) {
//       return agencyById;
//     }

//     const agencyByName = carMarket.sellers.find(seller => seller.agencyName === searchKey);

//     if (agencyByName) {
//       return agencyByName;
//     }

//     return null;
//   }

//   const agency = findCarAgency(carMarket, "Best Deal");
// if (agency) {
//   console.log("Found Agency:", agency);
// } else {
//   console.log("Agency not found.");
// }

//  -------------------------------------------------------------------------------------------------

// Retrieve all agencies' names

// function getAllAgencyNames(carMarket) {
//     const agencyNames = carMarket.sellers.map(seller => seller.agencyName);
//     return agencyNames;
//   }

//   const allAgencyNames = getAllAgencyNames(carMarket);
// console.log("Agency Names:", allAgencyNames);
//   -------------------------------------------------------------------------------------------------

// Add a new car to an agency's inventory

// const agencyId = "Plyq5M5AZ";

// const newCar = {
//   brand: "Mercedes",
//   models: [
//     {
//       name: "s600",
//       year: 2023,
//       price: 250000,
//       carNumber: "Number1",
//       ownerId: agencyId,
//     },
//   ],
// };

// const agency = carMarket.sellers.find((seller) => seller.agencyId === agencyId);

// agency.cars.push(newCar);

// console.log("New car added to the inventory:", newCar);

//   ---------------------------------------------------------------------------------------------------

// Remove a car from an agency's inventory

// const agencyId = "Plyq5M5AZ";
// const carNumberToRemove = "AZJZ4";
// const agency = carMarket.sellers.find((seller) => seller.agencyId === agencyId);

// const carIndexToRemove = agency.cars.findIndex((car) => car.carNumber === carNumberToRemove);

// if (carIndexToRemove !== -1) {
//   agency.cars.splice(carIndexToRemove, 1);
//   console.log(`Car with car number ${carNumberToRemove} removed from ${agency.agencyName}'s inventory.`);
// } else {
//   console.log(`Car with car number ${carNumberToRemove} not found in ${agency.agencyName}'s inventory.`);
// }

// ----------------------------------------------------------------------------------------------------

// Change the cash or credit of an agency

// const agencyId = "Plyq5M5AZ";
// const newCashValue = 20000000;

// const agency = carMarket.sellers.find((seller) => seller.agencyId === agencyId);

// if (agency) {
//   agency.cash = newCashValue;
//   console.log(`Cash for ${agency.agencyName} updated to ${newCashValue}.`);
// } else {
//   console.log(`Agency with ID ${agencyId} not found.`);
// }

//   ----------------------------------------------------------------------------------------------

// Update the price of a specific car in an agency

// function updateCarPrice(agencyId, carNumber, newPrice,carBrand) {
//     const agency = carMarket.sellers.find((seller) => seller.agencyId === agencyId);
//     if (agency) {
//     const carModelInAgency = agency.cars.find((car)=>car.brand === carBrand );
//       if (carModelInAgency) {
//         carModelInAgency.models.forEach(car => {
//             if(car.carNumber===carNumber){
//                 car.price = newPrice;
//                 console.log(`Price for car with car number ${carNumber} updated to ${car.price}.`);
//             }
//         });
//       }
//       else{
//         console.log("There is no such car in the agency!");
//       }
//     }
//   }

//   const carBrand = 'bmw'
//   const agencyIdToUpdate = "gNHjNFL12";
//   const carNumberToUpdate = "EMW_7";
//   const newCarPrice = 550000;

//   updateCarPrice(agencyIdToUpdate, carNumberToUpdate, newCarPrice, carBrand);

//   console.log(carMarket.sellers[2].cars)

//   --------------------------------------------------------------------------------------------------

// Calculate and return the total revenue for a specific agency

// function getTotalAgencyRevenue(agencyId) {
//     const agency = carMarket.sellers.find((seller) => seller.agencyId === agencyId);

//     if (agency) {
//       let totalRevenue = 0;

//       agency.cars.forEach((car) => {
//         car.models.forEach((model) => {
//           totalRevenue += model.price;
//         });
//       });

//       return totalRevenue;
//     } else {
//       return "Agency not found";
//     }
//   }

//   const agencyIdToCalculate = "gNHjNFL12";
//   const totalRevenue = getTotalAgencyRevenue(agencyIdToCalculate);

//   console.log(`Total revenue for the agency: ${totalRevenue}`);

// -----------------------------------------------------------------------------------------------------

// Transfer a car from one agency to another

// function transferCarBetweenAgencies(oldAgency, newAgency, carNumber) {
//   const oldSeller = carMarket.sellers.find(
//     (seller) => seller.agencyName === oldAgency
//   );
//   console.log(oldSeller);
//   const newSeller = carMarket.sellers.find(
//     (seller) => seller.agencyName === newAgency
//   );
//   console.log(newSeller);
//   const carIndex = oldSeller.cars.findIndex((car) =>
//     car.models.findIndex((model) => model.carNumber === carNumber)
//   );
//   console.log(" ");
//   console.log("the car index is " + carIndex);
//   console.log(" ");

//   if (carIndex !== -1) {
//     const removedCar = oldSeller.cars[carIndex];
//     oldSeller.cars.splice(carIndex, 1);
//     console.log(`Successfully removed the ${removedCar.brand} from inventory.`);
//   } else {
//     console.log(
//       `Car with carNumber ${carNumber} not found in ${oldSeller.agencyName}'s inventory.`
//     );
//   }
// }

// transferCarBetweenAgencies("Best Deal", "CarMax", "7A5b-");

//   -------------------------------------------------------------------------------------------

// 2

// Search for a customer by their name or ID

// function searchCustomer(searchTerm) {
//     const customerByName = carMarket.customers.find((customer) => customer.name === searchTerm);

//     if (customerByName) {
//       return customerByName;
//     }

//     const customerById = carMarket.customers.find((customer) => customer.id === searchTerm);

//     if (customerById) {
//       return customerById;
//     }

//     return null;
//   }

//   const searchTerm = "Ravi Murillo";
//   const foundCustomer = searchCustomer(searchTerm);

//   if (foundCustomer) {
//     console.log("Customer found:");
//     console.log(foundCustomer);
//   } else {
//     console.log("Customer not found.");
//   }

//   -----------------------------------------------------------------------------------------------

// Retrieve all customers' names

// function getAllCustomerNames(carMarket) {
//     const customerNames = carMarket.customers.map(customer => customer.name);
//     return customerNames;
//   }

//   const allCustomerNames = getAllCustomerNames(carMarket);
//   console.log("All Customer Names:", allCustomerNames);

//   -------------------------------------------------------------------------------------------------

// Change the cash of a customer

// function changeCustomerCash(customerId, newCashAmount) {
//     const customer = carMarket.customers.find((customer) => customer.id === customerId);

//     if (customer) {
//       customer.cash = newCashAmount;
//       console.log(`Customer ${customer.name}'s cash updated to ${newCashAmount}.`);
//     } else {
//       console.log(`Customer with ID ${customerId} not found.`);
//     }
//   }

//   const customerIdToChange = "2RprZ1dbL";
//   const newCashAmount = 100000;
//   changeCustomerCash(customerIdToChange, newCashAmount);

//   ----------------------------------------------------------------------------------------------

// Calculate the total value of all cars owned by a specific customer

// function getCustomerTotalCarValue(customerId) {
//     const customer = carMarket.customers.find((customer) => customer.id === customerId);

//     if (customer) {
//       let totalCarValue = 0;

//       customer.cars.forEach((car) => {
//         totalCarValue += car.price;
//       });

//       return totalCarValue;
//     } else {
//       return "Customer not found";
//     }
//   }

//   const customerIdToCalculate = "FQvNsEwLZ";
//   const totalCarValue = getCustomerTotalCarValue(customerIdToCalculate);

//   console.log(`Total value of cars owned by the customer: ${totalCarValue}`);

//   -----------------------------------------------------------------------------------------

// 3

// Retrieve all cars available for purchase

// function getAllAvailableCars() {
//     const availableCars = [];

//     carMarket.sellers.forEach((agency) => {
//       agency.cars.forEach((car) => {
//         if (!car.ownerId) {
//           availableCars.push({
//             agencyName: agency.agencyName,
//             brand: car.brand,
//             modelName: car.models[0].name,
//             year: car.models[0].year,
//             price: car.models[0].price,
//           });
//         }
//       });
//     });

//     return availableCars;
//   }

//   const availableCars = getAllAvailableCars();
//   console.log("Available Cars for Purchase:");
//   console.log(availableCars);

//   ----------------------------------------------------------------------------------------

// Search for cars based on certain criteria.

// function searchCarsByCriteria(year, price, brand = null) {
//     const matchingCars = [];

//     carMarket.sellers.forEach((agency) => {
//       agency.cars.forEach((car) => {
//         if (!car.ownerId) {
//           if (
//             car.models[0].year === year &&
//             car.models[0].price <= price &&
//             (brand === null || car.brand.toLowerCase() === brand.toLowerCase())
//           ) {
//             matchingCars.push({
//               agencyName: agency.agencyName,
//               brand: car.brand,
//               modelName: car.models[0].name,
//               year: car.models[0].year,
//               price: car.models[0].price,
//             });
//           }
//         }
//       });
//     });

//     return matchingCars;
//   }

//   const searchYear = 2019;
//   const maxPrice = 300000;
//   const searchBrand = "toyota";

//   const matchingCars = searchCarsByCriteria(searchYear, maxPrice, searchBrand);

//   console.log("Matching Cars:");
//   console.log(matchingCars);

//   ------------------------------------------------------------------------------------------------

// Return the most expensive car available for sale

// function getMostExpensiveCar() {
//     let mostExpensiveCar = null;
//     let highestPrice = 0;

//     carMarket.sellers.forEach((agency) => {
//       agency.cars.forEach((car) => {
//         if (!car.ownerId) {
//           const carPrice = car.models[0].price;
//           if (carPrice > highestPrice) {
//             highestPrice = carPrice;
//             mostExpensiveCar = {
//               agencyName: agency.agencyName,
//               brand: car.brand,
//               modelName: car.models[0].name,
//               year: car.models[0].year,
//               price: carPrice,
//             };
//           }
//         }
//       });
//     });

//     return mostExpensiveCar;
//   }

//   const mostExpensive = getMostExpensiveCar();

//   console.log("Most Expensive Car for Sale:");
//   console.log(mostExpensive);

//   -----------------------------------------------------------------------------------------------

// Return the cheapest car available for sale

// function getCheapestCar() {
//     let cheapestCar = null;
//     let lowestPrice = Infinity;

//     carMarket.sellers.forEach((agency) => {
//       agency.cars.forEach((car) => {
//         if (!car.ownerId) {
//           const carPrice = car.models[0].price;
//           if (carPrice < lowestPrice) {
//             lowestPrice = carPrice;
//             cheapestCar = {
//               agencyName: agency.agencyName,
//               brand: car.brand,
//               modelName: car.models[0].name,
//               year: car.models[0].year,
//               price: carPrice,
//             };
//           }
//         }
//       });
//     });

//     return cheapestCar;
//   }

//   const cheapest = getCheapestCar();

//   console.log("Cheapest Car for Sale:");
//   console.log(cheapest);
