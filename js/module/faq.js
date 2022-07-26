/*логика аккордиона на 4 ре таба */


const hide = (elem, answer) => {
  if (!elem.classList.contains('faq__item-show')) return;

  answer.style.height = `${answer.offsetHeight}px`
  answer.offsetHeight;
  answer.style.display = 'block';
  answer.style.height = 0;
  answer.style.overlow = 'hidden';
  answer.style.transition = 'height 360ms ease-in-out';
  elem.classList.remove('faq__item-show');

  setTimeout(() => {
    answer.style.display = '';
    answer.style.height = '';
    answer.style.overlow = '';
    answer.style.transition = '';
  }, 360)
}

const show = (elem, answer) => {
  if (elem.classList.contains('faq__item-show')) return;

  answer.style.display = 'block';
  const height = answer.offsetHeight;
  answer.style.height = 0;
  answer.style.overlow = 'hidden';
  answer.style.transition = 'height 360ms ease-in-out';
  answer.offsetHeight;
  answer.style.height = `${height}px`


  setTimeout(() => {
    elem.classList.add('faq__item-show');
    answer.style.display = '';
    answer.style.height = '';
    answer.style.overlow = '';
    answer.style.transition = '';
  }, 360)
}

export const accordion = () => {
  const list = document.querySelector('.faq__list');
  const faqItems = document.querySelectorAll('.faq__item');


  list.addEventListener('click', e => {
    const button = e.target.closest('.faq__question');

    if (button) {
      const item = button.closest('.faq__item');

      faqItems.forEach((faqItem, i) => {
        const answer = faqItem.querySelector('.faq__answer');

        if (item === faqItem) {
          item.classList.contains('faq__item-show') ? hide(faqItem, answer) : show(faqItem, answer);
        }
        else {
          hide(faqItem, answer);
        }
      });
    }
  })
}
