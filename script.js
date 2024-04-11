let posts = [
  {
    'author': 'Visit Scotland',
    'image': './img/schottland.jpg',
    'location': 'Edinburgh, Schottland',
    'description': '🏴󠁧󠁢󠁳󠁣󠁴󠁿 Tauche ein in die Magie Schottlands und entdecke mit uns die zehn atemberaubendsten Orte! 🏞️ Von den majestätischen Highlands bis zu den historischen Schlössern – hier gibt es so viel zu erkunden. 🏰 Lass dich von der Schönheit der Natur verzaubern und erlebe den Charme Schottlands. 🌿🏔️ Welcher Ort steht auf deiner Bucket List? Teile deine Lieblingsplätze mit uns! 🗺️✨ #SchottlandEntdecken #MagischesSchottland #Reiselust #Abenteuerzeit 🌍🏴󠁧󠁢󠁳󠁣󠁴󠁿',
    'comments': [],
    'Likes': 156,
    'Liked': false,
  },
  {
    'author': 'Miriam Fuchs',
    'image': './img/cooking.jpg',
    'location': 'Taunusstein, Deutschland',
    'description': '🌍🥟 Entdecke die Welt der Geschmäcker mit unseren einfachen Teigtaschen! 🍽️ Wenig Aufwand, viel Genuss - genau das Richtige für deine kulinarische Reise. 😋🌮 Tauche ein in die Aromen dieser köstlichen Kreation und zeig uns deine Meisterwerke mit dem Hashtag #Kochzauber. 🌈👩‍🍳 Probiere es aus und erlebe den Geschmack der Welt in einem Bissen! 🌐✨ #TeigtaschenLiebe #KulinarischeReise #EinfachKochen #Genussmomente',
    'comments': [],
    'Likes': 375,
    'Liked': false,
  },
  {
    'author': 'Tarou Yamada',
    'image': './img/zeitung.jpg',
    'location': 'Frankfurt, Deutschland',
    'description': '📰✨ Gute Nachrichten! Eine aktuelle Studie enthüllt, dass immer mehr Menschen wieder zur Tageszeitung greifen. 🗞️📈 Die Freude über gedruckte Nachrichten ist im Aufwind! 🌐🤩 In einer digitalen Welt setzen viele auf das authentische Erlebnis von Papier. 📚🔍 Teile uns mit, warum auch du die Tageszeitung liebst und markiere Freunde, die ebenfalls zu Team Print gehören! 🗞️❤️ #PrintLiebe #Tageszeitung #NachrichtenGenuss #Studie #PrintIstNichtTot',
    'comments': [],
    'Likes': 69,
    'Liked': false,
  },
  {
    'author': 'Vogelschutzverein Musterstadt',
    'image': './img/birdFeeder.jpg',
    'location': 'Musterstadt, Deutschland',
    'description': '🐦❄️ Mach mit beim Vogelschutz in der Winterzeit! 🍂🍪 Entdecke, wie du gefiederten Freunden mit leckeren Snacks durch die kalte Jahreszeit helfen kannst. 🌰🕊️ Baue deine eigene Vogelfutterstation und teile deine kreativen Ideen mit dem Hashtag #Vogelgenuss. 🏡🌳 Jeder Beitrag zählt! Lass uns gemeinsam dafür sorgen, dass unsere gefiederten Nachbarn gut versorgt sind. 🙌🐤 #Vogelschutz #WinterSnacks #Naturliebe #GemeinsamFürDieNatur',
    'comments': [],
    'Likes': 333,
    'Liked': false,
  },
  {
    'author': 'Kleinkunstverein Wiesbaden',
    'image': './img/saxophon.jpg',
    'location': 'Wiesbaden, Deutschland',
    'description': '🎷🎶 Save the date! 🗓️ Candy Dulfer kommt im April für ein atemberaubendes Konzert nach Deutschland! 🇩🇪🌟 Erlebe die einzigartige Saxophon-Künstlerin live und tauche ein in die Welt ihrer mitreißenden Musik. 🎵🎤 Sichere dir jetzt deine Tickets und lass uns gemeinsam einen unvergesslichen Abend erleben! 🎟️🤩 Wer ist noch dabei? Markiere deine Konzertbegleitung und verbreite die Vorfreude! 🙌🎉 #CandyDulferLive #Konzertfreude #Musikgenuss #SaveTheDate',
    'comments': [],
    'Likes': 7,
    'Liked': false,
  },
  {
    'author': 'Smart & Fit',
    'image': './img/sport.jpg',
    'location': 'New York, USA',
    'description': '🏋️‍♂️💪 Besiege deinen inneren Schweinehund und erreiche deine Ziele mit diesen Tipps: Klare Ziele setzen 🎯, Selbstmotivation finden 🌈, Tagesplan erstellen 🗓️, Spaß an der Aktivität haben 🤸‍♀️, dich selbst belohnen 🎁, Unterstützung suchen 🤝. Du schaffst das! 💪🚀 #InnererSchweinehund #ZieleErreichen #Motivation',
    'comments': [],
    'Likes': 99,
    'Liked': false,
  }
];


document.addEventListener('DOMContentLoaded', function() {
  loadComments();
});



function show() {
  document.getElementById('postContainer').innerHTML = ``;

  for (let i = 0; i < posts.length; i++) {
    let post = posts[i];

    let postDiv = document.createElement('div');
    postDiv.classList.add('post');
    postDiv.innerHTML = `
        <div class="postHeader">
          <div class="postHeaderItem"><b>${post['author']}</b></div>
          <div class="postHeaderItem recText">${post['location']}</div>
        </div>
        <img class="postImages" src="${post['image']}">
        
        <div class="likeSection">
        <div class="heart" onclick="imageChange(${i})" id="likeImage${i}">${post.Liked ? '❤️' : '🤍'}</div>
        <div class="likeText">
            <span>Gefällt&nbsp;</span>
            <span class="likeCounter" id="likeCounter${i}">${post.Likes > 0 ? post.Likes : ''}</span>
            <span>&nbsp;Mal</span>
        </div>
        </div>
      
        <div class="postDescription">${post['description']}</div>
        <div id="commentContainer${i}"></div>
        <form onsubmit="addComment(${i}); return false;">
          <div class="commentBox">
            <input required type="text" id="input${i}" placeholder="Kommentar hinzufügen ...">
            <button type="submit">Posten</button>
          </div>
        </form>
      `;
    document.getElementById('postContainer').appendChild(postDiv);
    showComment(i);
  }
}


function imageChange(i) {
  let post = posts[i];
  let imageElement = document.getElementById(`likeImage${i}`);
  let counterElement = document.getElementById(`likeCounter${i}`);

  if (post.Liked) {
    post.Liked = false;
    post.Likes -= 1;
  } else {
    post.Liked = true;
    post.Likes += 1;
  }

  imageElement.innerHTML = post.Liked ? '❤️' : '🤍';
  counterElement.textContent = post.Likes > 0 ? post.Likes : '';
  saveArrayToLocalStorage('posts', posts);
}



function addComment(i) {
  let comment = document.getElementById(`input${i}`).value;
  posts[i].comments.push(comment);
  saveArrayToLocalStorage('posts', posts);
  showComment(i);
  document.getElementById(`input${i}`).value = '';
}


function showComment(i) {
  let commentContainer = document.getElementById(`commentContainer${i}`);
  commentContainer.innerHTML = '';
  for (let j = 0; j < posts[i].comments.length; j++) {
    let newCommentDiv = document.createElement('div');
    newCommentDiv.innerHTML = `<div class="commentContainer">${posts[i].comments[j]} <a class="deleteButton" href="#" onclick="deleteComment(${i}, ${j}, event)">X</a></div>`;
    commentContainer.appendChild(newCommentDiv);
  }
}


function deleteComment(i, j, event) {
  event.preventDefault();
  posts[i].comments.splice(j, 1);
  saveArrayToLocalStorage('posts', posts);
  showComment(i);
}


function saveArrayToLocalStorage(key, array) {
  localStorage.setItem(key, JSON.stringify(array));
}


function getArray(key) {
  return JSON.parse(localStorage.getItem(key));
}


function loadComments() {
  let storedPosts = getArray('posts');
  if (storedPosts) {
    posts = storedPosts;
  }
  show();
}
