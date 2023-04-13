function  msgTeste ( ) {
    console . log ( "Funcionou minha função" )
}

msgTeste ( )

function  msgTesteArgumento ( param ) {
    console . log ( "O parâmetro passado foi:" ,
                parâmetro , 
                "eo tipo dele é: " ,
                 typeof  param )
}

msgTesteArgumento ( "Olá" )

função  soma ( n1 ,  n2 ) {
    deixe  resultado  =  0
     resultado  de retorno =  n1  +  " + "  +  n2  +  " = "  +  ( n1  +  n2 )  +  "<- função simples"
}

console . log ( soma ( 6 , 6 ) )

função  soma2 ( n1 ,  n2 ) {
    deixe  resultado  =  0
    if  ( typeof  n1  ==  "número"  &&  typeof  n2  ==  "number" ) {
    return  result  =  n1  +  " + "  +  n2  +  " = "  +  ( n1  +  n2 )  +  "<- função com if e else"
    }
    return  "Deu bom não <- function com if e else"
}

console . log ( soma2 ( 5 , 6 ) )
console . log ( soma2 ( "Oi" ,  3 ) )

const  funcaoArrow  =  ( )  =>  {
    console . log ( "Isso é uma Função de Seta! <- const com if e else" )
}
    funcaoArrow ( )