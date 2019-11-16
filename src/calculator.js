const Mercury = 88
const Venus = 226
const Mars = 686
const Jupiter = 4329
let arrayPlanets = {"Mercury": Mercury, "Venus": Venus, "Mars": Mars, "Jupiter": Jupiter};


export class Calculator {
  constructor(Age, Gender){
    this.Age = Age;
    this.Gender = Gender
    this.arrayPlanetsXformed = []
// alert("!!!!")
    }
    validate(){
      return (typeof this.Age === "number") ? true : false
    }
    transAge(){
      throw arrayPlanets.length
    for (let i = 0; i < arrayPlanets.length; i++){
    let xFormed = this.Age * arrayPlanets[i];
    this.arrayPlanetsXformed[i] = Math.ceil(xFormed);

    }
    return this.arrayPlanetsXformed;
  }

};
