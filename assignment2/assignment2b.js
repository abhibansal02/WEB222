/*******************************************************************************
* WEB222 – Assignment 2
* I declare that this assignment is my own work in accordance with Seneca
* Academic Policy. No part of this assignment has been copied manually or
* electronically from any other source (including web sites) or distributed to
* other students.
*
* Name: Abhi Bansal Student ID: 122132210 Date: 02/09/2022
*
******************************************************************************/

// an array of course objects
var courses = [
    { code: 'APC100', name: 'Applied Professional Communications', hours: 3, url: 'http://www.senecacollege.ca/' },
    { code: 'IPC144', name: 'Introduction to Programming Using C', hours: 4, url: 'https://scs.senecac.on.ca/~ipc144/' },
    { code: 'ULI101', name: 'Introduction to Unix/Linux and the Internet', hours: 4, url: 'https://cs.senecac.on.ca/~fac/uli101/live/' },
    { code: 'IOS110', name: 'Introduction to Operating Systems Using Windows', hours: 4, url: 'https://cs.senecac.on.ca/~fac/ios110' },
    { code: 'EAC150', name: 'College English', hours: 3, url: null }
];

// prototype object for creating student objects
var student = { 
    name: "", 
    dob: new Date(),
    sid: "",
    program: "", 
    gpa: 4.0,
    toString: function () {
        return 'Student info for ' + this.name + ': born on ' + this.dob.toLocaleDateString() +
               ', student id ' + this.sid + ', progrem ' + this.program + ', current GPA ' + this.gpa; 
    }
};

/************************************************************
 * Start your Part B code here. Do not change the code above.
 ************************************************************/
// task 1

//Part a
var removedCourse = courses.pop();

//Part b
console.log("\n*** Task 1 ***\n");
console.log("Course " + removedCourse.code + " was deleted from the array (courses)");

//Part c
var ibc233={ code: 'IBC233', name: 'iSeries Business Computing', hours: 4, url: 'http://scs.senecac.on.ca/~ibc233/' };
var oop244={ code: 'OOP244', name: 'Introduction to Object Oriented Programming', hours: 4, url: 'http://scs.senecac.on.ca/~oop244/' };
var web222={ code: 'WEB222', name: 'Internet I - Internet Fundamentals', hours: 4, url: 'http://scs.senecac.on.ca/~web222/' };
var dbs201={ code: 'DBS201', name: 'Introduction to Database Design and SQL', hours: 4, url: 'http://scs.senecac.on.ca/~dbs201/' };

console.log("Adding new course objects into the array (courses)\n");

//Part d
courses.push(ibc233,oop244,web222,dbs201);

//Part e
console.log("Course objects in the array (courses): ");
for(var i=0;i<courses.length;i++){
    console.log(courses[i].code + ", " + courses[i].name + ", " + courses[i].hours + " hours/week, website: " + courses[i].url);
}

// task 2

//Part a

var student1=Object.create(student);
student1.name = 'Bob Marley';
student1.dob = new Date(1995 , 2, 4);
student1.sid = '123456789';
student1.program = 'CPA';
student1.gpa = 4.0;

var student2=Object.create(student);
student2.name='Julio Caeser';
student2.dob = new Date (1998, 1, 5);
student.sid = '100211564';
student2.program = 'CPD';
student2.gpa = 3.5;

var student3=Object.create(student);
student3.name = 'Georgie Chapman';
student3.dob = new Date(2000, 8, 11);
student3.sid = '255468795';
student3.program = 'CAN';
student3.gpa = 3.0;

var student4=Object.create(student);
student4.name = 'Geneva Fitzgerald';
student4.dob = new Date(1999, 2, 6);
student4.sid = '544897621';
student4.program = 'CAN';
student4.gpa = 4.0;

//Part b

var students = [];
students.push(student1,student2,student3,student4);

//Part c
function displayStudentData(data,index){
    console.log(index + ": " + data.toString());
};

console.log("\n***Task 2 ***\n");
console.log("Student objects in the array (students):");
students.forEach(displayStudentData);