 function showMessages() {
            document.getElementById('messages-section').style.display = 'block';
        }
        function toggleMessage(box) {
            box.classList.toggle('active');
        }

        // Show personal information
        function showInfo(id) {
            const element = document.getElementById(id);
            element.style.display = element.style.display === 'block' ? 'none' : 'block';
        }