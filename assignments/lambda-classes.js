// * We have a school to build here! This project will get you used to thinking about classes in JavaScript and building them from a brand new data set.
// * Lambda personnel can be broken down into three different types of `people`.
//   * **Instructors** - extensions of Person
//   * **Students** - extensions of Person
//   * **Project Managers** - extensions of Instructors
// * **IMPORTANT** - You'll need to create 2 - 3 objects for each class and test them according to their unique Attributes. For example:



// #### Person

// * First we need a Person class. This will be our `base-class`
// * Person receives `name` `age` `location` all as props
// * Person receives `speak` as a method.
// * This method logs out a phrase `Hello my name is Fred, I am from Bedrock` where `name` and `location` are the object's own props

class Person {
    constructor(obj) {
        this.name = obj.name;
        this.age = obj.age;
        this.location = obj.location;
    }
    speak() {
        return `Hello, my name is ${this.name}, I am from ${this.location}.`;
    }
}

// #### Instructor

// * Now that we have a Person as our base class, we'll build our Instructor class.
// * Instructor uses the same attributes that have been set up by Person
// * Instructor has the following unique props:
//   * `specialty` what the Instructor is good at i.e. 'redux'
//   * `favLanguage` i.e. 'JavaScript, Python, Elm etc.'
//   * `catchPhrase` i.e. `Don't forget the homies`
// * Instructor has the following methods:
//   * `demo` receives a `subject` string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
//   * `grade` receives a `student` object and a `subject` string as arguments and logs out '{student.name} receives a perfect score on {subject}'

class Instructor extends Person {
    constructor(obj) {
        super(obj);
        this.specialty = obj.specialty;
        this.favLanguage = obj.favLanguage;
        this.catchPhrase = obj.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}.`;
    }
    grade(obj, subject) {
        return `${obj.name} receives a perfect score on ${subject}!`
    }
    changeGrade(obj) {
        let num = (Math.floor(Math.random()*20)-9);
        obj.grade += num;
        if (num<0) {
            return `Upon review by ${this.name}, ${obj.name}'s grade was lowered by ${-num} points and has a new grade of ${obj.grade}`;
        }
        else if (num==0) {
            return `Upon review by ${this.name}, ${obj.name}'s grade stayed the same at ${obj.grade}`;
        }
        else {
            return `Upon review by ${this.name}, ${obj.name}'s grade was raised by ${num} points and has a new grade of ${obj.grade}`;
        }
        
    }
}

// #### Student

// * Now we need some students!
// * Student uses the same attributes that have been set up by Person
// * Student has the following unique props:
//   * `previousBackground` i.e. what the Student used to do before Lambda School
//   * `className` i.e. CS132
//   * `favSubjects`. i.e. an array of the student's favorite subjects ['Html', 'CSS', 'JavaScript']
// * Student has the following methods:
//   * `listsSubjects` a method that logs out all of the student's favoriteSubjects one by one.
//   * `PRAssignment` a method that receives a subject as an argument and logs out that the `student.name has submitted a PR for {subject}`
//   * `sprintChallenge` similar to PRAssignment but logs out `student.name has begun sprint challenge on {subject}`

class Student extends Person {
    constructor(obj) {
        super(obj);
        this.previousBackground = obj.previousBackground;
        this.className = obj.className;
        this.favSubjects = obj.favSubjects;
        this.grade = obj.grade;
    }
    listSubjects() {
        let str = `${this.name}'s favorite subjects: `;
        this.favSubjects.forEach((element) => {
            str = str + element + ", ";
        })
        return str;
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}.`;
    }
    springChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}.`;
    }
    graduate() {
        if(this.grade <70){
            console.log(`Unfortunately, ${this.name} finished Lambda School with a final grade of ${this.grade} and cannot graduate yet.  Let's get back to work on those assignments!`);
            let rand = 0;
            while (this.grade <70){
                rand = Math.floor(Math.random()*4);
                console.log(graders[rand].changeGrade(this));
            }
        }
        return `${this.name} graduates Lambda School with a final grade of ${this.grade}.  Congratulations!`;
    }
}

// #### Project Manager

// * Now that we have instructors and students, we'd be nowhere without our PM's
// * ProjectManagers are extensions of Instructors
// * ProjectManagers have the following unique props:
//   * `gradClassName`: i.e. CS1
//   * `favInstructor`: i.e. Sean
// * ProjectManagers have the following Methods:
//   * `standUp` a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​
//   * `debugsCode` a method that takes in a student object and a subject and logs out `{name} debugs {student.name}'s code on {subject}`

class ProjectManager extends Instructor {
    constructor(obj) {
        super(obj);
        this.gradClassName = obj.gradClassName;
        this.favInstructor = obj.favInstructor;
    }
    standUp(chan) {
        return `${this.name} announces to ${chan}, @channel standup time!`;
    }
    debugsCode(student,subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}.`;
    }
    
}

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

const bob = new Instructor({
    name: 'Bob',
    location: 'Down undah',
    age: 40,
    favLanguage: 'Python',
    specialty: 'Back-end',
    catchPhrase: `Dingo Baby`
});

const kyle = new Student({
    name: 'Kyle',
    location: 'Texas',
    age: 32,
    previousBackground: 'Apple, inc.',
    className: 'WebPT9',
    favSubjects: ['a', 'b', 'c', 'd'],
    grade: 60
});

const lauren = new Student({
    name: 'Lauren',
    location: 'Texas',
    age: 31,
    previousBackground: 'Medical Field, Bloodbank.',
    className: 'WebPT9',
    favSubjects: ['x', 'y', 'z', 'e'],
    grade: 60
});

const michael = new ProjectManager({
    name: 'Michael',
    location: 'Washington',
    age: 33,
    favLanguage: 'Javascript',
    specialty: 'Logic',
    catchPhrase: 'alright alright aliright',
    gradClassName: 'Web13',
    favInstructor: 'Pace'
});

const amy = new ProjectManager({
    name: 'Amy',
    location: 'Texas',
    age: 25,
    favLanguage: 'Less',
    specialty: 'Web Design',
    catchPhrase: 'goodness gracious',
    gradClassName: 'Web10',
    favInstructor: 'Ryan'
});

const graders = [];
graders.push(fred);
graders.push(bob);
graders.push(michael);
graders.push(amy);

// console.log(kyle.listSubjects());
// console.log(kyle.springChallenge('java'));
// console.log(michael.grade(kyle,'java'));
// console.log(bob.demo('python'));
// console.log(fred.speak());
// console.log(michael.catchPhrase);



// #### Stretch Problem

// * Extend the functionality of the Student by adding a prop called grade and setting it equal to a number between 1-100.
// * Now that our students have a grade build out a method on the Instructor (this will be used by _BOTH_ instructors and PM's) that will randomly add or subtract points to a student's grade. _Math.random_ will help.
// * Add a graduate method to a student.
//   * This method, when called, will check the grade of the student and see if they're ready to graduate from Lambda School
//   * If the student's grade is above a 70% let them graduate! Otherwise go back to grading their assignments to increase their score.

console.log(`${kyle.name}'s grade started at ${kyle.grade}`);
console.log(michael.changeGrade(kyle));
console.log(bob.changeGrade(kyle));
console.log(fred.changeGrade(kyle));
console.log(kyle.graduate());

console.log(`${lauren.name}'s grade started at ${lauren.grade}`);
console.log(michael.changeGrade(lauren));
console.log(bob.changeGrade(lauren));
console.log(fred.changeGrade(lauren));
console.log(lauren.graduate());