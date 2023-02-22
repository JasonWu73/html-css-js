interface Bird {
  type: 'bird';
  flyingSpeed: number;
}

interface Horse {
  type: 'horse';
  runningSpeed: number;
}

type Animal = Bird | Horse;

const moveAnimal = (animal: Animal): void => {
  let speed;
  switch (animal.type) {
    case 'bird':
      speed = animal.flyingSpeed;
      break;
    case 'horse':
      speed = animal.runningSpeed;
  }

  console.log(`Moving at speed: ${speed}`);
};

const sparrow: Bird = {type: 'bird', flyingSpeed: 100};
moveAnimal(sparrow);

moveAnimal({type: 'horse', runningSpeed: 200});
