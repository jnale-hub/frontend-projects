// Get multiple elements instead of a single one using "querySelectorAll"
const leafs = document.querySelectorAll('.animated-element');
            
// Create the observer like the examples above
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Loop through each leaf and add the class individually
            leafs.forEach(leaf => {
                leaf.classList.add('animate-fall');
            });
        } else {
            // Loop through each leaf and remove the class individually
            leafs.forEach(leaf => {
                leaf.classList.remove('animate-fall');
            });
        }
    });
});

observer.observe(document.querySelector('.plants-wrapper'));