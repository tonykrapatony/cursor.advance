const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];

const marks = [4, 5, 5, 3, 4, 5];

const getPairs = (stdList) => {
  let girls = [];
  let boys = [];
  let pair = [];
  for (let student of stdList) {
    if (student.split("").reverse()[0] === "а") {
      //   console.log(student.split("").reverse());
      girls.push(student);
    } else {
      boys.push(student);
    }
  }
  for (let i = 0; i < boys.length; i++) {
    pair.push([" " + boys[i], " " + girls[i]]);
  }
  return pair;
};

export function getPairsExport() {
  console.log(getPairs(students));
}