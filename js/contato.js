var listElement = document.querySelector("#app ul");
var inputElement = document.querySelector("#app input");
var buttonElement = document.querySelector("#app button");
var buttonA = document.querySelector("#botaoa button");
var buttonB = document.querySelector("#botaob button");
var buttonC = document.querySelector("#botaoc button");
var inputA = document.querySelector("#b input");
var inputB = document.querySelector("#c input");
var inputC = document.querySelector("#a input");

var contatos = JSON.parse(localStorage.getItem('list_contatos')) || [];

  function renderContatos() {
     listElement.innerHTML ="";

    for(contato of contatos) {
        var contatoElement = document.createElement('li');
        var contatoText = document.createTextNode(contato);

        var linkElement = document.createElement('a');
        var linkText = document.createTextNode('Excluir');

        linkElement.appendChild(linkText);

        linkElement.setAttribute('href', '#');

        var pos = contatos.indexOf(contato);
        linkElement.setAttribute('onclick', 'deleteContato(' + pos +')');

        contatoElement.appendChild(contatoText);
        contatoElement.appendChild(linkElement);

        listElement.appendChild(contatoElement);
      }
  }

  renderContatos();

  function addContato(){
    var contatoText = inputElement.value;


    contatos.push(contatoText);
    inputElement.value = "";
    renderContatos();
    saveToStorage();

  };
  function addNumero(){
    var contatoNumero = inputA.value;


    contatos.push(contatoNumero);
    inputA.value = "";
    renderContatos();
    saveToStorage();

  };

  buttonElement.onclick = addContato;
  buttonA.onclick = addNumero;


  function deleteContato(pos) {
    contatos.splice(pos, 1);
    renderContatos();
    saveToStorage();
  }

  function saveToStorage() {
    localStorage.setItem('list_Contatos', JSON.stringify(contatos));
    
  }
  
