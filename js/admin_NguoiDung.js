document.addEventListener('DOMContentLoaded', () => {
    loadUsers();
});

function loadUsers() {
    // Simulate loading users
    const users = [
        { name: 'Nguyễn Văn A', email: 'a@example.com', registered: '2023-01-01' },
        { name: 'Trần Thị B', email: 'b@example.com', registered: '2023-02-01' },
    ];
    const tableBody = document.getElementById('users-table-body');
    users.forEach(user => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.registered}</td>
            <td><button onclick="editUser('${user.name}')">Sửa</button> <button onclick="deleteUser('${user.name}')">Xóa</button></td>
        `;
        tableBody.appendChild(row);
    });
}

function editUser(name) {
    // Logic to edit a user
    alert(`Sửa người dùng: ${name}`);
}

function deleteUser(name) {
    // Logic to delete a user
    alert(`Xóa người dùng: ${name}`);
}