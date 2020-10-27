var elAvatarInput = document.querySelector('#avatar-url');
var elInputs = document.querySelectorAll('input');
var elBio = document.querySelector('textarea');
var elForm = document.querySelector('form');
var elImage = document.querySelector('.avatar-placeholder');

function avatarInput() {
  elImage.src = elAvatarInput.value;
}

elAvatarInput.addEventListener('input', avatarInput);

function saveButton() {
  event.preventDefault();

  data.profile.avatarUrl = elInputs[0].value;
  data.profile.username = elInputs[1].value;
  data.profile.fullName = elInputs[2].value;
  data.profile.location = elInputs[3].value;
  data.profile.bio = elBio.value;

  elForm.reset();
  elImage.src = 'images/placeholder-image-square.jpg';
}

elForm.addEventListener('submit', saveButton);

window.addEventListener('beforeunload', function (event) {
  var dataJSON = JSON.stringify(data);
  localStorage.setItem('code-journal', dataJSON);
});
