// Get multiple elements instead of a single one using "querySelectorAll"
const leafs = document.querySelectorAll('.animated-element');
const ascend = document.querySelectorAll('.animate-ascend');          
// Create the observer like the examples above
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Loop through each leaf and add the class individually
            leafs.forEach(leaf => {
                leaf.classList.add('animate-fall');
            });
            ascend.forEach(e => {
                e.classList.add('animate-ascend');
            });
        } else {
            // Loop through each leaf and remove the class individually
            leafs.forEach(e => {
                e.classList.remove('animate-fall');
            });
            ascend.forEach(e => {
                e.classList.remove('animate-ascend');
            });
        }
    });
});

observer.observe(document.querySelector('.page-1'));