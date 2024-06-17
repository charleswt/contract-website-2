const Email = require('../../../server/models/email');
const path = require('path')

const subBtn = document.querySelector('#subBtn');

subBtn.addEventListener('click',async()=>{
    const subInput = await document.querySelector('#subInput').value;

    const createEmail = await Email.create({ email: subInput});

    if(createEmail)console.log(createEmail);
})

console.log(path)