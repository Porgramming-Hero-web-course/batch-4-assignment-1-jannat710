# Question1: The significance of union and intersection types in Typescript.

 - TypeScript's union and intersection types are necessary for type safety.Union types permit flexibility by combining different types into one.Various intersections include multiple types into one, ensuring a variable satisfies every need. For example:

  // Union Type

  function printStatusCode(code: string | number) {
  console.log(`Status code is ${code}.`)
  }
  printStatusCode(404);

  // Intersection Type

      type Apple = {
        color: 'red' | 'green'; appleVariety: 'Fuji' | 'Gala' | 'Granny Smith'
    };
    type Banana = {
        size: 'small' | 'medium' | 'large'; bananaVariety?: 'Cavendish' | 'Lady Finger' | 'Red Banana'
    };
    type FruitSalad = Apple & Banana;

    const fruitSalad: FruitSalad = {
        color: 'red',
        appleVariety: 'Fuji',
        size: 'medium',
    };