const objEle = {
  botaoAdiciona: document.querySelector('#criar-tarefa'),
  inputAdiciona: document.querySelector('#texto-tarefa'),
  olLista: document.querySelector('#lista-tarefas'),
};

const objFun = {
  eventoAdicionaLista: function adiciona() {
    objEle.botaoAdiciona.addEventListener('click', () => { // Evento adiciona
      const li = document.createElement('li');
      li.innerHTML = objEle.inputAdiciona.value;
      objEle.olLista.appendChild(li);
      objEle.inputAdiciona.value = '';
    });
  },
  eventoLiCor: function eventoCor() {
    objEle.olLista.addEventListener('click', (e) => {
      const lista = document.querySelectorAll('li');
      for (let i = 0; i < lista.length; i += 1) {
        lista[i].id = '';
      }
      e.target.id = 'selected';
      const antigoSele = document.querySelector('#selected');
      if (e.target !== antigoSele) {
        if (e.target !== antigoSele) {
          e.target.id = 'selected';
        }
        antigoSele.id = '';
      }
    });
  },
};

window.onload = () => {
  objFun.eventoAdicionaLista();
  objFun.eventoLiCor();
};
