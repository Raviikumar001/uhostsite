

var backdrop = document.querySelector('.backdrop')
var model = document.querySelector('.modal')
var modalNoButton = document.querySelector('.modal__action--negative')
var selectPlanButton = document.querySelectorAll('.plan button');

for( var i=0; i<selectPlanButton.length; i++)
{
    selectPlanButton[i].addEventListener('click', function()
    {
       model.style.display = 'block';
       backdrop.style.display = 'block';
    })
}

backdrop.addEventListener('click', closeModal);

modalNoButton.addEventListener("click", closeModal);

function closeModal()
{
    backdrop.style.display= 'none';
    model.style.display ='none';
}