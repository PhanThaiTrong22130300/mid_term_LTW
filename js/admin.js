// Constants
const MESSAGES = {
    development: 'Tính năng đang được phát triển!',
    logout: 'Bạn có chắc muốn đăng xuất?'
};

// DOM Elements
const elements = {
    sidebar: {
        nav: document.querySelector('.sidebar nav'),
        links: document.querySelectorAll('.sidebar nav a')
    },
    header: {
        searchInput: document.querySelector('.search-bar input'),
        notifications: document.querySelector('.notifications'),
        adminProfile: document.querySelector('.admin-profile')
    },
    content: {
        sections: document.querySelectorAll('.content-section')
    }
};

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    initializeEventListeners();
    loadDashboardData();
});

function initializeEventListeners() {
    // Sidebar navigation
    elements.sidebar.links.forEach(link => {
        link.addEventListener('click', handleNavigation);
    });

    // Header interactions
    elements.header.notifications.addEventListener('click', toggleDropdown);
    elements.header.adminProfile.addEventListener('click', toggleDropdown);
    elements.header.searchInput.addEventListener('input', handleSearch);

    // Click outside dropdowns
    document.addEventListener('click', handleClickOutside);
}

// Navigation Handlers
function handleNavigation(e) {
    e.preventDefault();
    const targetSection = e.currentTarget.getAttribute('data-section');

    // Update active states
    elements.sidebar.links.forEach(link => {
        link.classList.remove('active');
    });
    e.currentTarget.classList.add('active');

    // Navigate to Products page
    if (targetSection === 'products') {
        window.location.href = 'admin_SanPham.html'; // Redirect to products page
        return;
    }

    // Navigate to Users page
    if (targetSection === 'users') {
        window.location.href = 'admin_NguoiDung.html'; // Redirect to users page
        return;
    }

    // Show target section
    elements.content.sections.forEach(section => {
        section.classList.remove('active');
        if (section.id === targetSection) {
            section.classList.add('active');
        }
    });
}

// Dropdown Handlers
function toggleDropdown(e) {
    e.stopPropagation();
    const isNotifications = this.classList.contains('notifications');

    // Close other dropdown
    if (isNotifications) {
        elements.header.adminProfile.classList.remove('active');
    } else {
        elements.header.notifications.classList.remove('active');
    }

    // Toggle current dropdown
    this.classList.toggle('active');
}

function handleClickOutside(e) {
    if (!e.target.closest('.notifications')) {
        elements.header.notifications.classList.remove('active');
    }
    if (!e.target.closest('.admin-profile')) {
        elements.header.adminProfile.classList.remove('active');
    }
}

// Search Handler
function handleSearch(e) {
    const searchTerm = e.target.value.toLowerCase();
    // Implement search logic here
    console.log('Searching for:', searchTerm);
}

// Dashboard Data
function loadDashboardData() {
    // Simulate loading data
    const stats = {
        orders: 150,
        users: 1250,
        products: 300,
        revenue: '50M'
    };
    updateDashboardStats(stats);
}

function updateDashboardStats(stats) {
    // Update stats in dashboard
    Object.entries(stats).forEach(([key, value]) => {
        const statElement = document.querySelector(`#${key}-stat`);
        if (statElement) {
            statElement.textContent = value;
        }
    });
}

// Utility Functions
function logout() {
    if (confirm(MESSAGES.logout)) {
        window.location.href = '../html/dangNhap.html';
    }
}

function showDevelopmentMessage() {
    alert(MESSAGES.development);
}