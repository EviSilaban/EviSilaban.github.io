// form validasi
function validateForm() {
    if (document.forms["formPendaftaran"]["nama"].value == "") {
        alert("Nama Tidak Boleh Kosong");
        document.forms["formPendaftaran"]["nama"].focus();
        return false;
    }
    if (document.forms["formPendaftaran"]["email"].value == "") {
        alert("Email Tidak Boleh Kosong");
        document.forms["formPendaftaran"]["email"].focus();
        return false;
    }
    if (document.forms["formPendaftaran"]["pesan"].value == "") {
        alert("Silahkan masukkan pesan");
        document.forms["formPendaftaran"]["pesan"].focus();
        return false;
    }
}
// simpan pesan /contact masuk
const scriptURL = 'https://script.google.com/macros/s/AKfycbzi7uWgmBQYl0l7P59eKLmUtIVOEgTli47cN3l7D9tcYvFabFpFNbEypTpwTnvKxPHp/exec'
const form = document.forms['formPendaftaran'];

const btnKirim = document.querySelector('.btn-kirim');
const btnLoading = document.querySelector('.btn-loading');
      
form.addEventListener('submit', e => {
    e.preventDefault()
    btnLoading.classList.toggle('d-none');
    btnKirim.classList.toggle('d-none');
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            btnLoading.classList.toggle('d-none');
            btnKirim.classList.toggle('d-none');
            alert('pesan terkirim')
            form.reset();
            console.log('Success!', response)
        })
        .catch(error => console.error('Error!', error.message))
    })

// teks typing
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");
  
const textArray = ["Evi Rosalina Silaban"];
const typingDelay = 100;
const erasingDelay = 100;
const newTextDelay = 2500;
let textArrayIndex = 0;
let charIndex = 0;
  
function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
            typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingDelay);
        } 
        else {
            cursorSpan.classList.remove("typing");
            setTimeout(erase, newTextDelay);
        }
    }
  
function erase() {
    if (charIndex > 0) {
        if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
            typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
            charIndex--;
            setTimeout(erase, erasingDelay);
        } 
        else {
            cursorSpan.classList.remove("typing");
            textArrayIndex++;
            if(textArrayIndex>=textArray.length) textArrayIndex=0;
            setTimeout(type, typingDelay + 1100);
        }
    }
  
    document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
        if(textArray.length) setTimeout(type, newTextDelay + 250);
});

// scroll navbar
document.addEventListener("scroll", function () {
    const navbar = document.querySelector("nav");

      if (this.body.scrollTop > 1 || this.documentElement.scrollTop > 1) {
        navbar.classList.add("nav-scrolled", "fixed-top");
      } else {
        navbar.classList.remove("nav-scrolled", "fixed-top");
      }
  });