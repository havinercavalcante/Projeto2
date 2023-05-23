var addressOptionSelect = document.getElementById('addressOption');
var otherAddressContainer = document.getElementById('otherAddressContainer');
var otherAddressInput = document.getElementById('otherAddress');

addressOptionSelect.addEventListener('change', function() {
    if (addressOptionSelect.value === '2') {
        otherAddressContainer.style.display = 'block';
        otherAddressInput.style.width = '100%';
    } else {
        otherAddressContainer.style.display = 'none';
        otherAddressInput.style.width = '';
    }
});

const contrafeOption = document.getElementById('contrafeOption');
const clienteCelularFields = document.getElementById('clienteCelularFields');

contrafeOption.addEventListener('change', function() {
    if (contrafeOption.value === 'aceitou') {
    clienteCelularFields.style.display = 'block';
    } else {
    clienteCelularFields.style.display = 'none';
    }
});


function validateForm() {
    var isValid = true;

    // Validação do campo "Número do processo"
    var processNumberInput = document.getElementById('processNumber');
    var processNumberError = document.getElementById('processNumberError');
    if (!processNumberInput.checkValidity()) {
        processNumberInput.classList.add('invalid');
        processNumberError.textContent = processNumberInput.validationMessage;
        isValid = false;
    } else {
        processNumberInput.classList.remove('invalid');
        processNumberError.textContent = '';
    }

    // Validação do campo "Número do ID"
    var idNumberInput = document.getElementById('idNumber');
    var idNumberError = document.getElementById('idNumberError');
    if (!idNumberInput.checkValidity()) {
        idNumberInput.classList.add('invalid');
        idNumberError.textContent = idNumberInput.validationMessage;
        isValid = false;
    } else {
        idNumberInput.classList.remove('invalid');
        idNumberError.textContent = '';
    }

    // Validação do campo "Local/Endereço de Cumprimento"
    var addressOptionSelect = document.getElementById('addressOption');
    var addressError = document.getElementById('addressError');
    if (!addressOptionSelect.checkValidity()) {
        addressOptionSelect.classList.add('invalid');
        addressError.textContent = addressOptionSelect.validationMessage;
        isValid = false;
    } else {
        addressOptionSelect.classList.remove('invalid');
        addressError.textContent = '';
    }

    // Validação do campo "Data da diligência"
    var diligenceDateInput = document.getElementById('diligenceDate');
    var diligenceDateError = document.getElementById('diligenceDateError');
    if (!diligenceDateInput.checkValidity()) {
        diligenceDateInput.classList.add('invalid');
        diligenceDateError.textContent = diligenceDateInput.validationMessage;
        isValid = false;
    } else {
        diligenceDateInput.classList.remove('invalid');
        diligenceDateError.textContent = '';
    }

    // Validação do campo "Horário da diligência"
    var diligenceTimeInput = document.getElementById('diligenceTime');
    var diligenceTimeError = document.getElementById('diligenceTimeError');
    if (!diligenceTimeInput.checkValidity()) {
        diligenceTimeInput.classList.add('invalid');
        diligenceTimeError.textContent = diligenceTimeInput.validationMessage;
        isValid = false;
    } else {
        diligenceTimeInput.classList.remove('invalid');
        diligenceTimeError.textContent = '';
    }

    // Validação do campo "Tipo de Diligência"
    var diligenceTypeSelect = document.getElementById('diligenceType');
    var diligenceTypeError = document.getElementById('diligenceTypeError');
    if (!diligenceTypeSelect.checkValidity()) {
        diligenceTypeSelect.classList.add('invalid');
        diligenceTypeError.textContent = diligenceTypeSelect.validationMessage;
        isValid = false;
    } else {
        diligenceTypeSelect.classList.remove('invalid');
        diligenceTypeError.textContent = '';
    }

    // Validação do campo "Nome do destinatário"
    var recipientNameInput = document.getElementById('recipientName');
    var recipientNameError = document.getElementById('recipientNameError');
    if (!recipientNameInput.checkValidity()) {
        recipientNameInput.classList.add('invalid');
        recipientNameError.textContent = recipientNameInput.validationMessage;
        isValid = false;
    } else {
        recipientNameInput.classList.remove('invalid');
        recipientNameError.textContent = '';
    }

    // Validação do campo "CONTRAFÉ"
        // Validação do campo "CONTRAFÉ"
    var contrafeOptionSelect = document.getElementById('contrafeOption');
    var contrafeOptionError = document.getElementById('contrafeOptionError');
    if (!contrafeOptionSelect.checkValidity()) {
        contrafeOptionSelect.classList.add('invalid');
        contrafeOptionError.textContent = contrafeOptionSelect.validationMessage;
        isValid = false;
    } else {
        contrafeOptionSelect.classList.remove('invalid');
        contrafeOptionError.textContent = '';
    }

    // Validação dos campos "Cliente" e "Celular"
    var clienteInput = document.getElementById('cliente');
    var celularInput = document.getElementById('celular');
    var clienteCelularError = document.getElementById('clienteCelularError');

    if (clienteInput.value.trim() !== '' && celularInput.value.trim() === '') {
        clienteInput.classList.add('invalid');
        celularInput.classList.add('invalid');
        clienteCelularError.textContent = 'Por favor, preencha o número de celular';
        isValid = false;
    } else {
        clienteInput.classList.remove('invalid');
        celularInput.classList.remove('invalid');
        clienteCelularError.textContent = '';
    }

    // Validação do campo "Documentos adicionais"
    var additionalDocumentsInput = document.getElementById('additionalDocuments');
    var additionalDocumentsError = document.getElementById('additionalDocumentsError');
    if (additionalDocumentsInput.files.length > 0) {
        // Se foram selecionados documentos adicionais
        // Realize a validação dos documentos, se necessário
        // ...
    } else {
        // Caso contrário, não há necessidade de validação
        additionalDocumentsInput.classList.remove('invalid');
        additionalDocumentsError.textContent = '';
    }

    return isValid;
}

function clearFields() {
    var form = document.querySelector('form');
    form.reset();
}

function clearFields() {
    document.getElementById('processNumber').value = '';
    document.getElementById('idNumber').value = '';
    document.getElementById('addressOption').value = '';
    document.getElementById('otherAddress').value = '';
    document.getElementById('diligenceDate').value = '';
    document.getElementById('diligenceTime').value = '';
    document.getElementById('diligenceType').value = '';
    document.getElementById('recipientName').value = '';
    document.getElementById('contrafeOption').value = '';
    document.getElementById('cliente').value = '';
    document.getElementById('celular').value = '';
    document.getElementById('additionalDocuments').value = '';
    
    // Limpar mensagens de erro
    document.getElementById('processNumberError').textContent = '';
    document.getElementById('idNumberError').textContent = '';
    document.getElementById('addressError').textContent = '';
    document.getElementById('diligenceDateError').textContent = '';
    document.getElementById('diligenceTimeError').textContent = '';
    document.getElementById('diligenceTypeError').textContent = '';
    document.getElementById('recipientNameError').textContent = '';
    document.getElementById('contrafeOptionError').textContent = '';
    document.getElementById('clienteCelularError').textContent = '';
    document.getElementById('additionalDocumentsError').textContent = '';
}
