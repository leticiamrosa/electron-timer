const { app, BrowserWindow, ipcMain }  = require('electron');

// adiciona um evento para o app
app.on('ready', () => {
    console.log('Aplicacao iniciada');

    let mainWindow = new BrowserWindow({
        // obj de config;
        width: 600,
        height: 400,
    });

    // File Protocol (verificar a documentacao)
    // A variavel implicita __direname é responsavel por dizer que é o diretório atual.
    // Utilizamos o fire protocol, apontando o inicio como file://
    mainWindow.loadURL(`file://${__dirname}/app/index.html`);
});

let sobreWindow = null;

// IPC MAIN
ipcMain.on('abrir-janela-sobre', () => {
    if(sobreWindow == null) {
        sobreWindow = new BrowserWindow({
            width: 300,
            height: 200,
        });
        sobreWindow.on('closed', () => {
            sobreWindow = null;
        });
    }
    sobreWindow.loadURL(`file://${__dirname}/app/sobre.html`);
});

// Evento para quando todas as windows forem fechadas
// Esse evento é importante, pois diz ao nosso sistema operacional de uma maneira mais clara, 
// de que a aplicacao foi fechada corretamente.
app.on('window-all-closed', () => {
    app.quit();
});