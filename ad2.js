// 1. Anti-Adblock Detection Logic
function detectAdBlock() {
    const bait = document.createElement('div');
    bait.innerHTML = '&nbsp;';
    bait.className = 'adsbox ad-placement doubleclick ad-banner';
    bait.style.position = 'absolute';
    bait.style.top = '-999px';
    bait.style.height = '10px';
    document.body.appendChild(bait);

    setTimeout(() => {
        const isBlocked = bait.offsetHeight === 0 || window.getComputedStyle(bait).display === 'none';
        if (isBlocked) {
            console.warn("AdBlock detected!");
            alert("Please disable your AdBlocker to view this content properly.");
        }
        bait.remove();
    }, 300);
}

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
