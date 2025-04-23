let scetchColor = 'red'

function drawField(size = 32) {
    let field = document.querySelector('#container');
    for (i = 0; i < size; i++) {
        let row = document.createElement('div');
        row.setAttribute("class", "row");
        field.appendChild(row);
        for (x = 0; x < size; x++) {
            let col = document.createElement('div');
            col.setAttribute("class", "col");
            row.appendChild(col);
        }
    }
    catchMouseMove();
}

function removeField() {
    let field = document.querySelectorAll('.row');
    field.forEach((e) => { e.remove() })
}

function catchMouseMove() {
    let field = document.querySelectorAll('.col');
    field.forEach(
        function (node) {
            node.addEventListener('mouseover', (node) => { node.target.style.background = scetchColor; });
        }
    );
}

function changeSize() {
    button = document.querySelector('#size');
    button.addEventListener('click', function () {
        size = prompt('Set field 16 - 100', 32);
        if (size < 16 || size > 100) {
            return alert('Only 16 - 100 numbers')
        }
        removeField();
        drawField(size);
    })
}

function clearField() {
    button = document.querySelector('#clear');
    button.addEventListener('click', function () {
        removeField();
        drawField();
    })
}

drawField();
changeSize();
clearField();