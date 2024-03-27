//See more / see less"
document.addEventListener("DOMContentLoaded", function() {
    function toggleContent(detailElement, moreElement, additionalText) {
      var moreVisible = false;
      moreElement.addEventListener("click", function() {
        if (!moreVisible) {
          moreElement.textContent = "En voir -";
          detailElement.innerHTML = additionalText;
          moreVisible = true;
        } else {
          moreElement.textContent = "En voir +";
          detailElement.textContent = "";
          moreVisible = false;
        }
      });
    }
  
    var elements = [
      {detail: document.getElementById("detail-consulat"), more: document.getElementById("more-consulat"), additionalText: "Administration système informatique et sécurité<br>Traitement des cas consulaires<br>Supervision technique et contrats"},
      {detail: document.getElementById("detail-printemps"), more: document.getElementById("more-printemps"), additionalText: "Gestion des liquidités du magasin<br>Supervision de l’aspect “cash” des caisses du magasin"},
      {detail: document.getElementById("detail-interprox"), more: document.getElementById("more-interprox"), additionalText: "Suivi du processus de recrutement et gestion du personnel<br>Gestion du temps de travail et des absences<br>Présentation des résultats productifs aux responsables secteurs"},
      {detail: document.getElementById("detail-hasbro"), more: document.getElementById("more-hasbro"), additionalText: "Contrôle et exécution des paiements internationaux<br>Comptabilisation des paiements dans le registre journalier<br>Réconciliation des extraits de comptes bancaires"},
      {detail: document.getElementById("detail-ubs"), more: document.getElementById("more-ubs"), additionalText: "Conseil à la clientèle en matière d’épargne et de placement<br>Résolution des problématiques de traffic des paiements<br>Responsable de la gestion des liquidités (guichet et DAB)"},
      {detail: document.getElementById("detail-armee"), more: document.getElementById("more-armee"), additionalText: "Direction d’une équipe<br>Gestion budgétaire et comptable<br>Gestion des vivres de la compagnie"},
    ];

elements.forEach(function(item) {
    toggleContent(item.detail, item.more, item.additionalText);
    });
  });


//Go to another html page when clicking on a tag
document.addEventListener("DOMContentLoaded", function() {
  function onClick(tag, url) {
    tag.addEventListener("click", function() {
    window.location.href = url
    }
        )}

        var elements = [
            {tag: document.getElementById("graf"),url: "parcours_pro.html"},
            {tag: document.getElementById("methe"), url: "photos.html"},
            {tag: document.getElementById("roh"),url: "parcours_pro.html"},
            {tag: document.getElementById("gonzalez"), url: "parcours_pro.html"},
            ];
elements.forEach(function(item){
    onClick(item.tag, item.url)
    });
  });

// Index - change presentation-div
document.addEventListener("DOMContentLoaded", function() {
    const adminLink = document.getElementById("footer-admin");
    const itLink = document.getElementById("footer-it");
    const photoLink = document.getElementById("footer-photo");

    adminLink.addEventListener("click", function(event) {
        event.preventDefault();
        toggleActiveLink(adminLink);
        updatePresentation();
    });

    itLink.addEventListener("click", function(event) {
        event.preventDefault();
        toggleActiveLink(itLink);
        updatePresentation();
    });

    photoLink.addEventListener("click", function(event) {
        event.preventDefault();
        toggleActiveLink(photoLink);
        updatePresentation();
    });

    // activate or unactivate a link
    function toggleActiveLink(link) {
        if (link.classList.contains("active")) {
            link.classList.remove("active");
        } else {
            link.classList.add("active");
        }
    }

    function updatePresentation() {
        const presentation = document.getElementById("presentation");
        const adminButton = document.getElementById("footer-admin");
        const itButton = document.getElementById("footer-it");
        const photoButton = document.getElementById("footer-photo");

        const adminActive = adminLink.classList.contains("active");
        const itActive = itLink.classList.contains("active");
        const photoActive = photoLink.classList.contains("active");

        if (adminActive && itActive && photoActive){
            presentation.innerHTML = "Je saurai conjuger <span class=photo-text>créativité</span> et <span class=it-text>astuce</span> pour mettre en place <span class=admin-text>des solutions innovantes</span> répondant à vos besoins concrets";
            adminButton.style.backgroundColor = "#FF0000";
            adminButton.style.color = "#fff";
            itButton.style.backgroundColor = "#002CE0";
            itButton.style.color = "#fff";
            photoButton.style.backgroundColor = "#B700C5";
            photoButton.style.color = "#fff";
        }
        else if (adminActive && !itActive && !photoActive){
            presentation.innerHTML = "Ma longue expérience dans le monde de <span class=admin-text>l’administration bancaire et internationale</span> sera un atout indéniable dans vos projets";
            adminButton.style.backgroundColor = "#FF0000";
            adminButton.style.color = "#fff";
            itButton.style.backgroundColor = "#fff";
            itButton.style.color = "black";
            photoButton.style.backgroundColor = "#fff";
            photoButton.style.color = "black";
        }
        else if (adminActive && itActive && !photoActive){
            presentation.innerHTML = "Mes capacités <span class=it-text>d’automatisation et d’optimisation</span> permettront le traitement efficient de <span class=admin-text>vos démarches administratives</span>";
            adminButton.style.backgroundColor = "#FF0000";
            adminButton.style.color = "#fff";
            itButton.style.backgroundColor = "#002CE0";
            itButton.style.color = "#fff";
            photoButton.style.backgroundColor = "#fff";
            photoButton.style.color = "black";
        }
        else if (!adminActive && itActive && !photoActive){
            presentation.innerHTML = "Ma soif d’apprendre me permettra de m’adapter à tous vos projets <span class=it-text>(développement font-end web, création d’API, etc..)</span>";
            adminButton.style.backgroundColor = "#fff";
            adminButton.style.color = "black";
            itButton.style.backgroundColor = "#002CE0";
            itButton.style.color = "#fff";
            photoButton.style.backgroundColor = "#fff";
            photoButton.style.color = "black";
        }
        else if (!adminActive && itActive && photoActive){
            presentation.innerHTML = "Que serait <span class=it-text>un site web</span> sans <span class=photo-text>illustrations de qualité </span> ?<br> ... Me voilà pour répondre à ce besoin";
            adminButton.style.backgroundColor = "#fff";
            adminButton.style.color = "black";
            itButton.style.backgroundColor = "#002CE0";
            itButton.style.color = "#fff";
            photoButton.style.backgroundColor = "#B700C5";
            photoButton.style.color = "#fff";
        }
        else if (adminActive && !itActive && photoActive){
            presentation.innerHTML = "Avec <span class=photo-text>inventivité</span> je m'attaquerai à <span class=admin-text>vos défis administratifs !</span>";
            adminButton.style.backgroundColor = "#FF0000";
            adminButton.style.color = "#fff";
            itButton.style.backgroundColor = "#fff";
            itButton.style.color = "black";
            photoButton.style.backgroundColor = "#B700C5";
            photoButton.style.color = "#fff";
        }
        else if (!adminActive && !itActive && photoActive){
            presentation.innerHTML = "Tous <span class=photo-text>vos projets photos</span> ne sont qu'à quelques clics de se concrétiser";
            adminButton.style.backgroundColor = "#fff";
            adminButton.style.color = "black";
            itButton.style.backgroundColor = "#fff";
            itButton.style.color = "black";
            photoButton.style.backgroundColor = "#B700C5";
            photoButton.style.color = "#fff";
        }
        else if (!adminActive && !itActive && !photoActive){
            presentation.innerHTML = "Je suis polyvalent, rigoureux et créatif<br>100% made in Switzerland";
            adminButton.style.backgroundColor = "#fff";
            adminButton.style.color = "black";
            itButton.style.backgroundColor = "#fff";
            itButton.style.color = "black";
            photoButton.style.backgroundColor = "#fff";
            photoButton.style.color = "black";
        }
    }
});

//Download cv.pdf
document.addEventListener("DOMContentLoaded", function() {
    const downloadButton = document.getElementById("download-cv");

    downloadButton.addEventListener("click", function() {
        const link = document.createElement("a");
        link.href = "downloads/CV_Lobsiger_Jeremie.pdf"; 
        link.download = "Lobsiger_Jeremie.pdf";
        link.target = "_blank";

        document.body.appendChild(link);
        link.click();

        document.body.removeChild(link);
    });
});