'use strict';
//create do...while loop to console log numbers 1-1000
let i = 0
do {
i += 1;
console.log(i);
} while (i<1000);

//2.

let person = {
firstName: "Jane"
lastName: "Doe"
birthDate: "Jan 5, 1925"
gender: "female"
};

//3. 

 let birthYear = person.birthDate[person.birthDate.length -1];
    
if(birthYear % 2 !==0) {
console.log(person.birthDate)
}

// let x;
    // for (x in person) {
    //     var dt = new Date(person[x].birthDate);
    //     if (dt.getFullYear % 2 !=0)
    //         console.log(person[x].birthDate);
    // }

//4. 

let arrayOfPersons = [
    {firstName:'Jane',
    lastName: 'Doe',
    birthDate:'Jan 5, 1925',
    gender: 'female'},
    {firstName:'John',
    lastName: 'Snow',
    birthDate:'Dec 12, 1934',
    gender: 'male'},
    {firstName:'Willow',
    lastName: 'Patterson',
    birthDate:'Mar 18, 2012',
    gender: 'female'},
    {firstName:'David',
    lastName: 'McFadden',
    birthDate:'Mar 17, 1962',
    gender: 'male'}
  ]

//5. Map through array and console log their info. 

arrayOfPersons.map((x) => {
    console.log(x);
  })

//6. Use .filter() to console log males only.

let maleFilter = arrayOfPersons.filter((obj) => {
    return obj.gender === 'male';
  })
  console.log(maleFilter);



//7. Use .filter() to console log people born before 1990. (Struggled to figure out how to pull the birth year out while using .filter method)

for (let x in arrayOfPersons){
    let k=new Date(arrayOfPersons[x].birthDate);
    let year = k.getFullYear();
    
    if (year < 1990){
    console.log(arrayOfPersons[x].birthDate);
    }
    }


