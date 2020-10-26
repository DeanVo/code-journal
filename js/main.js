var elAvatarInput = document.querySelector('#avatar-url');
var elSave = document.querySelector('#save-button');
var elInputs = document.querySelectorAll('input');
var elBio = document.querySelector('textarea');

function avatarInput() {
  var avatarImg = document.querySelector('.avatar-placeholder');
  avatarImg.src = elAvatarInput.value;
}

elAvatarInput.addEventListener('input', avatarInput);

function saveButton() {
  data.profile.avatarUrl = elInputs[0].value;
  data.profile.username = elInputs[1].value;
  data.profile.fullName = elInputs[2].value;
  data.profile.location = elInputs[3].value;
  data.profile.bio = elBio.value;
}

elSave.addEventListener('click', saveButton);
