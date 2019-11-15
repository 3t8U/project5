const Mercury = 88
const Venus = 226
const Mars = 686
const Jupiter = 4329



export class Calculator {
  constructor(Age, Gender){
    this.Age = Age;
    this.Gender = Gender
// alert("!!!!")
    }
    validate(){
      return (typeof this.Age === "number") ? true : false
    }
};
