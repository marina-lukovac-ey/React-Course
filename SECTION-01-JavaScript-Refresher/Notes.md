### LET: Variable value

### CONST

### VAR

### Short writing without parentheses in arrow functions is not allowed because of the prettier formating

### EXPORT IMPORT :

---

> ONLY WORKS IN `<script type = "module"></script>`

### CLASSES

---

```
class Human{
    constructor(){
        this.gender = 'male';
    }
    printGender(){
        console.log(this.gender);
    }
}

class Person extends Human{
    //if a class extends another class, super method should be called in a constructor function
    constructor(){
        super();
        this.name = "Max"
    }
    printMyName(){
        console.log(this.name)
    }

}
const person = new Person();
person.printMyName();
person.printGender();
```

### ES6:

```
class Human {
    gender = "male";
    printGender = () => {
      console.log(this.gender);
    };
  }

  class Person extends Human {
    name = "Max";
    gender = "female"; //overriding
    printMyName = () => {
      console.log(this.name);
    };
  }
  const person = new Person();
  person.printMyName();
  person.printGender();
```

### SPREAD AND REST OPERATORS

### DESTRUCTURING
