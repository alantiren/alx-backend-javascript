// 1-block-scoped.js

export default function taskBlock(trueOrFalse) {
  let task = false; // Use let instead of var
  let task2 = true; // Use let instead of var

  if (trueOrFalse) {
    let task = true; // Use let to create a new variable with block scope
    let task2 = false; // Use let to create a new variable with block scope
  }

  return [task, task2];
}
