const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4]
    }
  }, {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5]
    }
  }, {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5]
    }
  }];

function getSubjects(student){
    const subjets = Object.keys(student.subjects);
    const result = subjets.map(function (elem){
        return elem[0].toUpperCase()+elem.slice(1).toLowerCase().replace(/_/gi, ' ');
    });
    return result;
}
console.log(getSubjects(students[0]));
console.log(getSubjects(students[1]));
console.log(getSubjects(students[2]));

function getAverageMark(student){
    const subjets = Object.values(student.subjects);
    const arr = subjets[0].concat(subjets[1], subjets[2]);
    const average = arr.reduce(function (acc, mark){
        return acc+=mark; 
    });
    return (average/arr.length).toFixed(2);
}

console.log(getAverageMark(students[0]));
console.log(getAverageMark(students[1]));
console.log(getAverageMark(students[2]));

function getStudentInfo(student){
    return `"name": ${student.name}, "course": ${student.course}, "averageMark": ${getAverageMark(student)}`;
}

console.log(getStudentInfo(students[0]));
console.log(getStudentInfo(students[1]));
console.log(getStudentInfo(students[2]));

function getStudentsNames(students){
    const arr = students.map(function(students){
         return students.name
    });
    return arr.sort();
}

console.log(getStudentsNames(students));


function getBestStudent(students){
    let best;
    if(getAverageMark(students[0])>getAverageMark(students[1]) &&  getAverageMark(students[0])>getAverageMark(students[2])){
        best = students[0].name;    
    } else if (getAverageMark(students[1])>getAverageMark(students[0]) &&  getAverageMark(students[1])>getAverageMark(students[2])){
        best = students[1].name;  
    } else {
        best = students[2].name;  
    }
    return best;
}
console.log(getBestStudent(students));

function calculateWordLetters(word) {
    let count = {};
    let str = word.toLowerCase().split('');
    str.forEach(function(item){
        if(count[item]){
            count[item]++;
        } else{
            count[item] = 1;
        }
    });
    return count;    
}
console.log(calculateWordLetters(prompt('Ввелдіть слово', '')));