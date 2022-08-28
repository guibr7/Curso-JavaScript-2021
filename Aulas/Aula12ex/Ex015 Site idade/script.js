function verificar(){
    var data = new Date()
    var anoreal = data.getFullYear() 
    //2021
    var fano = document.getElementById('txtano')
    //ano da barra
    var res = document.querySelector('div#res')
    if(fano.value==0 || fano.value>=2021){
        window.alert('[ERRO] Insira um ano legível e tente novamente.')} 

    else{
        var fsex = document.getElementsByName('radsex') 
        var idade = anoreal - Number(fano.value)
        var genero=''
        var img=document.createElement('img') //criou elemento (img)
        img.setAttribute('id','foto') //atribuiu ID no elemento
        if(fsex[0].checked){
            genero='Homem'
            if(idade>=0 && idade<11){
                //criança
                img.setAttribute('src','homembebe.png') //atribuiu src no elemento SRC
            }
            else if(idade<24){
                //jovem
                img.setAttribute('src','homemjovem.png')
            }
            else if(idade<60){
                //adulto
                img.setAttribute('src','homemadulto.png')
            }
            else{
                //idoso
                img.setAttribute('src','homemvelho.png')
            }

    }

    else{
        genero='Mulher'
        if(idade>=0 && idade<11){
            //criança
            img.setAttribute('src','mulherbebe.png')
        }
        else if(idade<24){
            //jovem
            img.setAttribute('src','mulherjovem.png')
        }
        else if(idade<60){
            //adulto
            img.setAttribute('src','mulheradulta.png')
        }
        else{
            //idoso
            img.setAttribute('src','mulhervelha.png')
        }
    }
    
res.innerHTML= `Detectei: ${genero} com ${idade} anos de idade`
res.appendChild(img)
}
}
