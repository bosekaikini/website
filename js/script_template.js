function closePane() {
    document.getElementById("contactPane").classList.remove("active");
}
const projGoButton=document.getElementById('project_button');
const homeGoButton=document.getElementById('home_button');
const blogGoButton=document.getElementById('blog_button');
const resumeGoButton=document.getElementById('resume_button');
const courseworkGoButton=document.getElementById('coursework_button');
const contactButton=document.getElementById("contact_button");
const contactPane=document.getElementById("contactPane");

projGoButton.addEventListener('click', function() {
    window.location.href='project_driver.html';
});

homeGoButton.addEventListener('click', function() {
    window.location.href='index.html';
});

blogGoButton.addEventListener('click', function() {
    window.location.href='blog_driver.html';
});

resumeGoButton.addEventListener('click', function() {
    window.open('external_files/Bose_Kaikini_Resume_2025_July.pdf');
});

courseworkGoButton.addEventListener('click', function() {
    window.open('external_files/Bose_Kaikini_Courses_2025.pdf');
});

contactButton.addEventListener('click', function() {
    contactPane.classList.add('active');
});

function openContactPane() {
    contactPane.classList.add('active');
}

