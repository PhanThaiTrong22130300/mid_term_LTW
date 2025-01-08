// Constants
const MESSAGES = {

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
        adminProfile: document.querySelector('.admin-profile'),
        logoutBtn: document.getElementById('logout-btn')
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
        link.removeEventListener('click', handleNavigation); // Gỡ sự kiện cũ nếu có
        link.addEventListener('click', handleNavigation);
    });

    // Header interactions
    elements.header.notifications.addEventListener('click', toggleDropdown);
    elements.header.adminProfile.addEventListener('click', toggleDropdown);
    elements.header.searchInput.addEventListener('input', handleSearch);
    elements.header.logoutBtn.addEventListener('click', handleLogout);

    // Click outside dropdowns
    document.addEventListener('click', handleClickOutside);
}

// Navigation Handlers
function handleNavigation(e) {
    e.preventDefault();
    const targetSection = e.currentTarget.getAttribute('data-section');
    if (!targetSection) {
        console.error('Không tìm thấy data-section cho liên kết được nhấp.');
        return;
    }

    elements.sidebar.links.forEach(link => link.classList.remove('active'));
    e.currentTarget.classList.add('active');

    switch (targetSection) {
        case 'products':
            window.location.href = 'admin_SanPham.html';
            break;
        case 'users':
            window.location.href = 'admin_NguoiDung.html';
            break;
        case 'orders':
            window.location.href = 'admin_DonHang.html';
            break;
        case 'revenue':
            window.location.href = 'admin_DoanhThu.html';
            break;
        default:
            elements.content.sections.forEach(section => {
                section.classList.toggle('active', section.id === targetSection);
            });
            break;
    }
}

// Dropdown Handlers
function toggleDropdown(e) {
    e.stopPropagation();
    const isNotifications = this.classList.contains('notifications');

    if (isNotifications) {
        elements.header.adminProfile.classList.remove('active');
    } else {
        elements.header.notifications.classList.remove('active');
    }
    this.classList.toggle('active');
}

function handleClickOutside(e) {
    if (!e.target.closest('.notifications') && elements.header.notifications.classList.contains('active')) {
        elements.header.notifications.classList.remove('active');
    }
    if (!e.target.closest('.admin-profile') && elements.header.adminProfile.classList.contains('active')) {
        elements.header.adminProfile.classList.remove('active');
    }
}

// Search Handler
function handleSearch(e) {
    const searchTerm = e.target.value.toLowerCase();
    console.log('Searching for:', searchTerm);
}

// Logout Handler
function handleLogout(e) {
    e.preventDefault();
    if (confirm(MESSAGES.logout)) {
        window.location.href = '../html/dangNhap.html';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', handleLogout);
    }
});


// Dashboard Data
function loadDashboardData() {
    const stats = {
        orders: 150,
        users: 1250,
        products: 300,
        revenue: '50M'
    };
    updateDashboardStats(stats);
}

function updateDashboardStats(stats) {
    Object.entries(stats).forEach(([key, value]) => {
        const statElement = document.querySelector(`#${key}-stat`);
        if (statElement) {
            statElement.textContent = value;
        } else {
            console.warn(`Không tìm thấy phần tử với ID: ${key}-stat`);
        }
    });
}

// Utility Functions
function showDevelopmentMessage() {
    alert(MESSAGES.development);
}
