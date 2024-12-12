## Définition des classes et des objets

Une classe est un modèle ou un plan pour créer des objets, définissant la structure (propriétés) et le comportement (méthodes) communs à un groupe d'objets.

Les objets sont des instances spécifiques d'une classe, représentant des entités uniques avec des valeurs spécifiques pour les propriétés définies dans la classe.

### Création de classes et d'objets en JavaScript

Les classes sont définies à l'aide du mot-clé `class`, et un constructeur est utilisé pour initialiser les propriétés.

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const person1 = new Person('John', 30);
console.log(person1); // { name: 'John', age: 30 }

const person2 = { name: 'Jane', age: 25 };
console.log(person2); // { name: 'Jane', age: 25 }
