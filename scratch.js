// Login exercise from https://javascript.info/logical-operators
let username = prompt("Enter username");
const password = "password";

if (username.toLowerCase() == "admin") {
    let pw = prompt("password?")
    if ( pw == password) {
        console.log("welcome")
    } else if(pw == null) {
        console.log("canceled.")
    } else {
        console.log("invalid input")
    }
} else if(username == null) {
    console.log("Canceled.")
} else {
    console.log("invalid input")
}

// exercises from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals
//calendar
switch (choice) {
    // 31 days
    case "January": case "March": case "May": case "July": case "August": case "October": case "December":
        createCalendar(31, choice);
      break;

    // 30 days
    case "April": case "June": case "September": case "November":
        createCalendar(30,choice)
        break;
    
    // 28 days
  case "February":
    createCalendar(28,choice)
    default:
      // actually, just run this code
      break;
  }
  
// color choices white, black, purple, yellow, or psychedelic
switch (choice) { 
    case "white":
        update("white","black")
        break;
    case "black":
        update("black","white")
        break;
    default:
        update("white","black")
        break;
}

// countdown exapmle from  https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code
let output = document.querySelector('.output');
output.innerHTML = '';

let i = 10;
while (i >= 0) {
	switch(i) {
        case 0:
            console.log(`Blast off! ${i}`)
            break;
        case 10:
            console.log(`Countdown ${i}...`)
            break;
        default:
            console.log(i)
            break;
    }
    i--
}
	
// examples from https://javascript.info/while-for
//output evens
for (let i=0;i<10;i++) {
    if(i % 2 == 0) {
        console.log(i);
        continue
    }
}

// rewrite for
for (let i = 0; i < 3; i++) {
    console.log( `number ${i}!` );
}

let i = 0;
while (i <= 3) {
    console.log(`${i}!`)
    i++
}

//output prime numbers
const check = 10;
prime:
for (let i = 2;i <= check;i++){
    for (let j = 2;j < i;j++) {
        console.log("j:"+j)
        if (i % j == 0) continue prime;
    }
    console.log("prime "+i)
}
// odin javascript-exercises https://github.com/TheOdinProject/javascript-exercises
// 02 repeat string
function test(string,num) {
    let out = "" 
    for (let i =0;i <= num;i++) {
        out += string;
    }
    return out;
}

//03 reverse string

function rs(string) {
    return string.split("").reverse().join("");
}

//04 remove from array
//removeFromArray([1, 2, 3, 4], 3); // should remove 3 
function rfa(array,...args) {
    return array.filter(v => !args.includes(v))
}

//05 sumAll
function sumAll(first,last) {
    let sum = 0;
    if (first < 0 || last < 0) return "ERROR";
    if (!Number.isInteger(first) || !Number.isInteger(last)) return "ERROR";   
    if (first > last) [first,last] = [last,first];
    for (let i = first;i<=last;i++) {
        sum += i
    }
    return sum;
}


// js30 array stuff
// find inventors born in 1500s
const old = inventors.filter(old => { 
    return old.year >= 1500 && old.year < 1600; 
})

const fullnames = inventors.map( (inventor) => { return `${inventor.first} ${inventor.last}` })

// odin javascript foundations exercises https://github.com/TheOdinProject/javascript-exercises/

//08
const sum = function(numbers) {
        return numbers.reduce((n,r) => (n+r),0)
};

const multiply = function(numbers) {
    return numbers.reduce((n,r) => (n*r))
};


const factorial = function(number) {
    let res = 1;
    while (number > 1) {
        res *= number
        number--;
    }
    return res;
};

// 09 plaindromes (cheated)
const palindromes = function (string) {
    const processedString = string.toLowerCase().replace(/[^a-z0-9]/g, "");
    return processedString.split("").reverse().join("") == processedString;
  };

// 10 fibonacci

const fibonacci = function(n) {
    if (n < 0) { return "OOPS" }
    if (n == 0 || n == 1) {
        return Number(n)
    }
    return Number(fibonacci(n-1) + fibonacci(n-2))
};
    
// get the titles
const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ]
  const getTheTitles = function(b) {
    return b.map(i => i.title)
  };
  
  //12 findTheOldest
  // loop over people, calculate age (death||curyear - birth) 
  //    const year = new Date().getFullYear()
  const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]
  init = person.yearOfDeath - person.yearOfBirth;
  let age = person.yearOfDeath - person.yearOfBirth;
  //console.log(init,age,index)
  p[index].age = age;
  const findTheOldest = function(p) {
    return p.reduce((oldest,current) =>{
        const oldestAge = (oldest.yearOfDeath - oldest.yearOfBirth);
        const currentAge = (current.yearOfDeath - current.yearOfBirth);
        return oldestAge < currentAge ? current : oldest; 
    });

  };