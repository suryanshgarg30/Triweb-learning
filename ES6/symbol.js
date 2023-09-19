// Symbol

const person={
    id: 1234,
    pname: "xyz"
};
console.log(person);
person.id=1;
console.log(person);
console.log(Object.getOwnPropertyNames(person));


const course = Symbol('course');
person[course] = 'bca';

const course_b = Symbol('course');
console.log(person[course_b]);    //undefined