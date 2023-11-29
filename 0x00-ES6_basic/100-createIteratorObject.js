// 100-createIteratorObject.js

export default function createIteratorObject(report) {
  const employees = Object.values(report.allEmployees).flatMap(department => department);
  let index = 0;

  return {
    next() {
      return index < employees.length
        ? { value: employees[index++], done: false }
        : { done: true };
    },
    [Symbol.iterator]() {
      return this;
    },
  };
}
