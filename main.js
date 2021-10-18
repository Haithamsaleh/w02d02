const addOne = (arr) => {
    // Solution code here...
    let res = []
    arr.forEach(function (item,index){
        res.push(item+1);
    })
    return res;
  };

  const addExclamation = (arr) => {
    // Solution code here...
    let res = []


    
    arr.forEach(function (item,index){
        res.push(item+'!');
    })
    return res
  };

  const addOneByMap = (arr) => {
    // Solution code here...
console.log(
    
    arr.map(function (item){
       return item+1 ;
   
   })
  
   );
}; 

const addQuestion = (arr) => {
    // Solution code here...
    return(
    
        arr.map(function (item){
           return item+'?' ;
       
       })
      
       );


};
//let ans =  arr.map(function (item){
 //   return item+'?' ;})
//return ans

   


//};

const forLoopTwoToThe = (arr) => {
    // Solution code here...
  let ans =  arr.map(function (item){
    return  Math.pow(2,item) ;})
return ans
};

const typeNum = (arr) => {
    // Solution code here...
    let ans =  arr.filter(function (item){
        return typeof item === 'number';})
    return ans
};
const containsAnd = (arr) => {
    // Solution code here...
    let ans =  arr.filter(function (item){
        return typeof item === 'string';})
    return ans
};
const oddValues = (arr) => {
    // Solution code here...
    let ans =  arr.filter(function (item){
if (item % 2 !== 0) {
    return item;
}
        })
    return ans

};
const addValues = (arr) => {
    // Solution code here...
    let sum = 0;
    arr.forEach(function (item,index){
 sum += item;    })
    return sum;

};

const countNumberOfElements = (arr) => {
    const length = arr.reduce(function (acc) {
      return ++acc;
    }, 0);
    return length;
  };

const checkValues = (obj, value) => { 
    // Solution code here...
    if (Object.values(obj).indexOf(value) > -1) {
        console.log('true');}
        else{
            console.log("false");
        };}

        const courseInfo = {
            name: "Code 301",
            duration: { dayTrack: "4 weeks", eveningTrack: "8 weeks" },
            topics: [
              "SMACSS",
              "APIs",
              "NodeJS",
              "SQL",
              "jQuery",
              "functional programming",
            ],
            finalExam: true,
          };
          
          const getCourseKeys = (obj) => {
            // Solution code here...
            console.log(Object.keys(obj));
        };
        let data = {GraceHopper: '222-303-5938',
        AdaLovelace: '222-349-9842',
        AlanTuring: '222-853-5933'};

const updateNumbers = (obj) => {
    for (const key in obj){
        console.log(obj);
    }
    
};
const studentOne = {
    math: { grade: 70, total: 120 },
    english: { grade: 80, total: 100 },
    art: { grade: 90, total: 100 },
  };
  const studentTwo = {
  math: { grade: 59, total: 120 },
  english: { grade: 80, total: 100 },
  art: { grade: 90, total: 100 },
};
const PassedOrFailed = function (studentGrades) {
    const avr = Object.values(studentGrades);
    for (let i = 0; i < avr.length; i++) {
      if (avr[i].grade / avr[i].total < 0.50) 
      return "The student have failed";
    }
  
    return "The student have passed";
  };
  const totalCharacters = (arr) => {
    const coun = arr.reduce((acc, item) => {
      acc += item.length;
      return acc;}, 0);
    return coun;
  };
  
  const houseSize = (arr) => {
    const sizes = [];
    for (let i = 0; i < arr.length; i += 2) {
      const obj = {};
      obj["house"] = arr[i];
      obj["members"] = arr[i + 1];
      sizes.push(obj);
    }
  
    return sizes;
  };

  const uniqueDogs = {
    max: { breed: "Labrador Retriever", color: "blond" },
    rex: { breed: "German Shepherd", color: "black and brown" },
    lucy: { breed: "Bulldog", color: "white" },
    lucifer: { breed: "Chihuahua", color: "brown" },
  };
  
  const createDog = function (name, dogBreed, furColor) {
    // TODO: Your code here
  };
  







