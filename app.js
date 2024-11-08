// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, push, onChildAdded } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyBBQ8DxbN4LeF-xcY9kb5gYKgB6wjt_B3Q",
  authDomain: "web-development-bb988.firebaseapp.com",
  projectId: "web-development-bb988",
  storageBucket: "web-development-bb988.appspot.com",
  messagingSenderId: "762889763217",
  appId: "1:762889763217:web:60ac01b4cb0385a0ee4230",
  measurementId: "G-WB6TN50J87"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const chatRef = ref(database, 'chats');

document.getElementById('chat-form').addEventListener('submit', function (e) {
    e.preventDefault(); 
   

    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;

    push(chatRef, {
        name: name,
        message: message,
        timestamp: Date.now()
    });

    const msg = document.getElementById('msg');
    msg.textContent = "Message successfully sent!";
    msg.style.color = "green";

    setTimeout(() => {
        msg.textContent = "";
    }, 3000);

    document.getElementById('message').value = '';
});

onChildAdded(chatRef, function (snapshot) {
    const chat = snapshot.val();
    const chatBox = document.getElementById('chat-box');
    const chatMessage = document.createElement('p');
    chatMessage.textContent = `${chat.name}: ${chat.message}`;
    chatBox.appendChild(chatMessage);

    chatBox.scrollTop = chatBox.scrollHeight;
});



const toggleColorMode = (e) => {
    // Switch to Light Mode
    if (e.currentTarget.classList.contains("light--hidden")) {
    	// Sets the custom HTML attribute
    	document.documentElement.setAttribute("color-mode", "light");

		//Sets the user's preference in local storage
		localStorage.setItem("color-mode", "light")
		return;
	}
    
    /* Switch to Dark Mode
    Sets the custom HTML attribute */
    document.documentElement.setAttribute("color-mode", "dark");

	// Sets the user's preference in local storage
	localStorage.setItem("color-mode", "dark");
};

// Get the buttons in the DOM
const toggleColorButtons = document.querySelectorAll(".color-mode__btn");

// Set up event listeners
toggleColorButtons.forEach(btn => {
    btn.addEventListener("click", toggleColorMode);
});

// This code assumes a Light Mode default
if (
    /* This condition checks whether the user has set a site preference for dark mode OR a OS-level preference for Dark Mode AND no site preference */
    localStorage.getItem('color-mode') === 'dark' ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches &&
     !localStorage.getItem('color-mode'))
) {
    // if true, set the site to Dark Mode
    document.documentElement.setAttribute('color-mode', 'dark')
}


document.addEventListener('DOMContentLoaded', () => {
    const courses = [
        {
            title: "Introduction to Computer Science",
            description: "An overview of computer science principles, algorithms, and programming."
        },
        {
            title: "Data Structures and Algorithms",
            description: "Study of fundamental data structures and algorithms for problem-solving."
        },
        {
            title: "Web Development Fundamentals",
            description: "Learn the basics of web development, including HTML, CSS, and JavaScript."
        },
        {
            title: "Database Management Systems",
            description: "Explore the design, implementation, and management of databases."
        },
        {
            title: "Software Engineering Principles",
            description: "Key concepts and methodologies in software development."
        },
        {
            title: "Machine Learning",
            description: "Introduction to machine learning concepts and algorithms."
        },
        {
            title: "Mobile App Development",
            description: "Building applications for mobile platforms using modern frameworks."
        }
    ];

    const container = document.querySelector('.courses-container');
    const template = document.getElementById('course-template');

    courses.forEach(course => {
        const clone = document.importNode(template.content, true);
        const courseItem = clone.querySelector('.course-item');
        courseItem.querySelector('.course-title').textContent = course.title;
        courseItem.querySelector('.course-description').textContent = course.description;
        container.appendChild(clone);
    });

    const searchInput = document.getElementById('course-search');

    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase();
        const courseItems = document.querySelectorAll('.course-item');

        courseItems.forEach(course => {
            const title = course.querySelector('.course-title').textContent.toLowerCase();
            const description = course.querySelector('.course-description').textContent.toLowerCase();

            if (title.includes(searchTerm) || description.includes(searchTerm)) {
                course.style.display = 'block';
            } else {
                course.style.display = 'none';
            }
        });
    });
});

var sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.classList.add('open');
}

function closemenu() {
    sidemenu.classList.remove('open');
}



function openmenu() {
    document.getElementById("sidemenu").style.display = "block";
}

function closemenu() {
    document.getElementById("sidemenu").style.display = "none";
}
function toggleMenu() {
    const menu = document.getElementById('sidemenu');
    menu.classList.toggle('open');
    const isOpen = menu.classList.contains('open');
    document.querySelector('.menu-toggle').setAttribute('aria-label', isOpen ? 'Close Menu' : 'Open Menu');
    menu.setAttribute('aria-hidden', !isOpen);
}


