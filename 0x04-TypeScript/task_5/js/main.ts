// Define brand types
type MajorBrand = { __brand: 'major' };
type MinorBrand = { __brand: 'minor' };

// Create two interfaces with a brand property
interface MajorCredits {
  credits: number & MajorBrand;
}

interface MinorCredits {
  credits: number & MinorBrand;
}

// Functions to sum credits and return typed results
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: (subject1.credits + subject2.credits) as number & MajorBrand,
  };
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: (subject1.credits + subject2.credits) as number & MinorBrand,
  };
}

// Example usage
const subject1Major: MajorCredits = { credits: 3 as number & MajorBrand };
const subject2Major: MajorCredits = { credits: 4 as number & MajorBrand };

const subject1Minor: MinorCredits = { credits: 2 as number & MinorBrand };
const subject2Minor: MinorCredits = { credits: 1 as number & MinorBrand };

const resultMajor = sumMajorCredits(subject1Major, subject2Major);
const resultMinor = sumMinorCredits(subject1Minor, subject2Minor);

console.log('Sum of Major Credits:', resultMajor.credits);
console.log('Sum of Minor Credits:', resultMinor.credits);
