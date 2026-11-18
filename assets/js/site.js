const menuButton = document.querySelector('.menu');
const navigation = document.querySelector('.navbar');

if (menuButton && navigation) {
  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    navigation.classList.toggle('is-open', !isOpen);
  });

  navigation.addEventListener('click', (event) => {
    if (event.target.closest('a')) {
      menuButton.setAttribute('aria-expanded', 'false');
      navigation.classList.remove('is-open');
    }
  });
}

const animalSelect = document.querySelector('#animal');
if (animalSelect) {
  const animal = new URLSearchParams(window.location.search).get('animal');
  if (animal && [...animalSelect.options].some((option) => option.value === animal)) {
    animalSelect.value = animal;
  }
}
