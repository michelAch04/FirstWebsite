const sidebarButton = document.getElementById('openSidebar');
const sidebar = document.getElementById('sidebar');
const container = document.querySelector('.container');

sidebarButton.addEventListener('click', () => {
    sidebar.classList.toggle('bar-open');       // Open sidebar
    sidebarButton.classList.toggle('open');      // Move button beside sidebar
    container.classList.toggle('shifted');       // Shift content when sidebar is open

    // Toggle button text for open/close
    if (sidebar.classList.contains('bar-open')) {
        sidebarButton.textContent = '◀'; // Close indicator
    } else {
        sidebarButton.textContent = '▶'; // Open indicator
    }
});
