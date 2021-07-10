const objEle = { // Elementos fixos
  botaoAdiciona: document.querySelector('#criar-tarefa'),
  inputAdiciona: document.querySelector('#texto-tarefa'),
  olLista: document.querySelector('#lista-tarefas'),
  botaoApagaAll: document.querySelector('#apaga-tudo'),
  botaoDeleteCheck: document.querySelector('#remover-finalizados'),
};

const objFun = { // Funções
  eventoAdicionaLista: function adiciona() { // Evento adiciona li
    objEle.botaoAdiciona.addEventListener('click', () => {
      const li = document.createElement('li');
      li.innerHTML = objEle.inputAdiciona.value;
      objEle.olLista.appendChild(li);
      objEle.inputAdiciona.value = '';
    });
  },
  eventoLiCor: function eventoCor() { // Evento colocar cor cinza da lista um de cada vez
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
  riscaLista: function clickaDuasVezesRisca() { // Evento riscas itens c/ dblclick
    objEle.olLista.addEventListener('dblclick', (e) => {
      e.target.classList.toggle('completed');
    });
  }, // Referencias <https://dom.spec.whatwg.org/#ref-for-dom-element-getattribute%E2%91%A0 | https://developer.mozilla.org/pt-BR/docs/Web/API/Element/classList>
  apagaTudo: function clickarApagaAll() { // Evento apaga lista
    objEle.botaoApagaAll.addEventListener('click', () => {
      objEle.olLista.innerHTML = '';
    });
  },
  apagaRiscados: function deleteAllCheck() { // Evento apaga os checks
    objEle.botaoDeleteCheck.addEventListener('click', () => {
      const checks = document.getElementsByClassName('completed');
      while (checks.length > 0) {
        checks[0].parentElement.removeChild(checks[0]); // Função Milagroza, Salve Grod! (acessa 1° filho, o pai, função remove(1° filho));
      }
    });
  },
};

// objEle.olLista.removeChild(objEle.olLista.firstChild);

window.onload = () => {
  objFun.eventoAdicionaLista();
  objFun.eventoLiCor();
  objFun.riscaLista();
  objFun.apagaTudo();
  objFun.apagaRiscados();
};
