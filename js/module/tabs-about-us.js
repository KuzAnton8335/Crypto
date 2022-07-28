
const advantageButtons = document.querySelectorAll('.advantage-button');
const advantageItemsContent = document.querySelectorAll('.advantage__item-content');

advantageButtons.forEach((advantageButton, i) => {
  advantageButton.addEventListener('click', () => {
    advantageItemsContent.forEach((advantageItemContent, j) => {
      if (i === j) {
        advantageButtons[j].classList.add('advantage-button__active');
        advantageItemsContent[j].classList.add('advantage__item-content-active')
      }
      else {
        advantageButtons[j].classList.remove('advantage-button__active');
        advantageItemsContent[j].classList.remove('advantage__item-content-active')
      }
    })
  })
})
