document.querySelector('form').addEventListener('submit', formSubmit);

function formSubmit(e) {
  const reqFields = document.querySelectorAll('.js-style');
  const radios = document.querySelectorAll('[name=gender]');
  const headerUnu = document.querySelector('.header1');
  
  for(let i = 0; i < reqFields.length; i++) {
    const field = reqFields[i];

    if(field.value === ''|| field.value === 'Your message here...') {
      field.classList.add('redBorder');
      headerUnu.classList.remove('hidden');
      field.addEventListener('change', () => {
          removeErrorState(field);
          headerUnu.classList.add('hidden');
        }, 
        { once: true }
      );
      e.preventDefault();
    }
  }
  
  if(!radios[0].checked && !radios[1].checked) {
    const parent = radios[0].parentElement.parentElement;
    parent.classList.add('redBorder');
    headerUnu.classList.remove('hidden');

    radios[0].addEventListener('change', () => {
      removeErrorState(parent);
      headerUnu.classList.add('hidden');
    });
    radios[1].addEventListener('change', () => {
      removeErrorState(parent);
      headerUnu.classList.add('hidden');
    });
    e.preventDefault();
  }
}

function removeErrorState(elem) {
  elem.classList.add('borderNormal');

}

function successMessage() {
  const headerDoi = document.querySelector('.header2');
  if(document.location.search === '') {
    return;
  }
  headerDoi.classList.remove('hidden');
  setTimeout(hideSuccessMessage, 2500);
}

function hideSuccessMessage() {
  document.querySelector('.header2').classList.add('fade-out');
}
successMessage();

function dateForm(){
  const radioss = document.querySelectorAll('[name=gender]');
  const inputUnuu = document.getElementById('inputUnu');
  const inputDoii = document.getElementById('inputDoi');
  const inputTreii = document.getElementById('inputTrei');
  const inputTtreii = document.getElementById('inputTtrei');
  const inputPatruu = document.getElementById('inputPatru');
  console.log('First Name: ' , inputUnuu.value);
  console.log('Second Name: ', inputDoii.value);

  if(radioss[0].checked) {
    console.log('Sexul: ', inputTreii.value);
   } else if (radioss[1].checked) {
    console.log('Sexul: ',inputTtreii.value);
  }

  console.log('Mesaj : ', inputPatruu.value);
  
}

const buttonSub = document.querySelector('.buttonSubmit');
buttonSub.addEventListener('click', dateForm);

window.addEventListener('DOMContentLoaded', successMessage());

function inlocuireNume() {
  const queryString = window.location.search;
  const str = String(queryString); 
  const res = str.split("&");
  const stringUnu = res[0];
  const stringDoi = stringUnu.slice(12 , Infinity);
  document.getElementById("demo").innerHTML = stringDoi;
}

inlocuireNume();

