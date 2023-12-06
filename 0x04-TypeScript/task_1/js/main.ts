// Define the Teacher interface
interface Teacher {
  firstName: string;
  lastName: string;
  readonly fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  readonly location: string;
  [key: string]: any; // Allow any additional attributes
}

// Define the Directors interface
interface Directors extends Teacher {
  numberOfReports: number;
}

// Define the printTeacherFunction interface
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
}

// Define the StudentClassInterface interface
interface StudentClassInterface {
  new (firstName: string, lastName: string): StudentClass;
}

// Class implementation for StudentClass
class StudentClass implements Student {
  constructor(public firstName: string, public lastName: string) {}

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

// Create instances of the StudentClass
const student1: StudentClass = new StudentClass('John', 'Doe');
const student2: StudentClass = new StudentClass('Jane', 'Smith');

// Display information about students
console.log(student1.workOnHomework()); // Output: Currently working
console.log(student2.displayName()); // Output: Jane

// Create a teacher with additional dynamic attribute
const teacher2: Teacher = {
  firstName: 'Jane',
  lastName: 'Smith',
  fullTimeEmployee: false,
  location: 'City B',
  contract: true,
};

// Create a director using the Directors interface
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: true,
  location: 'London',
  numberOfReports: 17,
};

// Function to print teacher information
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  const firstLetter = firstName.charAt(0).toUpperCase();
  const fullName = `${firstLetter}. ${lastName}`;
  return fullName;
};

// Example usage of printTeacher function
console.log(printTeacher(teacher2.firstName, teacher2.lastName)); // Output: J. Smith
console.log(printTeacher(director1.firstName, director1.lastName)); // Output: J. Doe
