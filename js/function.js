
function getValueByIdFromInput(id){
    const getValueByInput = parseFloat(document.getElementById(id).value);
    return getValueByInput;
}

function donationValueAmount(id){
    const getValueByText = parseFloat(document.getElementById(id).innerText);
    return getValueByText;
}

function viewHideToggle (id){
    document.getElementById('history-section').classList.add('hidden')
    document.getElementById('donation-sections').classList.add('hidden')
    document.getElementById(id).classList.remove('hidden')
}