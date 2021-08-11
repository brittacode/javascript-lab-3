//1.
let submissions = [
    {name: "Jane", score: 95, date: "2020-1-24", passed: true},
    {name: "Joe", score: 77, date: "2018-05-14", passed: true},
    {name: "Jack", score: 59, date: "2019-07-05", passed: false},
    {name: "Jill", score: 88, date: "2020-04-22", passed: true},
];


//2.
function addSubmission (array, newName, newScore, newDate){
    let newSubmission = {
        name: newName,
        score: newScore,
        date: newDate,
        passed: newScore >= 60,

    };
    array.push(newSubmission);
    
}
addSubmission(submissions, "John", 62, "2021-08-10");
addSubmission(submissions, "James", 15, "2021-08-10");



//3.
 const deleteSubmissionByIndex = (array, index) => {
  array.splice(index, 1);  
};
deleteSubmissionByIndex (submissions, 1);

//4.
const deleteSubmissionByName = (array, name) => {
    array.splice(name, 1);
};
deleteSubmissionByName (submissions, 1);

//5
const editSubmission = (array, index, score) => {
    let passed;
    if (score >= 60){
        passed = true;
    }
    else {
        passed = false;
    }
    ;
    
};

//console.log (passed);

//6.

const findSumissionByName = (array,name ) =>{
    return array.find((name));
}

//7
//const findLowestScore


console.log(submissions);

