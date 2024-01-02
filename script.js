function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

var mixerProjects = mixitup('.projects_container', {
    selectors: {
        target: '.project_item'
    },
    animation: {
        duration: 300
    }
});

const linkWork = document.querySelectorAll('.category-btn');

function activeWork() {
    linkWork.forEach((a) => a.classList.remove('active-work'));
    this.classList.add('active-work');
}

linkWork.forEach((a) => a.addEventListener('click', activeWork));