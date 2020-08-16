function submitform() {
    let readUsername = document.querySelector("#usernameId").value;

    let readPassword = document.querySelector("#passwordId").value;

    let clonedElement = document.querySelector("#refRow").cloneNode(true);
    clonedElement.children[0].innerHTML = readUsername;
    clonedElement.children[1].innerHTML = readPassword;
    //clonedElement.style.visibility = "visible";


    let chatArea = document.querySelector("#chatbox");

    chatArea.appendChild("clonedElement");
    chatArea.insertBefore(clonedElement, firstElementchildren);


    document.querySelector("#usernameId").value = "";
    document.querySelector("#passwordId").value = "";
}
//refRow--clone ref{child1-usernamw child2--pswrd}
//chatarea-ref{child1-usernamw child2--pswrd}