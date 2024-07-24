document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const chatForm = document.getElementById('chat-form');
const chatBox = document.getElementById('chat-box');
const chatInput = document.getElementById('chat-input');

if (chatForm) {
    chatForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const message = chatInput.value.trim();
        if (message) {
            const messageElem = document.createElement('div');
            messageElem.textContent = `You: ${message}`;
            chatBox.appendChild(messageElem);
            chatInput.value = '';

            setTimeout(() => {
                const responseElem = document.createElement('div');
                responseElem.textContent = 'Bot: Thank you for your message!';
                chatBox.appendChild(responseElem);
            }, 1000);
        }
    });
}

const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('click', () => {
        const details = card.querySelector('.project-details');
        if (details) {
            details.classList.toggle('active');
        }
    });
});

const projectSearchInput = document.getElementById('project-search');
if (projectSearchInput) {
    projectSearchInput.addEventListener('input', () => {
        const filter = projectSearchInput.value.toLowerCase();
        projectCards.forEach(card => {
            const title = card.querySelector('.project-info h3').textContent.toLowerCase();
            if (title.includes(filter)) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });
    });
}

const socialLinks = document.querySelectorAll('.social-media a');
socialLinks.forEach(link => {
    link.addEventListener('click', () => {
        window.open(link.href, '_blank');
    });
});

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        console.log(`Latitude: ${lat}, Longitude: ${lng}`);

        sendLocationData(lat, lng);
    }, () => {
        console.log('Geolocation is not supported or permission denied.');
    });
}

function sendLocationData(lat, lng) {
    const email = 'Makingaberto69@gmail.com';
    const subject = 'Visitor Location Data';
    const body = `Visitor's current location: Latitude: ${lat}, Longitude: ${lng}`;
    window.open(`mailto:${email}?subject=${subject}&body=${body}`);
}

const workExperienceCards = document.querySelectorAll(".work-experience-card");
const descriptionModal = document.getElementById("description-modal");
const jobTitle = document.getElementById("job-title");
const jobDescription = document.getElementById("job-description");
const closeModal = document.querySelector("#description-modal .close");

workExperienceCards.forEach(card => {
    card.addEventListener("click", () => {
        const workKey = card.dataset.work;
        const workDetail = workDetails[workKey];

        jobTitle.innerHTML = workDetail.title;
        jobDescription.innerHTML = workDetail.description;

        descriptionModal.style.display = "block";
    });
});

closeModal.addEventListener("click", () => {
    descriptionModal.style.display = "none";
});

window.addEventListener("click", event => {
    if (event.target === descriptionModal) {
        descriptionModal.style.display = "none";
    }
});

const viewResumeBtn = document.getElementById('view-resume');
const resumeModal = document.getElementById('view-resume-btn');
const resumeClose = document.querySelector('#view-resume-btn .close');

viewResumeBtn.addEventListener('click', () => {
    resumeModal.style.display = 'block';
});

resumeClose.addEventListener('click', () => {
    resumeModal.style.display = 'none';
});

window.addEventListener('click', event => {
    if (event.target === resumeModal) {
        resumeModal.style.display = 'none';
    }
});