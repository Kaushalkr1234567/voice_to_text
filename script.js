// Check for browser support
if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    
    recognition.continuous = true;
    recognition.interimResults = false;
    recognition.lang = 'en-US';
    
    const startButton = document.getElementById('startButton');
    const textBox = document.getElementById('textBox');

    startButton.addEventListener('click', () => {
        if (startButton.innerText === "Start Recording") {
            recognition.start();
            startButton.innerText = "Stop Recording";
            startButton.style.backgroundColor = "#f44336";
        } else {
            recognition.stop();
            startButton.innerText = "Start Recording";
            startButton.style.backgroundColor = "#4CAF50";
        }
    });

    recognition.onresult = (event) => {
        const transcript = event.results[event.resultIndex][0].transcript;
        textBox.value += transcript + ' ';
    };

    recognition.onerror = (event) => {
        console.error('Error occurred in recognition: ' + event.error);
    };

} else {
    alert('Sorry, your browser does not support speech recognition.');
}
