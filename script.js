const Keyboard = {
  elements: {
    main: null,
    keysContainer: null,
    keys: []
  },

  eventHandlers: {
    oninput: null,
    onclose: null
  },

  properties: {
    value: "",
    sound: true,
    capsLock: false,
    shift: false,
    language: 'en',
    speech: false,
    cursorPosition: 0
  },

  init() {
    this.elements.main = document.createElement("div");
    this.elements.keysContainer = document.createElement("div");

    this.elements.main.classList.add("keyboard", "keyboard--hidden");
    this.elements.keysContainer.classList.add("keyboard__keys");
    this.elements.keysContainer.appendChild(this._createKeys());

    this.elements.keys = this.elements.keysContainer.querySelectorAll(".keyboard__key");

    this.elements.main.appendChild(this.elements.keysContainer);
    document.body.appendChild(this.elements.main);

    document.querySelectorAll(".use-keyboard-input").forEach(element => {
      element.addEventListener("focus", () => {
        this.open(element.value, currentValue => {
          element.value = currentValue;
        });
      });
    });
  },

  _createKeys() {
    let textarea = document.querySelector('textarea');
    const fragment = document.createDocumentFragment();
    let keyLayout = [];
    if (this.properties.language === 'en' && this.properties.shift === false && this.properties.capsLock === false) {
      keyLayout = [
        "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "backspace",
        "q", "w", "e", "r", "t", "y", "u", "i", "o", "p",
        "caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", "enter",
        "shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/",
        "done", `${this.properties.language}`, "sound", "space", "speech", "arrow-left", "arrow-right"
      ];
    } else if (this.properties.language === 'en' && this.properties.shift === false && this.properties.capsLock === true) {
      keyLayout = [
        "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "backspace",
        "q", "w", "e", "r", "t", "y", "u", "i", "o", "p",
        "caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", "enter",
        "shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/",
        "done", `${this.properties.language}`, "sound", "space", "speech", "arrow-left", "arrow-right"
      ];
    } else if (this.properties.language === 'en' && this.properties.shift === true && this.properties.capsLock === true) {
      keyLayout = [
        "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "backspace",
        "q", "w", "e", "r", "t", "y", "u", "i", "o", "p",
        "caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", "enter",
        "shift", "z", "x", "c", "v", "b", "n", "m", "<", ">", "?",
        "done", `${this.properties.language}`, "sound", "space", "speech", "arrow-left", "arrow-right"
      ];
    } else if (this.properties.language === 'en' && this.properties.shift === true && this.properties.capsLock === false) {
      keyLayout = [
        "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "backspace",
        "q", "w", "e", "r", "t", "y", "u", "i", "o", "p",
        "caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", "enter",
        "shift", "z", "x", "c", "v", "b", "n", "m", "<", ">", "?",
        "done", `${this.properties.language}`, "sound", "space", "speech", "arrow-left", "arrow-right"
      ];
    } else if (this.properties.language === 'ru' && this.properties.shift === false && this.properties.capsLock === false) {
      keyLayout = [
        "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "backspace",
        "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ",
        "caps", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "enter",
        "shift", "э", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ".",
        "done", `${this.properties.language}`, "sound", "space", "speech", "arrow-left", "arrow-right"
      ];
    } else if (this.properties.language === 'ru' && this.properties.shift === false && this.properties.capsLock === true) {
      keyLayout = [
        "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "backspace",
        "Й", "Ц", "У", "К", "Е", "Н", "Г", "Ш", "Щ", "З", "Х", "Ъ",
        "caps", "Ф", "Ы", "В", "А", "П", "Р", "О", "Л", "Д", "Ж", "enter",
        "shift", "Э", "Я", "Ч", "С", "М", "И", "Т", "Ь", "Б", "Ю", ".",
        "done", `${this.properties.language}`, "sound", "space", "speech", "arrow-left", "arrow-right"
      ];
    } else if (this.properties.language === 'ru' && this.properties.shift === true && this.properties.capsLock === true) {
      keyLayout = [
        "!", `"`, "№", ";", "%", ":", "?", "*", "(", ")", "backspace",
        "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ",
        "caps", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "enter",
        "shift", "э", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ",",
        "done", `${this.properties.language}`, "sound", "space", "speech", "arrow-left", "arrow-right"
      ];
    } else if (this.properties.language === 'ru' && this.properties.shift === true && this.properties.capsLock === false) {
      keyLayout = [
        "!", `"`, "№", ";", "%", ":", "?", "*", "(", ")", "backspace",
        "Й", "Ц", "У", "К", "Е", "Н", "Г", "Ш", "Щ", "З", "Х", "Ъ",
        "caps", "Ф", "Ы", "В", "А", "П", "Р", "О", "Л", "Д", "Ж", "enter",
        "shift", "Э", "Я", "Ч", "С", "М", "И", "Т", "Ь", "Б", "Ю", ",",
        "done", `${this.properties.language}`, "sound", "space", "speech", "arrow-left", "arrow-right"
      ];
    }


    const createIconHTML = (icon_name) => {
      return `<i class="material-icons">${icon_name}</i>`
    };

    keyLayout.forEach(key => {
      const keyElement = document.createElement("button");
      let insertLineBreak = [];
      if (this.properties.language === 'en' && this.properties.shift === false && this.properties.capsLock === false) {
        insertLineBreak = ["backspace", "p", "enter", "/"].indexOf(key) !== -1;
      } else if (this.properties.language === 'en' && this.properties.shift === false && this.properties.capsLock === true) {
        insertLineBreak = ["backspace", "p", "enter", "/"].indexOf(key) !== -1;
      } else if (this.properties.language === 'en' && this.properties.shift === true && this.properties.capsLock === true) {
        insertLineBreak = ["backspace", "p", "enter", "?"].indexOf(key) !== -1;
      } else if (this.properties.language === 'en' && this.properties.shift === true && this.properties.capsLock === false) {
        insertLineBreak = ["backspace", "p", "enter", "?"].indexOf(key) !== -1;
      } else if (this.properties.language === 'ru' && this.properties.shift === false && this.properties.capsLock === false) {
        insertLineBreak = ["backspace", "ъ", "enter", "."].indexOf(key) !== -1;
      } else if (this.properties.language === 'ru' && this.properties.shift === false && this.properties.capsLock === true) {
        insertLineBreak = ["backspace", "Ъ", "enter", "."].indexOf(key) !== -1;
      } else if (this.properties.language === 'ru' && this.properties.shift === true && this.properties.capsLock === true) {
        insertLineBreak = ["backspace", "ъ", "enter", ","].indexOf(key) !== -1;
      } else if (this.properties.language === 'ru' && this.properties.shift === true && this.properties.capsLock === false) {
        insertLineBreak = ["backspace", "Ъ", "enter", ","].indexOf(key) !== -1;
      }

      keyElement.setAttribute("type", "button");
      keyElement.classList.add("keyboard__key");

      switch (key) {
        case "backspace":
          keyElement.classList.add("keyboard__key--wide");
          keyElement.innerHTML = createIconHTML("backspace");
          keyElement.setAttribute('data', 'backspace')

          keyElement.addEventListener('click', () => {
            if (this.properties.sound === true) {
              let audio = document.querySelector('.bigKey');
              audio.currentTime = 0;
              audio.play();
            }
            document.querySelector(".use-keyboard-input").focus();
            let arr = this.properties.value.split('');
            let removedIndex = document.querySelector('.use-keyboard-input').selectionEnd - 1;
            let removed = arr.splice(removedIndex, 1);
            let str = arr.join('');
            this.properties.value = str;
            this._triggerEvent("oninput");
            document.querySelector('.use-keyboard-input').selectionStart = removedIndex;
            document.querySelector('.use-keyboard-input').selectionEnd = removedIndex;
            this.cursorPosition = document.querySelector('.use-keyboard-input').selectionEnd;
          });

          break;

        case "caps":
          keyElement.classList.add("keyboard__key--wide", "keyboard__key--activatable");
          keyElement.innerHTML = createIconHTML("keyboard_capslock");
          keyElement.classList.toggle("keyboard__key--active", this.properties.capsLock);
          keyElement.setAttribute('data', 'capslock')

          const caps = () => {
            if (this.properties.sound === true) {
              let audio = document.querySelector('.bigKey');
              audio.currentTime = 0;
              audio.play();
            }
            document.querySelector(".use-keyboard-input").focus();

            if (this.properties.capsLock === true) {
              this.properties.capsLock = false;
            } else {
              this.properties.capsLock = true;
            }
            keyElement.classList.toggle("keyboard__key--active", this.properties.capsLock);
            for (let key of this.elements.keys) {
              if (key.childElementCount === 0) {
                if (this.properties.shift === true && this.properties.capsLock === false) {
                  key.textContent = key.textContent.toUpperCase();
                } else if (this.properties.shift === true && this.properties.capsLock === true) {
                  key.textContent = key.textContent.toLowerCase();
                } else if (this.properties.shift === false && this.properties.capsLock === false) {
                  key.textContent = key.textContent.toLowerCase();
                } else if (this.properties.shift === false && this.properties.capsLock === true) {
                  key.textContent = key.textContent.toUpperCase();
                }
              }

            }
          }

          keyElement.addEventListener('click', caps);

          document.onkeyup = (e) => {
            if (e.key === "CapsLock") {
              caps();
            }
          };

          break;

        case "enter":
          keyElement.classList.add("keyboard__key--wide");
          keyElement.innerHTML = createIconHTML("keyboard_return");
          keyElement.setAttribute('data', 'enter');

          keyElement.addEventListener('click', () => {
            if (this.properties.sound === true) {
              let audio = document.querySelector('.bigKey');
              audio.currentTime = 0;
              audio.play();
            }

            document.querySelector(".use-keyboard-input").focus();
            let counter = 0;

            if (document.querySelector('textarea').selectionEnd === this.properties.value.length) {
              this.properties.value += "\n";
              this.properties.cursorPosition = textarea.selectionEnd;
              counter = textarea.selectionEnd;

            } else {
              let before = '';
              let after = '';
              for (let i = 0; i < this.properties.value.length; i++) {
                if (i < textarea.selectionEnd) {
                  before += this.properties.value[i];
                  counter++;
                } else {
                  after += this.properties.value[i];
                }

              }
              this.properties.value = `${before}\n${after}`;
            }
            this._triggerEvent("oninput");
            textarea.selectionEnd = counter + 1;
          });

          break;

        case "space":
          keyElement.classList.add("keyboard__key--extra-wide");
          keyElement.innerHTML = createIconHTML("space_bar");
          keyElement.setAttribute('data', ' ');
          keyElement.addEventListener('click', () => {
            let counter = 0;

            if (this.properties.sound === true) {
              let audio = document.querySelector('.bigKey');
              audio.currentTime = 0;
              audio.play();
            }
            document.querySelector(".use-keyboard-input").focus();
            if (document.querySelector('textarea').selectionEnd === this.properties.value.length) {
              this.properties.value += " ";
              this.properties.cursorPosition = textarea.selectionEnd;
              counter = textarea.selectionEnd;

            } else {
              let before = '';
              let after = '';
              for (let i = 0; i < this.properties.value.length; i++) {
                if (i < textarea.selectionEnd) {
                  before += this.properties.value[i];
                  ++counter;
                } else {
                  after += this.properties.value[i];
                }

              }
              this.properties.value = `${before} ${after}`;

            }
            this._triggerEvent("oninput");
            textarea.selectionEnd = counter + 1;

          });

          break;

        case "done":
          keyElement.classList.add("keyboard__key--wide", "keyboard__key--dark");
          keyElement.innerHTML = createIconHTML("check_circle");

          keyElement.addEventListener('click', () => {
            this.soundMainKeys();
            this.close();
            this._triggerEvent("onclose");
          });

          break;

        case "shift":
          keyElement.classList.add("keyboard__key--wide", "keyboard__key--activatable");
          keyElement.classList.toggle("keyboard__key--active", this.properties.shift);
          keyElement.innerHTML = "Shift";
          keyElement.setAttribute('data', 'shift');

          const shift = () => {
            if (this.properties.sound === true) {
              let audio = document.querySelector('.bigKey');
              audio.currentTime = 0;
              audio.play();
            }
            document.querySelector(".use-keyboard-input").focus();
            if (this.properties.shift === true) {
              this.properties.shift = false;
            } else if (this.properties.shift === false) {
              this.properties.shift = true;
            }

            document.querySelector(".use-keyboard-input").focus();
            this.elements.main.removeChild(this.elements.keysContainer);
            this.elements.keysContainer = document.createElement("div");
            this.elements.keysContainer.classList.add("keyboard__keys");
            this.elements.keysContainer.appendChild(this._createKeys());
            this.elements.keys = this.elements.keysContainer.querySelectorAll(".keyboard__key");
            this.elements.main.appendChild(this.elements.keysContainer);

            for (let key of this.elements.keys) {
              if (key.childElementCount === 0) {
                if (this.properties.shift === true && this.properties.capsLock === false) {
                  key.textContent = key.textContent.toUpperCase();
                } else if (this.properties.shift === true && this.properties.capsLock === true) {
                  key.textContent = key.textContent.toLowerCase();
                } else if (this.properties.shift === false && this.properties.capsLock === false) {
                  key.textContent = key.textContent.toLowerCase();
                } else if (this.properties.shift === false && this.properties.capsLock === true) {
                  key.textContent = key.textContent.toUpperCase();
                }
              }
            }
          }
          keyElement.addEventListener('click', shift);
          textarea.onkeyup = (e) => {
            if (e.key === "Shift") {
              shift();
            }
          };

          break;

        case "sound":
          if (this.properties.sound === false) {
            keyElement.innerHTML = createIconHTML("volume_off");

          } else {

            keyElement.innerHTML = createIconHTML("volume_up");
          }

          keyElement.addEventListener('click', () => {
            this.soundMainKeys();

            document.querySelector(".use-keyboard-input").focus();
            if (this.properties.sound === true) {
              this.properties.sound = false
              keyElement.innerHTML = createIconHTML("volume_off");

            } else {
              this.properties.sound = true;
              keyElement.innerHTML = createIconHTML("volume_up");
            }
          });

          break;

        case "speech":
          if (this.properties.speech === false) {
            keyElement.innerHTML = createIconHTML("mic_off");

          } else {
            keyElement.innerHTML = createIconHTML("mic");
          }
          window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
          const recognition = new SpeechRecognition();
          recognition.interimResults = true;
          if (this.properties.language === 'en') {
            recognition.lang = 'en-US';
          } else if (this.properties.language === 'ru') {
            recognition.lang = 'ru';
          }

          keyElement.addEventListener('click', () => {
            this.soundMainKeys();

            if (this.properties.speech === true) {
              this.properties.speech = false;
              keyElement.innerHTML = createIconHTML("mic_off");
              recognition.removeEventListener('end', recognition.start);
              recognition.stop();
            } else {
              this.properties.speech = true;
              keyElement.innerHTML = createIconHTML("mic");
              recognition.addEventListener('result', e => {
                const transcript = Array.from(e.results)
                  .map(result => result[0])
                  .map(result => result.transcript)
                  .join('');

                if (e.results[0].isFinal) {
                  document.querySelector('textarea').textContent += e.results[0][0].transcript + ' ';
                }
              });

              recognition.addEventListener('end', recognition.start);
              recognition.start();
            }
          });

          break;

        case "arrow-left":
          keyElement.innerHTML = createIconHTML("chevron_left");
          keyElement.setAttribute('data', 'arrowleft');

          keyElement.addEventListener('click', () => {
            this.soundMainKeys();

            document.querySelector(".use-keyboard-input").focus();
            this.cursorPosition = document.querySelector('.use-keyboard-input').selectionEnd - 1;
            document.querySelector('.use-keyboard-input').selectionStart = this.cursorPosition;
            document.querySelector('.use-keyboard-input').selectionEnd = this.cursorPosition;
          });

          break;

        case "arrow-right":
          keyElement.innerHTML = createIconHTML("chevron_right");
          keyElement.setAttribute('data', 'arrowright');

          keyElement.addEventListener('click', () => {
            this.soundMainKeys();
            document.querySelector(".use-keyboard-input").focus();
            this.cursorPosition = document.querySelector('.use-keyboard-input').selectionEnd + 1;
            document.querySelector('.use-keyboard-input').selectionStart = this.cursorPosition;
            document.querySelector('.use-keyboard-input').selectionEnd = this.cursorPosition;
          });

          break;

        case `${this.properties.language}`:
          keyElement.textContent = this.properties.language;
          keyElement.addEventListener('click', () => {
            document.querySelector(".use-keyboard-input").focus();
            this.soundMainKeys();

            if (this.properties.language === 'en') {
              this.properties.language = 'ru';
              this.elements.main.removeChild(this.elements.keysContainer);
              this.elements.keysContainer = document.createElement("div");
              this.elements.keysContainer.classList.add("keyboard__keys");
              this.elements.keysContainer.appendChild(this._createKeys());
              this.elements.keys = this.elements.keysContainer.querySelectorAll(".keyboard__key");
              this.elements.main.appendChild(this.elements.keysContainer);
            } else {
              this.properties.language = 'en';
              this.elements.main.removeChild(this.elements.keysContainer);
              this.elements.keysContainer = document.createElement("div");
              this.elements.keysContainer.classList.add("keyboard__keys");
              this.elements.keysContainer.appendChild(this._createKeys());
              this.elements.keys = this.elements.keysContainer.querySelectorAll(".keyboard__key");
              this.elements.main.appendChild(this.elements.keysContainer);
            }
          });
          break;

        default:
          if (this.properties.shift === true && this.properties.capsLock === false) {
            keyElement.textContent = key.toUpperCase();
          } else if (this.properties.shift === true && this.properties.capsLock === true) {
            keyElement.textContent = key.toLowerCase();
          } else if (this.properties.shift === false && this.properties.capsLock === false) {
            keyElement.textContent = key.toLowerCase();
          } else if (this.properties.shift === false && this.properties.capsLock === true) {
            keyElement.textContent = key.toUpperCase();
          }
          keyElement.setAttribute('data', `${key.toLowerCase()}`)
          keyElement.addEventListener('click', () => {

            if (this.properties.sound === true) {
              this.soundMainKeys();
            }

            document.querySelector(".use-keyboard-input").focus();

            const transformInputLowerCase = () => {
              if (document.querySelector('textarea').selectionEnd === this.properties.value.length) {
                this.properties.value += key.toLowerCase();
                this.properties.cursorPosition++;
                counter = textarea.selectionEnd;
              } else {
                let before = '';
                let after = '';
                for (let i = 0; i < this.properties.value.length; i++) {
                  if (i < document.querySelector('textarea').selectionEnd) {
                    before += this.properties.value[i];
                    counter++;
                  } else {
                    after += this.properties.value[i];
                  }
                }

                this.properties.value = `${before}${key.toLowerCase()}${after}`;
                this.properties.cursorPosition = counter + 1;
                document.querySelector('textarea').selectionEnd = counter + 1;
              }
            }

            const transformInputUpperCase = () => {
              if (document.querySelector('textarea').selectionEnd === this.properties.value.length) {
                this.properties.value += key.toUpperCase();
                this.properties.cursorPosition++;
                counter = textarea.selectionEnd;
              } else {
                let before = '';
                let after = '';
                for (let i = 0; i < this.properties.value.length; i++) {
                  if (i < document.querySelector('textarea').selectionEnd) {
                    before += this.properties.value[i];
                    counter++;
                  } else {
                    after += this.properties.value[i];
                  }
                }

                this.properties.value = `${before}${key.toUpperCase()}${after}`;
                this.properties.cursorPosition = counter + 1;
                document.querySelector('textarea').selectionEnd = counter + 1;
              }
            }
            let counter = 0;

            if (this.properties.shift === true && this.properties.capsLock === false) {
              transformInputUpperCase();
            } else if (this.properties.shift === true && this.properties.capsLock === true) {
              transformInputLowerCase();
            } else if (this.properties.shift === false && this.properties.capsLock === false) {
              transformInputLowerCase();
            } else if (this.properties.shift === false && this.properties.capsLock === true) {
              transformInputUpperCase();
            }
            this._triggerEvent("oninput");
            textarea.selectionEnd = counter + 1;
          });
          break;
      }
      fragment.appendChild(keyElement);

      if (insertLineBreak) {
        fragment.appendChild(document.createElement("br"));
      }
    });
    return fragment;
  },

  soundMainKeys() {
    if (this.properties.language === 'ru' && this.properties.sound === true) {
      const audio = document.querySelector(`.ruKeys`);
      if (!audio) return;
      audio.currentTime = 0;
      audio.play();
    } else if (this.properties.language === 'en' && this.properties.sound === true) {
      const audio = document.querySelector(`.enKeys`);
      if (!audio) return;
      audio.currentTime = 0;
      audio.play();
    }
  },

  _triggerEvent(handlerName) {
    if (typeof this.eventHandlers[handlerName] == "function") {
      this.eventHandlers[handlerName](this.properties.value)
    }
  },

  open(initialValue, oninput, onclose) {
    this.properties.value = initialValue || "";
    this.eventHandlers.oninput = oninput;
    this.eventHandlers.onclose = onclose;
    this.elements.main.classList.remove("keyboard--hidden")

  },

  close() {
    this.properties.value = '';
    this.eventHandlers.oninput = oninput;
    this.eventHandlers.onclose = onclose;
    this.elements.main.classList.add("keyboard--hidden")

  },
};


window.addEventListener("DOMContentLoaded", function () {
  Keyboard.init();
});


document.onkeydown = () => {
  let keys = document.querySelectorAll('.keyboard__key');
  document.querySelector('.use-keyboard-input').addEventListener('keydown', (event) => {
    for (let item of keys) {
      if (event.key.toLowerCase() == item.getAttribute('data')) {
        item.classList.add('focusKey');
      }
    }
  });
  document.querySelector('.use-keyboard-input').addEventListener('keyup', (event) => {
    for (let item of keys) {
      if (event.key.toLowerCase() == item.getAttribute('data')) {
        item.classList.remove('focusKey');
      }
    }
  });
}

