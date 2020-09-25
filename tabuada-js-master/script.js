function numberInput(){
    return document.getElementById('input').value
}

function multiplicationTable(number,table){
newList(`${number} X ${table} = ${number * table}`)
if(table > 0)
  multiplicationTable(number,table - 1);

}
function newList(text){
    const lista = document.getElementById('tabuada');
    const li = document. createElement('li');
    li.appendChild(document.createTextNode(text));
    lista.appendChild(li);

}
document.getElementById('button').addEventListener('click',function(){
multiplicationTable(numberInput(),10)

})