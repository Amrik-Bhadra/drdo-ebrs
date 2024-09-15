window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const navItems = document.querySelectorAll('.nav-link');
        const currentPage = window.location.pathname.split("/").pop();
        navItems.forEach(item => {
            const linkPage = item.getAttribute('href').split("/").pop();
            if (linkPage === currentPage) {
                console.log(`Match found: ${linkPage}`);
                item.classList.remove('text-gray-600', 'hover:bg-gray-100');
                item.classList.add('bg-custom-gradient', 'text-white', 'shadow-shadow1');
            } else {
                item.classList.remove('bg-custom-gradient', 'text-white', 'shadow-shadow1');
                item.classList.add('text-gray-600', 'hover:bg-gray-100');
            }
        });
    }, 100); 
});