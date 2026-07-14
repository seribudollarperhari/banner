// 2. Auto-Scroll and Refresh Logic (3 Seconds)
function autoScrollAndRefresh() {
    const scrollInterval = setInterval(() => {
        window.scrollBy({
            top: 50, 
            behavior: 'smooth'
        });
    }, 500);

    setTimeout(() => {
        clearInterval(scrollInterval);
        window.location.reload();
    }, 3000);
}

// 3. Initialize scripts when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    detectAdBlock();
    autoScrollAndRefresh();
});
