const Mercury = 88
const Venus = 226
const Mars = 686
const Jupiter = 4329



class Calculator {
  constructor(Age, Gender){
    this.Age = Age;
    this.Gender = Gender

    }
    validate(Age){
      if (typeof Age === "number"){
        return true;
      }
    }
};
