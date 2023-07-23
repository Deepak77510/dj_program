//BlACK&WHITE
const toggle = document.getElementById("drkbtn");
toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
  // colorchange
      toggle.onclick = function(){
          this.classList.toggle("dark-btn-on");
          document.body.classList.toggle("dark-theme");
      }
});
// PROJECT
$(".carousel").owlCarousel({
    margin: 10,
    loop:true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive:{
        0:{
            items: 1,
            nav: false
        },
        600:{
            items: 2,
            nav: false
        },
        1000:{
            items: 3,
            nav: false
        }
    }
});
// Project Click
function gotoLink(link){
    location.href = './project1-Travelling/Web_Page.html';
};
// Contact
const scriptURL = 'https://script.google.com/macros/s/AKfycbyEKt6dvUO_v3Nr7fyS3YefivGubAYeRAkdHbTq2p9_pvOpGi-fiTTUysYtCoGaHLI1dA/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {msg.innerHTML = "Message sent Succesfully"
        setTimeout(function(){
        msg.innerHTML = ""
    },3000)
    form.reset()
})
      .catch(error => console.error('Error!', error.message))
  })