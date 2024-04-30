let mediaRecorder;
let audioChunks = [];

async function startRecording() {
    const stream = await navigator.mediaDevices.getUserMedia({
        audio: true
    });
    mediaRecorder = new MediaRecorder(stream);
    mediaRecorder.addEventListener('dataavailable', event => {
        audioChunks.push(event.data);
    });
    mediaRecorder.addEventListener('stop', () => {
        const audioBlob = new Blob(audioChunks);
        const audioUrl = URL.createObjectURL(audioBlob);
        saveAudio(audioUrl)
    });
    mediaRecorder.start();
}

function stopRecording() {
    mediaRecorder.stop();
}

function listAudiosFromLocalStorage() {
    const keys = Object.keys(localStorage)
    const audioContainer = document.getElementById('audioContainer');
    for (const key of keys) {
        if (key === "audio") {
            audioContainer.innerHTML += `<audio controls id="audioPlayer" src=${localStorage[key]}></audio>`
        }
    }
    audioContainer.style.display = 'block';
    audioContainer.style.paddingTop = '16px';
}

function saveAudio(audioUrl) {
    localStorage.setItem('audio', audioUrl);
    listAudiosFromLocalStorage()
}



export { startRecording, stopRecording };
