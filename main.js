var contatos = []
const form = document.getElementById('addtel')

form.addEventListener('submit',function (e) {
    e.preventDefault()
    addTel()
    attTel()

})

function addTel(){
    var nome = document.getElementById('nome')
    var telefone = document.getElementById('telefone')

    if (Number(telefone.value)){
        var string = '<tr>'
        string += `<td>${nome.value}</td>`
        string += `<td>${telefone.value}</td>`
        string += '</tr>'

        contatos.push(string)
    }else{
        alert('Apenas números são válidos')
    }
    

    nome.value = ''
    telefone.value = ''
}

function attTel(){
    var result = ''
    const table = document.querySelector('tbody')
    for (var i = 0; i < contatos.length; i++){
        result += contatos[i]
    }
    table.innerHTML = result
}