function popupImage() {
    alert("Image popup functionality can be implemented here (e.g., using a modal).");
}

function openNewTab() {
    window.open('', '_blank');
}

function showExercise(exerciseNumber) {
    // Hide all exercise areas
    for (let i = 1; i <= 10; i++) {
        const exDiv = document.getElementById(`ex${i}`);
        if (exDiv) {
            exDiv.style.display = 'none';
        }
    }

    // Show the selected exercise area
    const selectedExDiv = document.getElementById(`ex${exerciseNumber}`);
    if (selectedExDiv) {
        selectedExDiv.style.display = 'block';
    }

    // Execute the specific exercise logic
    switch (exerciseNumber) {
        case 1:
            const changingTextElement = document.getElementById('changingText');
            changingTextElement.textContent = 'Text has been changed!';
            break;
        case 2:
            const styledParagraph = document.getElementById('styledParagraph');
            styledParagraph.style.backgroundColor = 'yellow';
            styledParagraph.style.padding = '10px';
            break;
        case 3:
            const classParagraph = document.getElementById('classParagraph');
            classParagraph.classList.add('new-class');
            setTimeout(() => {
                classParagraph.classList.remove('new-class');
            }, 2000);
            break;
        case 4:
            const newElement = document.createElement('p');
            newElement.textContent = 'This new paragraph was added by JavaScript.';
            document.getElementById('appendToMe').appendChild(newElement);
            break;
        case 5:
            const elementToRemove = document.getElementById('toBeRemoved');
            if (elementToRemove) {
                elementToRemove.remove();
            }
            break;
        case 6:
            const eventButton = document.getElementById('eventButton');
            const eventMessage = document.getElementById('eventMessage');
            eventButton.addEventListener('click', () => {
                eventMessage.textContent = 'Button clicked!';
            }, { once: true }); // Example of event listener
            break;
        case 7:
            const target = document.getElementById('targetElement');
            console.log('Parent:', target.parentNode);
            console.log('Next Sibling:', target.nextElementSibling);
            console.log('Previous Sibling:', target.previousElementSibling);
            console.log('Children:', target.parentNode.children);
            alert('Check the console for DOM traversal information.');
            break;
        case 8:
            const inputForm = document.getElementById('inputForm');
            const inputText = document.getElementById('inputText');
            const formOutput = document.getElementById('formOutput');
            inputForm.addEventListener('submit', (event) => {
                event.preventDefault();
                formOutput.textContent = `You entered: ${inputText.value}`;
            });
            break;
        case 9:
            const fetchedDataContainer = document.getElementById('fetchedData');
            fetch('https://jsonplaceholder.typicode.com/todos/1')
                .then(response => response.json())
                .then(data => {
                    const dataParagraph = document.createElement('p');
                    dataParagraph.textContent = `Title: ${data.title}`;
                    fetchedDataContainer.appendChild(dataParagraph);
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                    fetchedDataContainer.textContent = 'Error fetching data.';
                });
            break;
        case 10:
            const animateDiv = document.getElementById('animateMe');
            animateDiv.style.width = '200px';
            animateDiv.style.height = '200px';
            animateDiv.style.backgroundColor = 'green';
            animateDiv.style.left = '100px';
            break;
    }
}