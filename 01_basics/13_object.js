// object destructoring

const course = {
    courseName: "JS course in Hindi",
    price: 999,
    courseInstructor: "Hitesh Choudhary"

}

// console.log(course.courseInstructor)

const {courseInstructor} = course //good approach
const {courseName: cn} = course // changing the name

console.log(cn);


// console.log(courseInstructor);


//============================== APIs =====================


