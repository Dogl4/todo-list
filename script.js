const objEle = { // Objeto Elementos globais (fixos).
  botaoAdiciona: document.querySelector('#criar-tarefa'),
  inputAdiciona: document.querySelector('#texto-tarefa'),
  olLista: document.querySelector('#lista-tarefas'),
  botaoApagaAll: document.querySelector('#apaga-tudo'),
  botaoDeleteCheck: document.querySelector('#remover-finalizados'),
  botaoSalvaLista: document.querySelector('#salvar-tarefas'),
  botaoCima: document.querySelector('#mover-cima'),
  botaoBaixo: document.querySelector('#mover-baixo'),
  botaoDel: document.querySelector('#remover-selecionado'),
};

const objFun = { // Objeto Funções
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
  salvarTarefas: function salvaLista() { // Salva lista localStorage(chave: value);
    objEle.botaoSalvaLista.addEventListener('click', () => {
      localStorage.setItem(1, objEle.olLista.innerHTML);
    });
  },
  recuperaTarefas: function voltaLista() { //  Recupera lista salva
    objEle.olLista.innerHTML = localStorage.getItem(1);
  },
  moveCima: function cima() { // Move Cima
    objEle.botaoCima.addEventListener('click', () => {
      const itemSelecionado = document.querySelector('#selected');
      if (itemSelecionado && itemSelecionado.previousSibling) {
        objEle.olLista.insertBefore(itemSelecionado, itemSelecionado.previousSibling); // ol.troca(nóAgora,intem.nóAnterior)
      }
    });
  }, // Referencias <https://www.w3schools.com/jsref/met_node_insertbefore.asp | https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore>
  moveBaixo: function baixo() { // Move Baixo
    objEle.botaoBaixo.addEventListener('click', () => {
      const itemSelecionado = document.querySelector('#selected');
      if (itemSelecionado && itemSelecionado.nextSibling) {
        objEle.olLista.insertBefore(itemSelecionado.nextSibling, itemSelecionado); // ol.troca(intem.nextNó,nóAgora)
      }
    });
  },
  deletaSelecionado: function deletaSelecionadoUnico() { // Evento item selecionado deleta
    objEle.botaoDel.addEventListener('click', () => {
      const del = document.getElementById('selected');
      if (del !== null) {
        del.parentElement.removeChild(document.getElementById('selected'));
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
  objFun.salvarTarefas();
  objFun.recuperaTarefas();
  objFun.deletaSelecionado();
  objFun.moveCima();
  objFun.moveBaixo();
};
