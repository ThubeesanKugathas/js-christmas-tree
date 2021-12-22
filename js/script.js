// creare un ciclo con pattern pyramid con l'obiettivo di replicare delle col con box

// function per ripetere le rows
function createRow(rowNum) {

    let rowContainer = document.querySelector('.container');
    for (let i = 0; i < rowNum; i++) {
        const rowHtml = document.createElement('div');
        rowHtml.className = 'row';
        rowContainer.append(rowHtml);
    }
}



createRow(5);