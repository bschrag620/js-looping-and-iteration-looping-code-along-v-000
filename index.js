// Code your solutions in this file

const test = 'hello'

function printBadges(employees) {
	for (i = 0; i < employees.length; i++) {
		console.log(`Welcome ${employees[i]}! You are employee #${i + 1}.`)
	}

	return employees;
}

function tailsNeverFails () {
  let tails = 0;

  while (Math.random() >= 0.5) {
    tails ++;
  }

  return `You got ${tails} tails in a row!`;
}