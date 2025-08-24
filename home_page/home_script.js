const mbutton=document.getElementById('javascript_test_button');
const projGoButton=document.getElementById('project_button');
const homeGoButton=document.getElementById('home_button');

mbutton.addEventListener('click', function() {
    alert('Button clicked');
})

projGoButton.addEventListener('click', function() {
    window.location.href='project_page.html';
})

homeGoButton.addEventListener('click', function() {
    window.location.href='home_driver.html';
})