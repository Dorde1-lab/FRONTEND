function Academy(name, students, subjects, start, end) {
    this.name = name;
    this.students = students;
    this.subjects = subjects;
    this.start = new Date(start);
    this.end = new Date(end);
    this.numberOfClasses = this.subjects.length * 10;
    this.PrintStudents = function () {
        this.students.forEach((student) =>{
            console.log(`${student}`)
        })
    }
    this.PrintSubjects = function () {
        this.subjects.forEach((subject) => {
            console.log(`${subject}`)
        })
    }
}

function Subject(title, isElective, academy, students) {
    this.title = title;
    this.numberOfClasses = 10;
    this.isElective = isElective || false;
    this.academy = academy;
    this.students = students;
    this.OverrideClasses = function (number) {
        if(number >= 3) {
            this.numberOfClasses = number;
        } else {
            console.log("The number is smaller than 3");
        }
    }
}

function Student(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = Number(age);
    this.completedSubjects = [];
    this.academy = null; 
    this.currentSubject = null; 
    this.startAcademy = function(academy) {
        this.academy = academy;
    } 
    this.startSubject = function(subject) {
        this.currentSubject = subject;
    }
}