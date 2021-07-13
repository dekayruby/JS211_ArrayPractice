1.//  
let cars = ['Ford' , 'Subaru' , 'Toyota' , 'Land Rover']
console.log(cars.length)

2.// 
let moreCars = ['BMW' , 'Audi' , 'Lincoln' , 'Honda']
let totalCars = cars.concat(moreCars)
console.log(totalCars)

3.// 
console.log(totalCars.indexOf('Honda'))
console.log(totalCars.lastIndexOf('Ford'))

4.//
let stringOfCars = totalCars.join()
console.log(stringOfCars)

5.//
let carsFromString = stringOfCars.split(',')
console.log(carsFromString)

6.// 
let carsInReverse = carsFromString.reverse()
console.log(carsInReverse)

7.// 
let sortedCars = carsInReverse.sort()
console.log(sortedCars.indexOf('Audi'))

8.//
const pets = ['dog', 'cat', 'fish', 'rabbit', 'snake', 'lizard', 'bird']
let reptiles = pets.slice(4,6)
console.log(reptiles)
console.log(pets)

9.//
const removedReptiles = pets.splice(4,2, 'hamster')
console.log(removedReptiles)
console.log(pets)

10.//
let removedPet = pets.pop()
console.log(removedPet)
console.log(pets)

11.//
let addPet = pets.push(removedPet)
console.log("11.", pets)

12.//
console.log(pets.shift())
pets.unshift('turtle')
console.log(pets)

13.//
const numbers = [23, 45, 0 , 2, 8, 44, 100, 1, 3, 91, 34]

// const addTwo= () => {
// for(let i=0 ; i<numbers.length; i++){
//     let arr = numbers[i]
//     let nums = arr + 2
//     console.log(nums)
// }
// return
// }
// addTwo()
// numbers.forEach(addTwo)

// console.log(numbers)



const addTwo = (num) => {
    let add = num + 2
    return add
    
}

// addTwo()
// console.log(addTwo(5))
numbers.forEach((a)  => {
console.log(addTwo(a))
});