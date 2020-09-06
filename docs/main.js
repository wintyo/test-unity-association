/**
 * Unityからのコールバック
 */
function unityCall() {
  alert('call by Unity');
}

const elButton = document.createElement('button');
elButton.innerText = 'Set Text by JS';
document.body.prepend(elButton);

const elInputText = document.createElement('input');
elInputText.type = 'text';
document.body.prepend(elInputText);

elInputText.addEventListener('keydown', (event) => {
  if (event.key === 'Backspace') {
    elInputText.value = elInputText.value.slice(0, -1);
    return;
  }
  if (event.key.length > 1) {
    return;
  }
  elInputText.value += event.key;
});

elButton.addEventListener('click', () => {
  unityInstance.SendMessage('TestText', 'SetText', elInputText.value);
});
