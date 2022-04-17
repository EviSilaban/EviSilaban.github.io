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
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            btnLoading.classList.toggle('d-none');
            btnKirim.classList.toggle('d-none');
            alert('pesan terkirim')
            form.reset();
            console.log('Success!', response)
        })
        .catch(error => console.error('Error!', error.message))
})


// navbar
const navactive = document.querySelectorAll('.nav-link');
const section = document.querySelectorAll('section');

function activenav() {
    let len = section.length;
    while (--len && window.scrollY + 97 < section[len].offsetTop) { }
    navactive.forEach(ltx => ltx.classList.remove('active'));
    navactive[len].classList.add('active');
}
activenav();
window.addEventListener('scroll', activenav);

// download
const buttondownload = document.querySelector('.download');
function download() {
    let download = 'download/Evi Rosalina Silaban.pdf';
    window.location.href = download;
}