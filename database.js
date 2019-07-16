const lista = document.getElementById('lista')
const razaoNome = document.getElementById('razao_nome')
const data = document.getElementById('data')
const addButton = document.getElementById('addButton')
const db = firebase.database();
const gerarPdf = document.getElementById('gerarPdf')


addButton.addEventListener('click',function() {
    create(razaoNome.value,data.value)
    
});

function create(nome,data) {
    var dados = {
        nome: nome,
        data: data
    };
    return db.ref('/dados').push(dados)
}

db.ref('/dados').once('value', function(snapshot) {
    snapshot.forEach(function(item) {
      var childKey = item.key;
      var li = document.createElement('li');
      li.textContent = item.val().nome;
      lista.appendChild(li)
      
    });
  });

window.onload = function() {
    document.getElementById('file').addEventListener('change', handleFileSelect, false);
    document.getElementById('file').disabled = true;
}