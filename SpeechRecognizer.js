
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;

class SpeechRecognizer {
  constructor(eventListener = () => {}, lang = 'de-De') {
    this.eventListener = eventListener;
    this.oldResults = [];
    this.reset(lang);
  }

  reset(lang = 'de-De') {
    this.working = false;
    this.listening = false;
    this.error = 'none';
    try { this.recognition.stop(); } catch (e) {}
    this.currentFinal = '';
    this.currentInterim = '';
    this.currentResult = '';
    try {
      this.recognition = new SpeechRecognition();
      this.recognition.continuous = true;
      this.recognition.interimResults = true;
      this.recognition.lang = lang;
      this.recognition.addEventListener('start', e => this.startListener(e))
      this.recognition.addEventListener('end', e => this.endListener(e))
      this.recognition.addEventListener('result', e => this.resultListener(e))
      this.recognition.addEventListener('error', e => this.errorListener(e))
      this.working = true;
    } catch (e) {
      this.error = 'API not available';
      this.eventListener('error', this.error, 'The WebSpeech API is not available in your browser. Use Chrome.');
    }
  }

  start() {
    if (this.working) {
      try {
        this.recognition.start();
      } catch (e) {
        this.working = false;
        this.listening = false;
        this.error = 'API not working';
        this.eventListener('error', this.error, 'The WebSpeech API in your browser is not working. Use Chrome.');
      }
    }
  }

  stop() {
    if (this.working) {
      try {
        this.recognition.stop();
      } catch (e) {
        this.working = false;
        this.listening = false;
        this.error = 'API not working';
        this.eventListener('error', this.error, 'The WebSpeech API in your browser is not working. Use Chrome.');
      }
    }
  }

  startListener(evt) {
    if (this.working) {
      this.listening = true;
      this.currentFinal = '';
      this.currentInterim = '';
      this.currentResult = '';
      this.eventListener('start', 'recognition start');
    }
  }

  endListener(evt) {
    if (this.working) {
      this.listening = false;
      if (this.currentFinal)
        this.oldResults.push(this.currentFinal);
      this.eventListener('end', 'recognition end');
    }
  }

  resultListener(evt) {
    if (this.working) {
      if (typeof evt.results === 'undefined') {
        this.working = false;
        this.listening = false;
        try { this.recognition.stop(); } catch (e) {}
        this.error = 'API not working';
        this.eventListener('error', this.error, 'The WebSpeech API in your browser is not working. Use Chrome.');
        return;
      }
      this.currentInterim = '';
      for (let i = evt.resultIndex; i < evt.results.length; ++i) {
        if (evt.results[i].isFinal)
          this.currentFinal += evt.results[i][0].transcript;
        else
          this.currentInterim += evt.results[i][0].transcript;
      }
      this.currentResult = this.currentFinal + this.currentInterim;
      this.eventListener('result', this.currentFinal, this.currentInterim);
    }
  }

  errorListener(evt) {
    if (this.working) {
      if (evt.error == 'no-speech') {
        this.error = 'no speech detected';
        this.working = false;
        this.listening = false;
        try { this.recognition.stop(); } catch (e) {}
        this.eventListener('error', this.error, 'No speech detected. Check your microphone or try again.');
      }
      if (evt.error == 'audio-capture') {
        this.error = 'no microphone found';
        this.working = false;
        this.listening = false;
        try { this.recognition.stop(); } catch (e) {}
        this.eventListener('error', this.error, 'No microphone found. Check your settings.');
      }
      if (evt.error == 'not-allowed') {
        this.error = 'no microphone permission';
        this.working = false;
        this.listening = false;
        try { this.recognition.stop(); } catch (e) {}
        this.eventListener('error', this.error, 'You denied the permission for microphone access.');
      }
    }
  }
}
