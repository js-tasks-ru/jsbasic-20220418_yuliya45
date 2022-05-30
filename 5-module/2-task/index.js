function toggleText() {
  let button = document.querySelector('.toggle-text-button');
  let text = document.querySelector('#text');
  button.addEventListener('click', () => {
    if (text.hidden == false) {
      text.hidden = true;
    } else {
      text.hidden = false;
    }
  })
}
