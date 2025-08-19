/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
// === State ===
const NUM_FREELANCERS = 100;
const freelancers = Array.from(
  { length: NUM_FREELANCERS },
  generate_freelance_information
);
const AVERAGE_RATE = get_avg_rate(freelancers);

// Write a function that returns a freelancer object with:
// randomly generated name,
// occupation,
// rate
function generate_freelance_information() {
  return {
    name: NAMES[Math.floor(Math.random() * NAMES.length)],
    occupation: OCCUPATIONS[Math.floor(Math.random() * OCCUPATIONS.length)],
    rate: Math.floor(Math.random() * PRICE_RANGE.max) + PRICE_RANGE.min,
  };
}

// Write a function that returns the average rate of all freelancers in state.
function get_avg_rate(freelancer_list) {
  const total =
    freelancer_list.reduce((accumulator, person) => {
      return accumulator + person.rate;
    }, 0) / NUM_FREELANCERS;

  return total;
}

// Write a component function to represent a single freelancer.
function generate_freelancer_row({ name, occupation, rate }) {
  const $tr = document.createElement("tr");
  $tr.innerHTML = `
    <td>${name}</td>
    <td>${occupation}</td>
    <td>${rate}</td>
  `;
  return $tr;
}
// Write a component function to represent an array of freelancers.
function ROWS(freelancer_list) {
  const freelancers = freelancer_list.map(generate_freelancer_row);
  const $tbody = document.createElement("tbody");

  $tbody.replaceChildren(...freelancers);
  return $tbody;
}
// Write a component function to represent the average rate of all freelancers.
function average_rate_component() {
  const $h2 = document.createElement("h2");
  $h2.textContent = `Average Rate: ${AVERAGE_RATE}`;
  return $h2;
}

// Write and call a render function that will mount the application onto the document.
function render() {
  const $app = document.getElementById("app");
  $app.innerHTML = `
        <h1>Freelancer List</h1>
        <h2></h2>
        <table>
            <thead>
                <th>NAME</th>
                <th>OCCUPATION</th>
                <th>RATE</th>
            </thead>
            <tbody>
            </tbody>
        </table>
    `;
  $app.querySelector("h2").replaceWith(average_rate_component());
  $app.querySelector("tbody").replaceWith(ROWS(freelancers));
}

// Render image to the page
render();
