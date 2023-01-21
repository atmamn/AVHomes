// variables product boxes
const s1 = document.querySelector('.s1');
let divsOfS1 = document.querySelectorAll('.s1 .product-div, .s2 .product-div');
let productImgs = document.querySelectorAll('.s1 .product-image, .s2 .product-image');
const homeExtraText = document.querySelectorAll('.home-extra-text');
const productImgsSmall = document.querySelectorAll('.s1 .product-image-small, .s2 .product-image-small');
const productDivH4 = document.querySelectorAll('.product-div h4');
const productDivP = document.querySelectorAll('.product-div .first-p');
const ctaBtn = document.querySelectorAll('.s1 .product-div a, .s2 .product-div a')


// code
for (let i = 0; i < divsOfS1.length; i++) {
  divsOfS1[i].addEventListener('mouseenter', function() {
    productImgs[i].style.display = 'block';
	homeExtraText[i].style.display = 'block';
  productImgsSmall[i].style.display = 'none';
  productDivH4[i].style.fontSize = '1.5rem';
  productDivH4[i].style.textAlign = 'left';
  productDivH4[i].style.marginTop = '1rem';
  productDivH4[i].style.paddingLeft = '0.5rem';
  productDivP[i].style.textAlign = 'left';
  productDivP[i].style.paddingLeft = '0.5rem';
  productDivP[i].style.fontSize = '1.3rem';
  ctaBtn[i].style.backgroundColor = 'rgb(11, 230, 11)';
  ctaBtn[i].style.color = 'white';
  ctaBtn[i].style.borderRadius = '0 0 5px 5px';
  ctaBtn[i].style.boxShadow = '1px 1px 5px 5px rgb(163, 229, 141)';
  });
  divsOfS1[i].addEventListener('mouseleave', function() {
    productImgs[i].style.display = 'none';
	homeExtraText[i].style.display = 'none';
  productImgsSmall[i].style.display = 'block';
  productImgsSmall[i].style.display = 'flex';
  productDivH4[i].style.fontSize = '2rem';
  productDivH4[i].style.textAlign = 'center';
  productDivP[i].style.fontSize = '1.5rem';
  productDivP[i].style.textAlign = 'center';
  ctaBtn[i].style.backgroundColor = 'white';
  ctaBtn[i].style.color = 'rgb(11, 230, 11)';
  ctaBtn[i].style.boxShadow = 'none';
  });
}


// show dropdown menu
/*const showExtraMenus = document.querySelector('.show-extra-menus');
const extraMenus = document.querySelector('.extra-menus-section');

dropdown = () => {
  if (extraMenus.classList.contains('show-extra-menus')) {
    extraMenus.classList.remove('show-extra-menus')
  } else {
    extraMenus.classList.add('show-extra-menus')
  }
}
showExtraMenus.addEventListener('click', dropdown);*/


// change home image text
const typingText = document.querySelector(".typing")
const messages = ["PROTECTS", "HELPS", "COMFORTS", "ENERGIZE"];
let index = 0;
let letter = 0;

function type() {
    if (letter < messages[index].length) {
        setTimeout(() => {
            typingText.innerHTML += messages[index][letter++];
            type();
        }, 150);
    } else {
        setTimeout(erase, 2000);
    }
}

function erase() {
    if (letter > 0) {
        typingText.innerHTML = typingText.innerHTML.slice(0, -1);
        letter--;
        setTimeout(erase, 50);
    } else {
        index++;
        if (index >= messages.length) {
            index = 0;
        }
        type();
    }
}

type();


// change sub menu when hovered
const parentElement = document.querySelector('.extra-menus');
const children = parentElement.children;

function changeColor() {
    this.querySelector("a").style.color = '#0BE60B';
    /*this.querySelector("a").style.fontSize = '30px';*/
    this.querySelector("span").style.color = '#0BE60B';
    this.querySelector("span").style.fontSize = '30px';
}

function resetColor() {
    this.querySelector("a").style.color = 'black';
    /*this.querySelector("a").style.fontSize = '16px';*/
    this.querySelector("span").style.color = 'black';
    this.querySelector("span").style.fontSize = '24px';
}

for (let i = 0; i < children.length; i++) {
    children[i].addEventListener('mouseenter', changeColor);
    children[i].addEventListener('mouseleave', resetColor);
}

// show text in get quotes section
document.addEventListener('DOMContentLoaded', () => {
  const h4 = document.querySelectorAll('.form-section form section label h4');
  const h4inputs = document.querySelectorAll('.form-section form section label input');
  const textArea = document.querySelector('.textarea-section');

  for (let i = 0; i < h4inputs.length; i++) {
      h4inputs[i].addEventListener('input', () => {
          if (h4inputs[i].value) {
              h4[i].style.display = "block";
              textArea.style.display = "block";
          } else {
              h4[i].style.display = "none";
              textArea.style.display = "none";
          }
      });
  }
});
document.addEventListener('DOMContentLoaded', () => {
  const textArea = document.querySelector('form section textarea');
  const h4textArea = document.querySelector('form .textarea-section h4');
  textArea.addEventListener('input', () => {
    if (textArea.value) {
      h4textArea.style.display = "block";
    } else {
      h4textArea.style.display = "none";
    }
  });
});

// phone no validation
let phoneNumberRegex = /^(0|\+234)[789]{0,1}([0-1]{1})([0-9]{8})$/;
let form = document.querySelector("form");
form.addEventListener("submit", validateForm);

/*let phoneInput = document.querySelector("#phone");
phoneInput.addEventListener("focus", function() {
  phoneInput.classList.remove("error");
});*/

function validateForm(event) {
  event.preventDefault(); // prevent form submission

  let phoneInput = document.querySelector("#phone");
  let phoneNumber = phoneInput.value;

  let isValid = phoneNumberRegex.test(phoneNumber);
  let errorMessage = document.querySelector(".form-error-message");

  if (!isValid && phoneNumber != "") {
    errorMessage.innerHTML = "Invalid phone number. Please enter a valid Nigerian phone number.";
    errorMessage.classList.add("show");
    phoneInput.classList.add("error");
  } else {
    errorMessage.innerHTML = "";
    errorMessage.classList.remove("show");
    phoneInput.classList.remove("error");
    // submit the form here if the phone number is valid
    form.submit();
  }
}

// email validation
let emailInput = document.querySelector("#email");
const threeH4 = document.querySelector('.form-section form .first-section label h4.three');
  let errorMessage = document.querySelector(".email-error.error-message");

  // Listen for the 'invalid' event on the email input
  emailInput.addEventListener("invalid", function(event) {
    errorMessage.innerHTML = "Please enter a valid email address.";
    errorMessage.classList.add("show");
    /*threeH4.style.top = '18.8rem'*/
  });

  // Listen for the 'input' event on the email input
  emailInput.addEventListener("input", function() {
    errorMessage.innerHTML = "";
    errorMessage.classList.remove("show");
    /*threeH4.style.top = '17.8rem'*/
  });


// add links


// mobile menu
const responsive = document.querySelector('.responsive');
const mobileMenu = document.querySelector('.mobile-menu');
const parentElements = document.querySelector('.extra-menus-section');
const childrens = parentElement.children;
const showExtraMenus = document.querySelector('.show-extra-menus');

mobileMenu.addEventListener('click', () => {
    if (responsive.classList.contains('mobile-menu')) {
      responsive.classList.remove('mobile-menu');
      mobileMenu.innerHTML = '<span class="material-icons">menu</span>';
      parentElements.style.display = 'none';
    } else {
      responsive.classList.add('mobile-menu');
      mobileMenu.innerHTML = '<span class="material-icons">close</span>';
    }
})
showExtraMenus.addEventListener('click', () => {
  responsive.classList.remove('mobile-menu');
  mobileMenu.innerHTML = '<span class="material-icons">menu</span>';
  parentElements.style.display = 'none';
})

// links content
let aboutUs = document.querySelectorAll('.aboutus');
let indexpage = document.querySelectorAll('.index');
let gallary = document.querySelectorAll('.gallary');
let productsAndServices = document.querySelectorAll('.productsandservices');
let lock = document.querySelectorAll('.lock');
let lightning = document.querySelectorAll('.lightning');
let speaker = document.querySelectorAll('.speaker');
let cinema = document.querySelectorAll('.cinema');
let boardroom = document.querySelectorAll('.boardroom');
let poolgate = document.querySelectorAll('.poolgate');
let contactus = document.querySelectorAll('.contactus');
let onmapoti = document.querySelectorAll('.onmapotiA');
let facebook = document.querySelectorAll('.fa-facebook-f');
let twitter = document.querySelectorAll('.fa-twitter');
let ig = document.querySelectorAll('.fa-instagram');
let linkedin = document.querySelectorAll('.fa-linkedin-in');

for (i = 0; i < aboutUs.length; i++) {
  aboutUs[i].href = '/about%20us.html';
  indexpage[i].href = '/index.html';
  gallary[i].href = '/gallary.html';
  productsAndServices[i].href = '/index.html#target';
  lock[i].href = '/locks.html';
  lightning[i].href = '/lightning.html';
  speaker[i].href = '/smart%20speakers.html';
  cinema[i].href = '/cinema.html';
  boardroom[i].href = '/boardroom.html';
  poolgate[i].href = '/poolgate.html';
  contactus[i].href = '/index.html#contactus';
  onmapoti[i].href = 'https://onmapoti.netlify.app/';
  facebook[i].href = 'https://web.facebook.com/AvHomesNg';
  twitter[i].href = 'https://twitter.com/AvHomesNg';
  ig[i].href = 'https://www.instagram.com/avhomesng/';
  linkedin[i].href = 'https://www.linkedin.com/company/avhomes/';
}

