function buscarCep(cep){
    let urlCep=`https://viacep.com.br/ws/${cep}/json/`;
    let cep_xhtml=new XMLHttpRequest();
    cep_xhtml.open('get', urlCep);
    
    cep_xhtml.onreadystatechange=()=>{
        if (cep_xhtml.readyState==4 && cep_xhtml.status==200) {
            let cepObj=JSON.parse(cep_xhtml.responseText);
            if(cepObj.erro==undefined){
                document.getElementById('endereco').value=cepObj.logradouro;
                document.getElementById('bairro').value=cepObj.bairro;
                document.getElementById('cidade').value=cepObj.localidade;
                document.getElementById('uf').value=cepObj.uf;
            }else{
                document.getElementById('endereco').value="endereco não encontrado";
                document.getElementById('bairro').value="bairro não encontrado";
                document.getElementById('cidade').value="cidade não encontrada";
                document.getElementById('uf').value="estado não encontrado";
            }
            console.log(cepObj)
        }else{
            
        }
    }

    cep_xhtml.send();

    
}