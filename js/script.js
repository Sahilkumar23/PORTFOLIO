window.onload = function () {
    setTimeout(function() {
        // preloader
        document.getElementById("loader").style.display = "none";
        document.getElementById("content").style.display = "block";
    }, 5000); // 3000 milliseconds = 3 seconds
};

const icons = [
    "./assets/sun.gif",
    "./assets/moon.gif"
]

// toggle day and night
let daynnighticon = document.getElementById('daynnighticon');
let isDay = true;

// root element
const r = document.querySelector(':root');

daynnighticon.addEventListener('click', ()=>{

    if(isDay == true){
        daynnighticon.src = icons[1]
        r.style.setProperty('--black-color', '#ffffff');
        r.style.setProperty('--white-color', '#000000');
        r.style.setProperty('--lite-black', '#ffffff');
        isDay = false
    }else{
        daynnighticon.src = icons[0]
        r.style.setProperty('--black-color', '#000000');
        r.style.setProperty('--white-color', '#ffffff');
        r.style.setProperty('--lite-black', '#393E46');
        isDay = true;
    }

})




// scroll to top btn
let ScrollToTop = document.querySelector(".scroll-btn");
window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        ScrollToTop.style.display = "flex";
    } else {
        ScrollToTop.style.display = "none";
    }
});

// today's day
let toDaySpan = document.getElementById("today")
let todayObj = new Date()
let dayNumber = todayObj.getDay()
let daylist = ["Sunday", "Monday", "Tuesday", "Wednesday ", "Thursday", "Friday", "Saturday"]
let day = daylist[dayNumber]
toDaySpan.innerHTML = day

// change title when tab changes
let docTitle = document.title;
window.addEventListener("blur", () => {
    document.title = "ʎuoS uɐlıW";
})
window.addEventListener("focus", () => {
    document.title = docTitle;
})

// Project Modal Functions
function openProjectModal(id) {
    const modal = document.getElementById(`${id}-modal`);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeProjectModal(id) {
    const modal = document.getElementById(`${id}-modal`);
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// Close modal when clicking outside
document.addEventListener('click', function(event) {
    const modals = document.querySelectorAll('.project-modal, .cert-modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            const id = modal.id.replace('-modal', '');
            if (modal.classList.contains('project-modal')) {
                closeProjectModal(id);
            } else {
                closeCertModal(id);
            }
        }
    });
});

// Initialize modals on page load
document.addEventListener('DOMContentLoaded', function() {
    const modals = document.querySelectorAll('.project-modal, .cert-modal');
    modals.forEach(modal => {
        modal.classList.remove('active');
    });
});

// Certification Modal Functions
function openCertModal(certId) {
    const modal = document.getElementById(`${certId}-modal`);
    modal.style.display = "block";
    document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
}

function closeCertModal(certId) {
    const modal = document.getElementById(`${certId}-modal`);
    modal.style.display = "none";
    document.body.style.overflow = "auto"; // Re-enable scrolling
}

// Close modal when clicking outside the content
window.onclick = function(event) {
    if (event.target.classList.contains('cert-modal')) {
        event.target.style.display = "none";
        document.body.style.overflow = "auto";
    }
}