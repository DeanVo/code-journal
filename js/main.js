var elAvatarInput = document.querySelector('#avatar-url');

function avatarInput() {
  var avatarImg = document.querySelector('.avatar-placeholder');
  avatarImg.src = elAvatarInput.value;
}

elAvatarInput.addEventListener('input', avatarInput);
