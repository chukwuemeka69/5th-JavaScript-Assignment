// ################################################################################################################
// // 1. const myObj = {
// //     fname : "Joe",
// //     lname: "Shmoe",
// // }
// // Update this object with 4 more properties, and using for in loop, print out all key value pairs of the object.
// #################################################################################################################
const myObj = {
    fname : "John",
    lname: "Ilozor",
    qualification : "Graduate",
    email : "jilozor@gmail.com",
    state : "Lagos",
};
myObj.wife = 'MaryJane'
myObj.age  = 45
myObj.children = 4
myObj.nationality = 'Nigeria'
for (const key in myObj ) {
    console.log(`${key}: ${myObj[key]}`);
}

// ########################################################################
// 2. Write out three different object variables and store in an array .
// #########################################################################
const myObj1 = {
    fname : "Peter",
    lname: "Okafor",
    age : 20,
    qualification : "Masters",
    email : "peter@gmail.com",
    state : "Ogun",
};
const myObj2 = {
    fname : "Val",
    lname: "Nwabueze",
    age : 50,
    qualification : "PHD",
    email : "val@gmail.com",
    state : "Imo",
};
const myObj3 = {
    fname : "Bola",
    lname: "Ahmed",
    age : 70,
    qualification : "SSCE",
    email : "bola@gmail.com",
    state : "Osun",
};

const myObjArray = [myObj1,myObj2,myObj3];



console.log ("\n \n myObjArray = ",myObjArray);
