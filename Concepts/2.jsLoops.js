/*
    loops : where we iterate on properties and perform an operation on it.
*/
let i=0;
let Arr = ['A','B', 'C', 1 , 2, 3]
let studentObj = {
    fullName : 'Bhawani_K',
    degn : "Senior Project Engineer",
    domain : "JavaScript Full Stack Developer",
    salary : 7.6
}

// 1. For-Loop : Loops through a block of code given number of times.
for (let i = 0; i < Arr.length; i++) {
    const ele = Arr[i];
    console.log(ele);
}  


// 2. For_in : loops through the keys of an Object
for (let ele in studentObj) {
    console.log(ele);
}

// 3. For-of : Loop through the values of an Object
for (let ele of studentObj) {
    console.log(ele);
}

// 4. while loop
while (i<5) {
    console.log(i);    
}

// 5. Do-While Loop
do {
    console.log(i);
    i++;
} while (i<5);