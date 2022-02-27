
function Popup () {
    var nom = document.getElementById("Prenom").value;
    var prenom = document.getElementById("Nom").value;

    var d = new Date();
    let date= d.getDate() +'/'+(d.getMonth()+1)+'/'+ d.getFullYear();
    let heure = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();

    if (prenom==null || prenom=="" || nom==null || nom=="") {
        alert ("Veillez entrer un nom et un prenom avant de cliquer sur le bouton");
    }
    
    else {
        alert("Bonjour " + nom + ", " + prenom + "! Nous sommes le " + date + " et il est " + heure);
    }


    

    

}

