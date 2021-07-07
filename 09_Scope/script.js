//* GLOBAL SCOPE
const isStudent = true;

const studentCheck = () => {
	//! isStudent kan brukes her
	console.log('Global scope inni', isStudent)
}

studentCheck();

//! isStudent kan brukes her
console.log('Global scope utenfor', isStudent);


//* BLOCK SCOPE
const teacherCheck = () => {
	const isTeacher = false;

	//! isTeacher kan brukes her
	console.log('Block scope', isTeacher);
}

teacherCheck();

//! isTeacher kan ikke brukes her
// console.log(isTeacher);