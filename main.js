let change = document.getElementById('change');
let input_pic = document.getElementById('input_pic');
let pic = document.getElementById('pic');
let title = document.getElementById('title');
var images = [];
var x = 0;


//toda vez que ele mudar o valor do input ele vai armazenar tudo numa array
input_pic.addEventListener('input', function () {
    //criando as vars
   
    var amount = input_pic.files.length;

    for (i = 0; i < amount; i++) {
        //criando o leitor de arquivos
        var reader = new FileReader();
        //criando as urls dos arquivos
        reader.readAsDataURL(input_pic.files[i]);
        //quando tiver carregado vai executar esse evento
        reader.onload = function (e) {
            images.push(e.target.result);
        }
        
    }
    title.innerHTML = ("IMAGENS SELECIONADAS!");
    change.style.backgroundColor = ('chartreuse');
})



//esse botão vai percorrer a array de acordo com o tamanho dela, voltando a 0 toda vez que chegar no limite
change.addEventListener('click', function () {
    let tamanho = images.length

    if (x<tamanho){
        pic.src = (images[x])
        x++
    }
    else{
        x = 0;
    }
    
});
