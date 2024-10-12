document.getElementById('send-button').addEventListener('click', sendMessage);
document.getElementById('message-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const input = document.getElementById('message-input');
    const nameInput = document.getElementById('name-input');
    const message = input.value.trim();
    const name = nameInput.value.trim() || 'User'; // Default name

    if (message) {
        displayMessage(name, message, 'user');
        input.value = ''; // Clear the input
        input.focus(); // Keep focus on input
        simulateAIResponse(message); // Trigger AI response based on user input
    }
}

function displayMessage(name, message, type) {
    const chatBox = document.getElementById('chat-box');
    const timestamp = new Date().toLocaleTimeString(); // Get current time

    const messageElement = document.createElement('div');
    messageElement.classList.add('chat-message', type === 'user' ? 'user-message' : 'ai-message');
    messageElement.innerHTML = `<strong>${name}:</strong> ${message} <span class="timestamp">${timestamp}</span>`;

    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
}

function simulateAIResponse(userMessage) {
    let aiResponse = '';

    // Basic keyword-based response logic
    if (userMessage.toLowerCase().includes('hello')) {
        aiResponse = 'Hello! How can I help you today? 😊';
    } else if (userMessage.toLowerCase().includes('how are you')) {
        aiResponse = 'I am just a computer program, but thanks for asking! How about you?';
    } else if (userMessage.toLowerCase().includes('what is your name')) {
        aiResponse = 'I am your chat assistant! You can call me ChatBot.';
    } else if (userMessage.toLowerCase().includes('emoji')) {
        aiResponse = 'Here is a smiley for you: 😊';
    } else if (userMessage.toLowerCase().includes('time')) {
        aiResponse = 'I can’t tell the exact time, but you can check your device’s clock!';
    } else if (userMessage.toLowerCase().includes('weather')) {
        aiResponse = 'The weather today is sunny with a high of 25°C (77°F) and a low of 15°C (59°F).';
    } else if (userMessage.toLowerCase().includes('news')) {
        aiResponse = 'Today, a significant event is happening: The stock market is experiencing fluctuations!';
    } else if (userMessage.toLowerCase().includes('joke')) {
        aiResponse = 'Why don’t scientists trust atoms? Because they make up everything! 😄';
    } else {
        aiResponse = "I'm not sure how to respond to that. Can you ask something else?";
    }

    // Simulate a delay for the AI response
    setTimeout(() => {
        displayMessage('AI', aiResponse, 'ai'); // Display the AI response
    }, 1000); // 1-second delay
}
