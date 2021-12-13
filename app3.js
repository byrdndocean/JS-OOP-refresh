let greet = function() {
  console.log("Hello World");
  return 1;
}

console.log(greet());



let greet = () => {
  console.log("Hello World");
  return 1;
}

// what if we are accepting variables

let greet = (user) => {
  console.log("Hello " + user);
  return 1;
}

console.log(greet('John'));

//only 1 statement

let add = function(num1, num2)
    {
      return num1 + num2;
    }

  let result = add(5,6)

  console.log(result);



  let add = (num1, num2) => num1 + num2;

    let result = add(5,6)

    console.log(result);

    //so no return statement or arrow b/c only 1 statement and it's return
