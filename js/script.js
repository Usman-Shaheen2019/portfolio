document.addEventListener('DOMContentLoaded', () => {
    const bugContainer = document.getElementById('bugContainer');
    const maxBugs = 5; // Hard limit of 10 bugs on screen
    let activeBugs = 0; // Counter for currently displayed bugs
    
    // Modern Font Awesome icon classes (version 6)
    const bugIcons = [
        'fa-bug',               // Bug icon
        'fa-laptop-code',       // Laptop
        'fa-mobile-screen',     // Mobile 
        'fa-code',              // Code brackets
        'fa-terminal',          // Terminal
        'fa-database',          // Database
        'fa-server'             // Server
    ];

    function createBug() {
        // Only create if under our limit
        if (activeBugs < maxBugs) {
            const bug = document.createElement('div');
            bug.className = 'bug';
            
            const icon = document.createElement('i');
            const randomIcon = bugIcons[Math.floor(Math.random() * bugIcons.length)];
            icon.className = `fas ${randomIcon}`;
            bug.appendChild(icon);
            
            // Random positioning
            bug.style.left = `${Math.random() * 95}vw`;
            bug.style.fontSize = `${Math.random() * 12 + 12}px`; // 12px to 24px
            
            // Random animation duration (5-15s)
            const duration = Math.random() * 10 + 5;
            bug.style.animationDuration = `${duration}s`;
            
            bugContainer.appendChild(bug);
            activeBugs++;
            
            // Clean up after animation
            bug.addEventListener('animationend', () => {
                bug.remove();
                activeBugs--;
                createBug(); // Immediately replace this bug
            });
        }
    }

    // Initialize with 10 bugs
    for (let i = 0; i < maxBugs; i++) {
        createBug();
    }

    // Regularly check if we need more bugs (as fallback)
    setInterval(() => {
        if (activeBugs < maxBugs) {
            createBug();
        }
    }, 1000);
});
