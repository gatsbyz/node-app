import { Controller, Get } from '@nestjs/common';

@Controller('healthz')
export class HealthController {
  @Get()
  getHealthCheck() {

    // can instantiate an object from a class
    class Pizza {
      constructor(public name: string, public toppings: string[]) {}
    }
    // PizzaMaker is a singleton class due to static method
    class PizzaMaker {
      static create(event: Pizza) {
        return new Pizza(event.name, event.toppings);
      }
    }
    
    const pizza = PizzaMaker.create({
      name: 'Inferno',
      toppings: ['cheese', 'peppers'],
    });
    console.log(pizza);

    // keyof operator
    interface Person {
      name: string
      age: number
      location: string
    }
    type NewKeyType = keyof Person
    let newTypeObject: NewKeyType = "name"
    console.log(newTypeObject)

    // keyof typeof
    const cars = { name: "BMW", power: "1000hp" }
    type CarLiteralType = keyof typeof cars
    let carLiteralVar: CarLiteralType = "name"
    console.log(carLiteralVar)

    return 'healthy';
  }
}
