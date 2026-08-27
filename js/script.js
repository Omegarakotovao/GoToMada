const boutonMenu = document.querySelector(".menuBurger");// sélectionne le bouton burger dans le HTML et le stocke dans la variable boutonMenu
const listeMenu = document.querySelector("ul")// sélectionne le premier élément <ul> de la page et le stocke dans la variable listeMenu
boutonMenu.addEventListener( "click",() => {// ce code sera exécuté lorsque l'utilisateur cliquera sur le bouton
listeMenu.classList.toggle("menuOuvert"); // ajoute la classe "menuOuvert" si elle n'existe pas,
// et la retire si elle existe déjà
})