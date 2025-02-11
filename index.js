const quote = document.querySelector('.quatrain');
const author = document.querySelector('.author');

let i = 0;
function dataAuthor(data) {
  i >= data.length ? (i = 0) : quote.innerHTML = data[i].text; author.innerHTML = data[i].author ;
}

function getQuotes(path) {
  fetch(path)
    .then(res => res.json())
    .then(data => dataAuthor(data))
    .catch(()=> quote.innerHTML = 'Не удалось загрузить стихотворение');
}
document.querySelector('.button').addEventListener('click', (e)=>{
  e.preventDefault();
  getQuotes('./assets/rus.JSON');
  i++;
  })