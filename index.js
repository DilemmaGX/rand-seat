document.getElementById('sortButton').addEventListener('click', function() {
    fetch('./lib/default.json')
        .then(response => response.json())
        .then(data => {
            data = JSON.parse(JSON.stringify(data)); // 防止改变原对象  
            data.sort(() => Math.random() - 0.5); // 随机排序数组  
            updateDisplay(data);
        })
        .catch(error => console.error('Error:', error));
});
function updateDisplay(data) {
    const content = document.getElementById('content');
    content.innerHTML = '';
    data.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.textContent = `${index + 1}. ${JSON.stringify(item).replace(/\"/g, "")}`; // 添加编号顺序
        content.appendChild(card);
    });
}
