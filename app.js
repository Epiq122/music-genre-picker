const submitBtn = document.querySelector('#submit-btn');
submitBtn.addEventListener('click', rock);

// let rock = '80s Rock';
// console.log(rock);
// let rock = '80s Rock';

// function genre(e) {
//   e.preventDefault();
//   document.querySelector('#music-input').value;
//   switch (rock) {
//     case '80s Rock' || '90s Rock':
//       document.querySelector('#reveal').textContent = 'test';
//       break;

//     default:
//       console.log('not working');
//   }
// }

function rock(e) {
  e.preventDefault();
  // e.target.value = '';

  let input = document.querySelector('#music-input').value;
  switch (input.toLowerCase()) {
    case 'rock':
      document.querySelector('#reveal').textContent = 'THIS IS SPARTAs';
      input = document.querySelector('#music-input').value = '';
      break;
    case 'classic rock':
      document.querySelector('#reveal').textContent = 'THIS IS SPARTA';
      input = document.querySelector('#music-input').value = '';
      break;
    case 'rap':
      document.querySelector('#reveal').textContent = 'THIS IS SPARTAsssssss';
      input = document.querySelector('#music-input').value = '';
      break;
    default:
      document.querySelector('#music-input').value = '';
  }
}

function set() {}
