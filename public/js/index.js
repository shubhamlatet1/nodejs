let preveiwContainer = document.querySelector('.products-preview');
let previewBox = preveiwContainer.querySelectorAll('.preview');

console.log(previewBox);
const detailCard = document.querySelectorAll(
  '.details_card .details_card_container'
);
console.log(detailCard);
detailCard.forEach((product) => {
  product.onclick = () => {
    preveiwContainer.style.display = 'flex';
    let name = product.getAttribute('data-name');
    previewBox.forEach((preview) => {
      let target = preview.getAttribute('data-target');
      if (name == target) {
        preview.classList.add('active');
      }
    });
  };
});

previewBox.forEach((close) => {
  close.querySelector('.fa-times').onclick = () => {
    close.classList.remove('active');
    preveiwContainer.style.display = 'none';
  };
});
