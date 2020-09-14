let routine = [
function wakeDog(dogName, dogBreed) {
  wake = (`Wake ${dogName} the ${dogBreed}`)
  console.log(wake) {
    return wake
  }
},
 
function leashDog(dogName, dogBreed) {
    leash = (`Leash ${dogName} the ${dogBreed}`)
    console.log(leash) {
      return leash 
    }
  },
  
function walkToPark(dogName, dogBreed) {
    walkPark = (`Walk to the park with ${dogName} the ${dogBreed}`)
    console.log(walkPark) {
       return walkPark
    }
  },
  
 function throwFrisbee(dogName, dogBreed) {
    throw = (`Throw the frisbee for ${dogName} the ${dogBreed}`)
    console.log(throw) {
      return throw
    }
  },
   
 function walkHome(dogName, dogBreed) {
    walkHome = (`Walk home with ${dogName} the ${dogBreed}`)
    console.log(walkHome) {
      return walkHome
    }
  },
   
function unleashDog(dogName, dogBreed) {
    unleash = (`Unleash ${dogName} the ${dogBreed}`)
    console.log(unleash) {
      return unleash 
    }
  }
]

function exerciseDog(dogName, dogBreed) {
  const array = []
  let i = 0
  while( i < routine.length) {
    array.push(routine[i](dogName, dogBreed))
  }
  return array
}