export class User {

  constructor(surname: string, name: string, age: number, genre: string, testID: string) {
    this.surname = surname;
    this.name = name;
    this.age = age;
    this.genre = genre;
    this.testID = testID;
  }

    surname!: string;
    name!: string;
    age!: number | null;
    genre!: string;
    testID!: string;
}
