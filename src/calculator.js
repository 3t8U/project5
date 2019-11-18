const Mercury = 88
const Venus = 226
const Mars = 686
const Jupiter = 4329
let arrayPlanets = {"Mercury": Mercury, "Venus": Venus, "Mars": Mars, "Jupiter": Jupiter};
const Lifespan = 80


export class Calculator {
  constructor(Age, Gender){
    this.Age = Age * 365;
    this.Gender = Gender
    this.arrayPlanetsXformed = []
    this.ageInput = Age
// alert("!!!!")
    }
    validate(){
       if (isNaN(this.Age)){
        return false;
       }
      return (typeof this.Age === "number") ? true : false

    }
    transAge(){
      for (let i = 0; i < Object.entries(arrayPlanets).length; i++){
        let arrayPlanetsEntries = Object.entries(arrayPlanets)
        // throw arrayPlanetsEntries[i][1]
        let planet = arrayPlanetsEntries[i][1]
        let xFormed = this.Age / planet;
        this.arrayPlanetsXformed[i] = Math.ceil(xFormed);
    // throw this.arrayPlanetsXformed
      }
      return this.arrayPlanetsXformed;
    }

    lifeExpect(){
      return Lifespan - this.ageInput;
    }

    finalAnswer(){
      let lifeExpect = this.lifeExpect()
      if (lifeExpect >= 0){
        return ("You have " + lifeExpect + " years left")
      }
    }
};

//     LifeOverage
//   if (this.ageInput > Lifespan){
//     var timeOver = this.ageInput - Lifespan;
// }
// return timeOver;
