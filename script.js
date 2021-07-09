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
      e.target.style.backgroundColor = 'rgb(128,128,128)';
    });
  },
};

window.onload = () => {
  objFun.eventoAdicionaLista();
  objFun.eventoLiCor();
};
