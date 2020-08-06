const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

function getMyTaxes(salary){
    return this.tax*salary;
}

console.log(getMyTaxes.call(ukraine, 15000));
console.log(getMyTaxes.call(latvia, 15000));
console.log(getMyTaxes.call(litva, 15000));


function getMiddleTaxes(country){
    return this.tax*this.middleSalary;
}

console.log(getMiddleTaxes.call(ukraine));
console.log(getMiddleTaxes.call(latvia));
console.log(getMiddleTaxes.call(litva));

function getTotalTaxes(country) {
    return this.tax*this.middleSalary*this.vacancies;
}

console.log(getTotalTaxes.call(ukraine));
console.log(getTotalTaxes.call(latvia));
console.log(getTotalTaxes.call(litva));


function getMySalary(country) {
    let salary = Math.floor(Math.random() * (1500 - 2000) + 2000);
    let taxCountry = country.tax;
    let taxes = Math.round(taxCountry * salary);
    let profit = Math.round(salary - taxes);
    return {
        salary: salary,
        taxes: taxes,
        profit: profit,
    };
}
setInterval(() => {console.log(getMySalary(ukraine))}, 10000);
