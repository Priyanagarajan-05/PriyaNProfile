document.addEventListener('DOMContentLoaded', function () {
    // Elements to animate
    const animatedElements = [
        document.getElementById('profile-photo'),
        document.getElementById('name'),
        document.getElementById('about-container'),
        document.getElementById('education-container'),
        document.getElementById('skills-container'),
    ];

    // Adding "active" class after a delay
    animatedElements.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add('active');
        }, index * 300); // Delay each animation by 300ms
    });
});

function switchMode(){
    var modeElement = document.body;
    modeElement.classList.toggle("dark-mode");
}

