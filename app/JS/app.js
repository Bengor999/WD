'use strict';
/* -------------------------------------------------------------------------
   begin Video Youtube
 * ------------------------------------------------------------------------- */

function onYouTubePlayerAPIReady() {
  var playerYoutube;
  var viddd = document.getElementById ('video-youtube__content');
  var vid = viddd.dataset.video;

  playerYoutube = new YT.Player("video-youtube__content", {
    videoId: vid,
    playerVars: {
      // 'controls': 0,
      // 'showinfo': 0,
      // 'disablekb': 1
    },
    events: {
      onReady: onYouTubePlayerReady
    }
  });
}

function onYouTubePlayerReady(event) {
  // https://developers.google.com/youtube/iframe_api_reference#Events
  var targetYoutubeVideo = event.target;
  var videoDomElem = document.getElementById(
    event.target.getIframe().getAttribute("id")
  );
  var newPlayBtn = videoDomElem.nextElementSibling;

  newPlayBtn.addEventListener("click", function(event) {
    targetYoutubeVideo.playVideo();
    this.classList.add('hidden');
    videoDomElem.classList.remove('video-youtube__content_hide-origin-play-btn');
    videoDomElem.parentNode.classList.remove('video-youtube_overlay');
  });
}

var tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

/* -------------------------------------------------------------------------
   end Video Youtube
 * ------------------------------------------------------------------------- */



   /* Валидация форм  */

   //Существует много способов выбрать DOM узел; здесь мы получаем форму и электронную почту
//поле ввода, а также элемент span, в который мы поместим сообщение об ошибке.
var form  = document.getElementsByTagName('form')[0];
var email = document.getElementById('mail');
var errorEmail = document.querySelector('.errorEmail');
var userName = document.getElementById('Uname');
var errorUserName = document.querySelector('.errorUserName');
const EMAIL_REGEXP = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/iu;

function validateEmail(value) {
  return EMAIL_REGEXP.test(value);
  }


email.addEventListener("input", function (event) {
  // Каждый раз, когда пользователь вводит что-либо, мы проверяем,
   // является ли корректным поле электронной почты.
   if (validateEmail(email.value)) {
     // В случае появления сообщения об ошибке, если поле
     // является корректным, мы удаляем сообщение об ошибке.
     errorEmail.innerHTML = ""; // Сбросить содержимое сообщения
     errorEmail.className = "errorEmail"; // Сбросить визуальное состояние сообщения
   }
 }, false);
 form.addEventListener("submit", function (event) {
   // Каждый раз, когда пользователь пытается отправить данные, мы проверяем
    // валидность поля электронной почты.
   if (!userName.validity.valid) { 
    // Если поле невалидно, отображается пользовательское
    // сообщение об ошибке.
    errorUserName.innerHTML = "Заполни пустоту, будь котиком!";
    errorUserName.className = "errorUserName active";
    // И мы предотвращаем отправку формы путём отмены события
    event.preventDefault();
   }
  //  else if (!validateEmail(email.value)) {
 
  //   // Если поле невалидно, отображается пользовательское
  //   // сообщение об ошибке.
  //   errorEmail.innerHTML = "в Email надо @  и точку";
  //   errorEmail.className = "errorEmail active";
  //   // И мы предотвращаем отправку формы путём отмены события
  //   event.preventDefault();
  // }
   
 }, false);

 userName.addEventListener("input", function (event) {
  // Каждый раз, когда пользователь вводит что-либо, мы проверяем,
   // является ли корректным поле электронной почты.
   if (userName.validity.valid) {
     // В случае появления сообщения об ошибке, если поле
     // является корректным, мы удаляем сообщение об ошибке.
     errorUserName.innerHTML = ""; // Сбросить содержимое сообщения
     errorUserName.className = "errorUserName"; // Сбросить визуальное состояние сообщения
   }
 }, false);

 form.addEventListener("submit", function (event) {
   // Каждый раз, когда пользователь пытается отправить данные, мы проверяем
    // валидность поля электронной почты.
   if (!validateEmail(email.value)) {
 
    // Если поле невалидно, отображается пользовательское
    // сообщение об ошибке.
    errorEmail.innerHTML = "в Email надо @  и точку";
    errorEmail.className = "errorEmail active";
    // И мы предотвращаем отправку формы путём отмены события
    event.preventDefault();
   }
 }, false);
 
 


//  Бургер меню

$(document).ready(function() {
  $('.menu-burger__header').click(function() {
      $('.menu-burger__header').toggleClass('open-menu');
      $('.firstScreen_nav_right').toggleClass('open-menu');
      $('body').toggleClass('fixed-page');
  });
});