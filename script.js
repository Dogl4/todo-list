const objEle = {
  botaoAdiciona: document.querySelector('#criar-tarefa'),
  inputAdiciona: document.querySelector('#texto-tarefa'),
  olLista: document.querySelector('#lista-tarefas'),
};

objEle.botaoAdiciona.addEventListener('click', () => {
  const li = document.createElement('li');
  li.innerHTML = objEle.inputAdiciona.value;
  objEle.olLista.appendChild(li);
  objEle.inputAdiciona.value = '';
});
