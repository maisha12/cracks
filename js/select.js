let clickCount = 0;
document.getElementById('btn-select').addEventListener('click', function () {
    clickCount++;
    if (clickCount > 5) {
        alert('CANT ADD');
        return;
    }
    const nameFeild = document.getElementById('image1-name');
    const nameOne = nameFeild.innerText;
    const node = document.createElement("li");
    const textnode = document.createTextNode(nameOne);
    node.appendChild(textnode);
    const list = document.getElementById('clicked');
    node.classList.add('list-group-item');
    list.appendChild(node);
    document.getElementById('btn-select').setAttribute('disabled', 'disabled');


})
document.getElementById('btn-select-one').addEventListener('click', function () {
    clickCount++;
    if (clickCount > 5) {
        alert('CANT ADD');
        return;
    }
    const nameFeild = document.getElementById('image2-name');
    const nameOne = nameFeild.innerText;
    const node = document.createElement("li");
    const textnode = document.createTextNode(nameOne);
    node.appendChild(textnode);
    const list = document.getElementById('clicked');
    node.classList.add('list-group-item');
    list.appendChild(node);
    document.getElementById('btn-select-one').setAttribute('disabled', 'disabled');


})
document.getElementById('btn-select-two').addEventListener('click', function () {
    clickCount++;
    if (clickCount > 5) {
        alert('CANT ADD');
        return;
    }
    const nameFeild = document.getElementById('image3-name');
    const nameOne = nameFeild.innerText;
    const node = document.createElement("li");
    const textnode = document.createTextNode(nameOne);
    node.appendChild(textnode);
    const list = document.getElementById('clicked');
    node.classList.add('list-group-item');
    list.appendChild(node);
    document.getElementById('btn-select-two').setAttribute('disabled', 'disabled');


})
document.getElementById('btn-select-three').addEventListener('click', function () {
    clickCount++;
    if (clickCount > 5) {
        alert('CANT ADD');
        return;
    }
    const nameFeild = document.getElementById('image4-name');
    const nameOne = nameFeild.innerText;
    const node = document.createElement("li");
    const textnode = document.createTextNode(nameOne);
    node.appendChild(textnode);
    const list = document.getElementById('clicked');
    node.classList.add('list-group-item');
    list.appendChild(node);
    document.getElementById('btn-select-three').setAttribute('disabled', 'disabled');


})
document.getElementById('btn-select-four').addEventListener('click', function () {
    clickCount++;
    if (clickCount > 5) {
        alert('CANT ADD');
        return;
    }
    const nameFeild = document.getElementById('image5-name');
    const nameOne = nameFeild.innerText;
    const node = document.createElement("li");
    const textnode = document.createTextNode(nameOne);
    node.appendChild(textnode);
    const list = document.getElementById('clicked');
    node.classList.add('list-group-item');
    list.appendChild(node);
    document.getElementById('btn-select-four').setAttribute('disabled', 'disabled');


})
document.getElementById('btn-select-five').addEventListener('click', function () {
    clickCount++;
    if (clickCount > 5) {
        alert('CANT ADD');
        return;
    }
    const nameFeild = document.getElementById('image6-name');
    const nameOne = nameFeild.innerText;
    const node = document.createElement("li");
    const textnode = document.createTextNode(nameOne);
    node.appendChild(textnode);
    const list = document.getElementById('clicked');
    node.classList.add('list-group-item');
    list.appendChild(node);
    document.getElementById('btn-select-five').setAttribute('disabled', 'disabled');

})

document.getElementById('expenses-calculate').addEventListener('click', function () {
    const perPlayerFeild = document.getElementById('input-perplayer');
    const perPlayerString = perPlayerFeild.value;
    const perPlayerValue = parseFloat(perPlayerString);
    const listParent = document.getElementById('clicked');
    const listItemCount = listParent.children.length;
    const playerCost = perPlayerValue * listItemCount;
    const playerExpenses = document.getElementById('pE');
    playerExpenses.innerText = playerCost;
})

document.getElementById('calTotal').addEventListener('click', function () {
    const inputManagerFeild = document.getElementById('inputManager');
    const inputManagerString = inputManagerFeild.value;
    const inputManagerTotal = parseFloat(inputManagerString);

    const inputCoachFeild = document.getElementById('inputCoach');
    const inputCoachString = inputCoachFeild.value;
    const inputCoachTotal = parseFloat(inputCoachString);

    const playerExpensesFeild = document.getElementById('pE');
    const playerExpensesString = playerExpensesFeild.innerText;
    perPlayerValueTotal = parseFloat(playerExpensesString)

    const total = inputManagerTotal + inputCoachTotal + perPlayerValueTotal;
    const totalCost = document.getElementById('pC');
    totalCost.innerText = total;

})


