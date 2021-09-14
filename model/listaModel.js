var listagem = [];
listagem = [
    {id: 1,
    nome: "Heitor"}
];


function getLista(){
    return listagem;
}

function addItem(cod, name){
    let novoItem = {
        id: cod,
        nome: name
    };
    listagem.push(novoItem);
}

function getItem(id){
    item = listagem.find(item =>{
        if(item.id == id){
            return item;
        }
    });
    return item;
}

function editItem(cod, name){
    listagem.forEach(item =>{
        if(item.id == cod){
            item.nome = name;
        }
    });
}

function deleteItem(cod){
    listagem = listagem.filter(item =>{
        if(item.id != cod){
            return item;
        }
    });
    console.log(listagem);
}

module.exports = {
    getLista,
    addItem,
    getItem,
    editItem,
    deleteItem
}