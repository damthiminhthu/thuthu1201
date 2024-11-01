function showContent(contentId) {
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach((content) => {
        content.style.display = 'none'; // Hide all content
    });

    const activeContent = document.getElementById(contentId);
    if (activeContent) {
        activeContent.style.display = 'block'; // Show selected content
    }
}

// Optionally show the bio tab by default
showContent('bio');
