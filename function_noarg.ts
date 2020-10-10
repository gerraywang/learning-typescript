function sayHello(name?: string): string {
  if (name === undefined) {
    return "Hello Koma.";
  } else {
    return "hello " + name + ".";
  }
}

console.log(sayHello("Trump"));
console.log(sayHello());

function sayHello2(name: string = "Koma"):string {
  return "hello " + name + "."; 
}

console.log(sayHello2("Trump"));
console.log(sayHello2());