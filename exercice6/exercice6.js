var todolist = document.getElementById("todolist");
var template = document.getElementById("Tache");

function Ajouter2(){
    let inputTache = document.getElementById("myInput");
    if(inputTache.value != ""){ //Si l'element qu'on veut ajouter n'est pas une chaine vide
        let clone = document.importNode(template.content, true);  
        newContent = clone.firstElementChild.innerHTML.replace(/{{item}}/g,inputTache.value)
        clone.firstElementChild.innerHTML = newContent 
        
        if(todolist.lastElementChild != null){ //Si la liste n'est pas vide
            if(todolist.lastElementChild.classList.contains("li1")){ //Si le dernier element de la liste a le style "li1"
                clone.firstElementChild.classList.replace("li1","li2"); //Alors on definit a celui qu'on ajoute le style "li2"
            }
        }
        
        todolist.appendChild(clone); //On ajoute le nouvel element
    }

    inputTache.value = ""; //On reset la zone de texte
}

function Supprimer2(){
    if(todolist.lastElementChild){ //Si il y a des elements dans la TODO list 
        todolist.removeChild(todolist.lastElementChild); //On supprime le dernier
    }
}