const quote = document.querySelector('.quatrain');
const author = document.querySelector('.author');
const work = document.querySelector('.work');
const pathJSON = './assets/data.JSON';

let i = 0;
function dataAuthor(data) {
  i >= data.length ? (i = 0) : quote.innerHTML = data[i].quatrain; author.innerHTML = data[i].author ;work.innerHTML = data[i].work ;
}

function getQuotes(path) {
  fetch(path)
    .then(res => res.json())
    .then(data => dataAuthor(data))
    .catch(()=> {
      quote.innerHTML = 'Не удалось загрузить стихотворение'
      author.innerHTML = '';
      work.innerHTML = '';
    });
}
document.querySelector('.button').addEventListener('click', (e)=>{
  e.preventDefault();
  getQuotes(pathJSON);
  i++;
  })