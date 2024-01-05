const { electron } = window;

const dataToSend = {
  key1: 'value1',
  key2: 'value2',
  // Add other properties as needed
};




const saveData = (company) => {
  console.log(company);
}


document.getElementById('saveCompany').addEventListener('click', () => {
  const company = {
    companyName: document.getElementById('companyName').value,
    companyEDRPOU: document.getElementById('companyEDRPOU').value,
    companyAccount: document.getElementById('companyAccount').value,
    companyPhone: document.getElementById('companyPhone').value,
  }
  //saveData(company);
  console.log(company);

  /*
  const companyName = document.getElementById('companyName').value;
  const companyEDRPOU = document.getElementById('companyEDRPOU').value;
  const companyAccount = document.getElementById('companyAccount').value;
  const companyPhone = document.getElementById('companyPhone').value;
  ipcRenderer.send('companyName', companyName);
  ipcRenderer.send('companyEDRPOU', companyEDRPOU);
  ipcRenderer.send('companyAccount', companyAccount);
  ipcRenderer.send('companyPhone', companyPhone);

  // Send the object to the main process
  ipcRenderer.send('object-to-server', dataToSend);*/
});

