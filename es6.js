const person = {
  name: 'Mosh',
  walk() {},
  talk() {}
};
//we drop the colon and function keyword
////////////////////////////////////////////////////////
const person = {
	name: “Mosh”,
	walk() {
		console.log(this);
	}};

person.walk();

const walk = person.walk.bind(person);
walk();
//
// functions in JS are objects
// they have properties and methods we can use
// one of the most important methods in React is the bind method
// with the bind method we can set the value of 'this' permanently
// so when we call bind on the walk function we get a new walk function
// we get a new walk function and in that walk function, the value of this is based on the argument that we pass to the bind method

// so b/c here we're passing the person object as an argument we'll get a walk function that is always to this person object and that's why when we call it here w/o a reference to the person object, we still see the person object on the console

/////////////////////////////////////////////////////////////////////

//ES5
const square = function(number) {
  return number * number;
}

//ES6 arrow functions
const square = number => number * number;
//if you zero parameters they need to be empty ()
//one (number), don't need the parenthesis
//if body only includes single line and returns a value
//we can get rid of return

//usefullness of arrow functions
const jobs = [
  {id: 1, isActive: true },
  {id: 2, isActive: true },
  {id: 3, isActive: false },
];

const activeJobs = jobs.filter(function(job) {return job.isActive; });
// convert to arrow function
const activeJobs = jobs.filter(job => job.isActive);
//filter jobs where job isAcitve

/////////////////////////////////////////////////////////////////////
//arrow functions don't rebind 'this'
// if we change this callback function to an arrow function
//it will inherit the 'this' keyword
// how can we have a reference to the person object inside
// of this callback function
const person = {
	talk() {
		var self = this;
		setTimeout(() => {
			console.log("this", this);
		}, 1000);
	}
};

person.talk();


////////////////////////////////////////////////////////////////////////
//Array.map()
//in react we use it to render lists
//so whenever you want to render a list of items
// map method returns a new array, so it does not modify original array
//here we need to pass a callback function
//the job of this function is to transform each element in this array
//it takes one item at a time and returns a new item

const colors = ['red', 'green', 'blue'];
const items = colors.map(color => '<li>' + color + '</li>');

// so your mapping or transforming the array of colors
// for each color, we will return a string
// let's make this cleaner with template literals
// use the backtick ``, here we can define a template for our string
// in the middle we want to render the color
// what we put in between the braces will be rendered dynamically at runtime
// `<li>${color}</li>`  this is a template literals

const colors = ['red', 'green', 'blue'];
const items = colors.map(color => `<li>${color}</li>`);
console.log(items);
//we have an array of 3 items
// very useful in React when rendering lists


//////////////////////////////////////////////////////////////////////////////
//Destructuring
const address = {
	street: '',
	city: '',
	country: ''
};

//we need to extract the value of these properties and store them in separate varibles
//BEFORE
const street = address.street;
const city = address.city;
const country = address.country;
// problem b/c it's not DRY

//if we want to have 3 variables and have them set to
//those properties in the address object
const {street, city, country} = address;
//if we're only interested in the city property
const {street} = address;
// what if we wanted to use a different name, alias
const {street: st} = address;
//we're defining a new constant called st
//and we're setting that to the street property of the address object

//////////////////////////////////////////////////////////////////////////////
//Spread Operator
const first = {name: "Mosh"};
const second = { job: "Instructor"};

const combined = {...first, ...second, location: "Australia"};
console.log(combined);


const first = [1,2,3];
const second = [4,5,6];

const combined = [...first, ...second];



/////////////////////////////////////////////////////////////////////////////
//Classes
const person = {
	name: "Mosh",
	walk() {
		console.log("walk");
	}
};
// a person object with 2 members, name and walk
// what if we want to create another person object, that can walk?
// when we have an object with at least one method,
//we need a blueprint to create objects of that type and that's when
//we use classes
//1st letter is cap
//constructor is keyword, can take parameters
class Person {
	constructor(name)	 {
		this.name = name;
	}

	walk() {
		console.log("walk");
	}
}
const person = new Person('Mosh');
