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
  viewSwapper('profile');
}

elForm.addEventListener('submit', saveButton);

window.addEventListener('beforeunload', function (event) {
  var dataJSON = JSON.stringify(data);
  localStorage.setItem('code-journal', dataJSON);
});

function renderProfileData() {
  var newProfile = document.createElement('div');

  var newContainer = document.createElement('div');
  var newProfileHeader = document.createElement('h1');
  var newRow = document.createElement('div');
  var newColumn = document.createElement('div');
  var newImageContainer = document.createElement('div');
  var newImage = document.createElement('img');
  var newColumn2 = document.createElement('div');
  var newProfileContainer = document.createElement('div');
  var newProfileName = document.createElement('div');
  var newIconName = document.createElement('i');
  var newUsername = document.createElement('div');
  var newProfileLocationContainer = document.createElement('div');
  var newIconLocation = document.createElement('i');
  var newLocation = document.createElement('div');
  var newProfileBioContainer = document.createElement('div');
  var newBio = document.createElement('div');
  var newButton = document.createElement('a');
  var newProfileButton = document.createElement('a');

  newContainer.setAttribute('class', 'container');
  newProfileHeader.setAttribute('class', 'profile-header');
  newRow.setAttribute('class', 'row');
  newColumn.setAttribute('class', 'column-half');
  newImageContainer.setAttribute('class', 'image-container');
  newImage.setAttribute('class', 'avatar');
  newImage.setAttribute('src', data.profile.avatarUrl);
  newImage.setAttribute('alt', 'avatar picture');
  newColumn2.setAttribute('class', 'column-half');
  newProfileContainer.setAttribute('class', 'profile-container');
  newProfileName.setAttribute('class', 'profile-name-container');
  newIconName.setAttribute('class', 'fas fa-user');
  newUsername.setAttribute('class', 'profile-name');
  newProfileLocationContainer.setAttribute('class', 'profile-location-container');
  newIconLocation.setAttribute('class', 'fas fa-map-marker-alt');
  newLocation.setAttribute('class', 'profile-location');
  newProfileBioContainer.setAttribute('class', 'profile-bio-container');
  newBio.setAttribute('class', 'profile-bio');
  newButton.setAttribute('class', 'edit-button');
  newButton.setAttribute('href', '#');
  newButton.setAttribute('data-view', 'edit-profile');
  newProfileButton.setAttribute('href', '#');
  newProfileButton.setAttribute('data-view', 'profile');

  newProfileHeader.textContent = data.profile.fullName;
  newUsername.textContent = data.profile.username;
  newLocation.textContent = data.profile.location;
  newBio.textContent = data.profile.bio;
  newButton.textContent = 'EDIT';

  newProfile.appendChild(newContainer);

  newContainer.appendChild(newProfileHeader);
  newContainer.appendChild(newRow);

  newRow.appendChild(newColumn);
  newColumn.appendChild(newImageContainer);
  newImageContainer.appendChild(newImage);

  newRow.appendChild(newColumn2);
  newColumn2.appendChild(newProfileContainer);
  newProfileContainer.appendChild(newProfileName);
  newProfileName.appendChild(newIconName);
  newProfileName.appendChild(newUsername);
  newProfileContainer.appendChild(newProfileLocationContainer);
  newProfileLocationContainer.appendChild(newIconLocation);
  newProfileLocationContainer.appendChild(newLocation);
  newProfileContainer.appendChild(newProfileBioContainer);
  newProfileBioContainer.appendChild(newBio);

  newProfileContainer.appendChild(newButton);

  return newProfile;
}

var viewList = document.querySelectorAll('div[data-view]');
var profileDiv = document.querySelector('div[data-view="profile"');

function viewSwapper(dataView) {
  for (var i = 0; i < viewList.length; i++) {
    if (viewList[i].getAttribute('data-view') !== dataView) {
      viewList[i].className = 'hidden';
    } else {
      viewList[i].className = '';
    }
  }
  data.view = dataView;
  if (data.view === 'profile') {
    profileDiv.innerHTML = '';
    profileDiv.appendChild(renderProfileData(data));
  }

  if (data.view === 'edit-profile') {
    elImage.src = data.profile.avatarUrl;
    elInputs[0].value = data.profile.avatarUrl;
    elInputs[1].value = data.profile.username;
    elInputs[2].value = data.profile.fullName;
    elInputs[3].value = data.profile.location;
    elBio.value = data.profile.bio;
  }

  if (data.profile.avatarUrl === '') {
    elImage.src = 'images/placeholder-image-square.jpg';
  }
}

document.addEventListener('DOMContentLoaded', function (event) {
  var previousProfile = localStorage.getItem('code-journal');

  if (previousProfile !== null) {
    data = JSON.parse(previousProfile);
  }

  if (data.profile.username === '') {
    viewSwapper('edit-profile');
  } else {
    viewSwapper(data.view);
  }
});

function clickEdit() {
  if (event.target.tagName === 'A') {
    viewSwapper(event.target.getAttribute('data-view'));
  } else {
    return false;
  }
  if (data.profile.username === '') {
    viewSwapper('edit-profile');
  }
}

document.addEventListener('click', clickEdit);
