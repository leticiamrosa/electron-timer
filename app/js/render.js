console.log('O render esta ativo');
// Importa a lib de IPC (Inter-Process Communication)
const { ipcRenderer } = require('electron');


let linkSobre = document.querySelector('#link-sobre');

linkSobre.addEventListener('click', function() {
    ipcRenderer.send('abrir-janela-sobre')
});