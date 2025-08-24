const projGoButton=document.getElementById('project_button');
const homeGoButton=document.getElementById('home_button');
const blogGoButton=document.getElementById('blog_button');

projGoButton.addEventListener('click', function() {
    window.location.href='../project_page/project_driver.html';
});

homeGoButton.addEventListener('click', function() {
    window.location.href='../home_page/home_driver.html';
});

blogGoButton.addEventListener('click', function() {
    window.location.href='../blog_page/blog_driver.html';
});