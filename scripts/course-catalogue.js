const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: false
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: false
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

function createMenu() {
    const subjects = ["All", "CSE", "WDD"]

    subjects.forEach(topic => {
        const button = document.createElement("button");
        button.textContent = topic;

        button.addEventListener("click", ()=> {
            filtercourses(topic);
        });
        const web = document.querySelector("#links");
        web.appendChild(button);
    });
}

function filtercourses(subject) {
    let filteredCourses = [];

    if (subject === "All") {
        filteredCourses = courses;
    } else {
        filteredCourses = courses.filter(course => course.subject === subject);
    }
    renderCourses(filteredCourses)
}

function renderCourses(courses) {
    const courseList = document.getElementById("course-list");
    courseList.innerHTML = "";

    courses.forEach(course => {
        const coursebutton = document.createElement("button");
        coursebutton.textContent = `${course.subject}${course.number}`;

        coursebutton.addEventListener("click", ()=>{
            displayCourse(course);
        });
        courseList.appendChild(coursebutton);
    });
    const totalCredits = courses.reduce((acc, course) => acc + course.credits, 0);  

    const creditDiv = document.getElementById("total-credits");
    if (!creditDiv) {
        const creditP = document.createElement("p");
        creditP.textContent = `Total credit for courses listed above is: ${totalCredits}`;
    } else {
        creditDiv.textContent = `Total credit for courses listed above is: ${totalCredits}`;
    }

}

function displayCourse(course) {
    const courseInfo = document.getElementById("course-info")
    courseInfo.innerHTML = "",
    courseInfo.innerHTML = `
        <p><strong>Course Name:</strong> ${course.subject}${course.number}</p>
        <p><strong>Title:</strong> ${course.title}</p>
        <p><strong>Certificate:</strong> ${course.certificate}</p>
        <p><strong>Description:</strong> ${course.description}</p>
        <p><strong>Technology:</strong> ${course.technology}</p>
        <p><strong>Credit:</strong> ${course.credits}</p>
        <p><strong>Completed:</strong> ${course.completed}</p>
    `
    courseInfo.classList.toggle("show")
}
createMenu();
