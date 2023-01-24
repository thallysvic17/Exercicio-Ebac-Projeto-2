const form= document.getElementById('Valid-Form');
let linhas='';
form.addEventListener('submit',function(e){
    e.preventDefault();

    const contact= document.getElementById('contact');
    const tel= document.getElementById('tel');

    alert(`REGISTRADO : ${contact.value} - ${tel.value}`)

    let linha = '<tr>';
    linha += `<td>${contact.value}<td>`;
    linha += `<td>${tel.value}<td>`;
    linha += '</tr>';

    linhas += linha;

    const corpotabela = document.querySelector('tbody');
    corpotabela.innerHTML = linhas;

    contact.value='';
    tel.value='';
});