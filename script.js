// JavaScript để mở modal
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('loginBtn').addEventListener('click', function() {
        $('#loginModal').modal('show');
    });
    document.getElementById('registerBtn').addEventListener('click', function() {
        $('#registerModal').modal('show');
    });
});
