// Your code goes here
let input = document.querySelector('input');
let button = document.querySelector('button');
let section = document.querySelector('.detail_information');
let img = document.querySelector('img');
let a = document.querySelector('a');
let displayImg = document.querySelector('.display_img');
let displayName = document.querySelector('#name');
let displayUserName = document.querySelector("#username")
let displayPlace = document.querySelector("#place");
let displayBio = document.querySelector('#bio')
let displayFollowers = document.querySelector('#followers');
let displayFollowing = document.querySelector('#following');
let displayRepo = document.querySelector('#repo');
let listOfRepos = document.querySelector('ul');

img.style.boxShadow = "none";
section.style.opacity = 0;

function takeInput(event) {
  if (event.key == "Enter") {
    fetchData('https://api.github.com/users/' + event.target.value);
    input.value = '';
  }
  return;
}

function fetchData(Url) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', Url);
  xhr.responseType = 'json';
  xhr.send();
  xhr.onload = () => {
    if (xhr.status == 200) {
      createUserObject(xhr.response);
    } else {
      a.textContent = 'invalid user';
    }
  }
}

function createUserObject(user) {
  const xhr_repo = new XMLHttpRequest();
  xhr_repo.open('GET', 'https://api.github.com/users/' + user.login + '/repos');
  xhr_repo.responseType = 'json';
  xhr_repo.send();
  xhr_repo.onload = () => {
    user.repositories = xhr_repo.response
    display(user);
  }
}

function display(userInfo) {
  section.style.opacity = 1;
  img.style.boxShadow = "-2px 2px 8px 2px rgba(0, 0, 0, 0.75);";
  img.src = userInfo.avatar_url
  a.href = userInfo.html_url
  a.text = userInfo.name;

  displayImg.src = userInfo.avatar_url;
  displayName.textContent = "name :" + userInfo.name;
  displayUserName.textContent = "username :" + userInfo.login;
  displayPlace.textContent = "location :" + userInfo.location;
  displayBio.textContent = "bio :" + userInfo.bio;
  displayFollowers.textContent = "followers :" + userInfo.followers;
  displayFollowing.textContent = "following :" + userInfo.following;
  displayRepo.textContent = "repositories :" + userInfo.public_repos;


  listOfRepos.innerHTML = "";
  for (let i = 0; i < userInfo.repositories.length; i++) {
    let li = document.createElement('li')
    li.textContent = i + 1 + ". " + userInfo.repositories[i].name + " (" + userInfo.repositories[i].language + " )";
    listOfRepos.appendChild(li);
  }
}


input.addEventListener('keydown', takeInput);
button.addEventListener('click', takeInput);