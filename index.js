const section = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav_links a');
const spyObserver = new IntersectionObserver(callbackFuntion, { threshhold: 0.5});

section.forEach(section => spyObserver.observe(section));

function callbackFuntion(entries) {
    entries.forEach(entry => {
        if(entry.isIntersecting  === true) {
           let id = entry.target.id;
           sctnId = 
           console.log(`id is ${id}`);
        }
    })
}