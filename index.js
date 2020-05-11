//BURGER MENU

const menuIcon = document.querySelector('.burger-menu');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('change');
});

//VOYANTE
const fileTag = document.getElementById("filetag")

fileTag.addEventListener("change", function () {

  preview = document.getElementById("preview");

  changeImage(this);
  cocoSsd.load().then(model => {

    model.detect(preview).then(predictions => {
      console.log('Predictions: ', predictions);
     
        document.getElementById('predict').value = predictions[0].class
        document.getElementById('score').value = predictions[0].score.toFixed(2) * 100 + '%'
        
    })
  })
});

function changeImage(input) {
  var reader;

  if (input.files && input.files[0]) {
    reader = new FileReader();
    reader.onload = function (e) {
      preview.setAttribute('src', e.target.result);
    }
    reader.readAsDataURL(input.files[0]);
  }
}

