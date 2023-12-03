document.addEventListener('DOMContentLoaded', function () {  
    const generateBtn = document.getElementById('generate-btn');  
    const resultDiv = document.getElementById('result');  
    let sortedList = [];  
    fetch('./lib/default.json') // Fetch the JSON data from the specified path.  
        .then(response => response.json()) // Parse the response as JSON.  
        .then(data => {  
            sortedList = data.slice().sort(() => Math.random() - 0.5); // Shuffle the array randomly. Sort it in ascending order.  
        })  
        .catch(error => console.error('Error:', error)); // Catch any errors that occur during the fetching process.  
    generateBtn.addEventListener('click', function () {  
        generateBtn.style.display = 'none'; // Hide the button after clicking it.  
        resultDiv.textContent = ''; // Clear the result div.  
        for (let i = 0; i < sortedList.length; i++) { // Loop through the shuffled array and display each item in the result div.  
            const item = sortedList[i];  
            const itemEl = document.createElement('div'); // Create a new div for each item.  
            itemEl.textContent = `${i + 1}. ${item}`; // Add the item with its index to the div's text content.  
            itemEl.style.marginBottom = '10px'; // Add some space between each item.  
            resultDiv.appendChild(itemEl); // Append the item's div to the result div.  
        }  
    });  
});
