// creare un ciclo con pattern pyramid con l'obiettivo di replicare delle col con box

// function per ripetere le rows
function createRow(rowNum) {

    let rowContainer = document.querySelector('.container');
    for (let i = 1; i <= rowNum; i++) {
        const rowHtml = document.createElement('div');
        rowHtml.className = 'row';
        rowContainer.append(rowHtml);

        // loop cicle per il pyramid pattern: empty boxes di sinistra
        for (let x = 0; x < (rowNum - i); x++) {
            const emptyBox1 = document.createElement('div');
            emptyBox1.className = 'col ms_box';
            rowHtml.append(emptyBox1);
        }

        // loop cicle per il pyramid pattern: colored boxes
        for (let j = 0; j < 2 * i - 1; j++) {
            const coloredBox = document.createElement('div');
            coloredBox.className = 'col ms_box colored';
            rowHtml.append(coloredBox);
        }

        // loop cicle per il pyramid pattern: empty boxes di destra
        for (let k = 0; k < (rowNum - i); k++) {
            const emptyBox2 = document.createElement('div');
            emptyBox2.className = 'col ms_box';
            rowHtml.append(emptyBox2);
        }
        

    }
}



createRow(5);