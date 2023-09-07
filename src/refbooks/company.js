const { ipcRenderer } = require('electron');


const dataToSend = {
  key1: 'value1',
  key2: 'value2',
  // Add other properties as needed
};



document.getElementById('sendCompany').addEventListener('click', () => {
  const companyName = document.getElementById('companyName').value;
  const companyEDRPOU = document.getElementById('companyEDRPOU').value;
  const companyAccount = document.getElementById('companyAccount').value;
  const companyPhone = document.getElementById('companyPhone').value;
  ipcRenderer.send('companyName', companyName);
  ipcRenderer.send('companyEDRPOU', companyEDRPOU);
  ipcRenderer.send('companyAccount', companyAccount);
  ipcRenderer.send('companyPhone', companyPhone);

  // Send the object to the main process
  ipcRenderer.send('object-to-server', dataToSend);
});



