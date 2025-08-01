/// <summary>
/// This is a Javascript array that contains several JavaScripts object(or dictionary). 
/// You can spot that each member of the array contain seven object. This object has a key and value pair.
/// The value may be string, int, float, array or bool.
/// While the key remain constant amongst each member of the array, the value of each corresponding key changes.
/// </summary>
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

/// <summary>
/// This function create three buttons with label "All", "CSE" and "WDD" and call a filter function when clicked.
/// It then append the button to a selected DOM element.
/// </summary>

/// <plan>
/// 1. Create an array of three strings: "All", "CSE" and "WDD"
/// 2. Loop through the array and create a button for each memeber of the array with each member the text content
///    of the button.
/// 3. Call a filtercourses function that has a parameter of the member of the array, when the button is clicked.
/// 4. Append each button to the DOM element.
/// </plan>

/// <Observation>
/// Notice how the function start with a raw material or input. It uses an array of strings to create buttons
/// and label them.
/// Next the buttons calls functions when clicked;
/// the button being the next raw material or input and then append it to a DOM element.
/// </Observation>
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

/// <summary>
/// This function single responsibility is to filter courses into three category and call the display function
/// that display the courses based on that filter.
/// </summary>

/// <plan>
/// Create an empty array named filteredCourses.
/// Sort the parameter into two: "All" and the rest using conditional statement.
/// If the parameter value is "All" then the filteredcourses is equal to the entire courses.
/// Else, you then filter the courses to be displayed using the .filter method.
/// Call the renderCourses method that display the courses when clicked.
/// </plan>

/// <Observation>
/// We used two raw materials or input here; a parameter of subject which is a string and our built in input of array
/// We sorted the courses into two: when it need filtering and when it does not using if-else statement.
/// We update the filterdcourses which changes have different value based on parameters.
/// The .filter method uses a simple expression in this occasion and not a function
/// </Observation>
function filtercourses(subject) {
    let filteredCourses = [];

    if (subject === "All") {
        filteredCourses = courses;
    } else {
        filteredCourses = courses.filter(course => course.subject === subject);
    }
    renderCourses(filteredCourses)
}

/// <summary>
/// This function single responsibility is to display courses buttons and call the totalCredit function
/// and the display function.
/// </summary>

/// <plan>
/// 1. Get the DOM element.
/// 2. Clear the DOM element, this is useful cause the causes are display based on filter.
/// 3. Create buttons for each courses and label them.
/// 4. Call the displayCourse function to display further content when the buttons are clicked.
/// 5. Append the buttons to the DOM element.
/// 6. Call the totalCredit function.
/// </plan>

/// <Observation>
/// The inputs of this function is the courses and the built-in input of the DOM element which is updated 
/// after each loop.
/// The function calls two functions, one when a button is clicked and the other when after each loop.
/// A good function has a single responsibility and can call other functions.
/// </Observation>
function renderCourses(courses) {
    const courseList = document.getElementById("course-list");
    courseList.innerHTML = "";

    courses.forEach(course => {
        const coursebutton = document.createElement("button");
        coursebutton.textContent = `${course.subject}${course.number}`;

        coursebutton.addEventListener("click", ()=>{
            displayCourse(course);
        });

        totalCredit(courses)
        courseList.appendChild(coursebutton);
    });
}

/// <summary>
/// This function calculate the total credit of courses using the .reduce method.
// </summary>

/// <Description of the .reduce method>
/// The .reduce method is used to reduced the value of an array to just one.
/// In this case, it add all the values of the course.credits to just one and return that one value as the total
/// The .reduce method always receives two parameter: the accumulator and in this case the course. Meaning that,
/// it will loop through all the courses.
/// The body can be a function or a simple expression. In this case it is a mere arithmetic operation.
/// The 0 is an optional value that represent the intial value of the accumulator parameter.
/// </Description>

/// <plan>
/// 1. use the .reduce method to calculate the total.
/// 2. select the DOM element to update the total with.
/// 3. sort the two types of total using if-else statement. The first total uses the DOM element selected.
/// The second total is for the inner content and the DOM element does not exist there, so we create a new one.
/// </plan>

/// <Observation>
/// Notice how the if-else statement is used to produce two different result with the same calculations or
/// instructions.
/// The if-else statement conditional statement here is checking if a DOM element exist or not and creating 
/// instructions for both conditions.
/// The value of the total changes because the filter method does it work correctly. Whenever it changes,
/// this function just calculate the total and have a different result.
/// All you need to do is to create this function and other functions will used it in different situations to
/// have different result.
/// </Observation>
function totalCredit(courses) {
    const totalCredits = courses.reduce((acc, course) => acc + course.credits, 0);  

    const creditDiv = document.getElementById("total-credits");
    if (!creditDiv) {
        const creditP = document.createElement("p");
        creditP.textContent = `Total credit for courses listed above is: ${totalCredits}`;
    } else {
        creditDiv.textContent = `Total credit for courses listed above is: ${totalCredits}`;
    }
}

/// <summary>
/// This function dynamically add the content of a dialog element and display it then close it when necessary.
/// </summary>

/// <plan>
/// 1. select the DOM element. (The dialog element)
/// 2. update it content.
/// 3. show the dialog
/// 4. close the dialog when a button is clicked.
/// </plan>
function displayCourse(course) {
    courseDetails = document.querySelector("#course-info")

    courseDetails.innerHTML = "";
    courseDetails.innerHTML = `
        <button id="closeModal">❌</button>
        <h2>${course.subject} ${course.number}</h2>
        <h3>${course.title}</h3>
        <p><strong>Credits</strong>: ${course.credits}</p>
        <p><strong>Certificate</strong>: ${course.certificate}</p>
        <p>${course.description}</p>
        <p><strong>Technologies</strong>: ${course.technology.join(',')}</p>
    `;
    courseDetails.showModal();

    closeModal.addEventListener("click", ()=> {
        courseDetails.close();
    });
}
createMenu();
