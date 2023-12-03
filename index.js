document.getElementById('sortButton').addEventListener('click', function() {  
    fetch('./lib/default.js')
        .then(response => response.json())  
        .then(data => {  
            data = JSON.parse(JSON.stringify(data));
            data.sort(() => Math.random() - 0.5);
            updateDisplay(data);  
        })  
        .catch(error => console.error('Error:', error));  
});  
  
function updateDisplay(data) {  
    const content = document.getElementById('content');  
    content.innerHTML = '';  
    let i = 1;  
    data.forEach(item => {  
        const card = document.createElement('div');  
        card.className = 'card';  
        card.textContent = i + ": " + item;
        content.appendChild(card);  
        i++;  
    });  
    showSuccessMessage();
}  
  
function showSuccessMessage() {  
    const successMessage = document.getElementById('success-message');  
    successMessage.textContent = '成功！';
    successMessage.style.color = 'green';
    successMessage.style.backgroundColor = 'lightgreen';
    successMessage.style.borderRadius = '10px';
    successMessage.style.boxShadow = '0px 0px 10px rgba(0, 0, 0, 0.1)';
    successMessage.style.padding = '20px';
    successMessage.style.marginTop = '30px'; 
    successMessage.style.display = 'block';
    setTimeout(() => {
        successMessage.style.opacity = '0';  
        setTimeout(() => {  
            successMessage.style.display = 'none';
        }, 300);  
    }, 3000);
}
