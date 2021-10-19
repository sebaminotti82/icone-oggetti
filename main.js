$(document).ready(function(){
/*
MILLESTONE 1 : CREA UN ARRAY DI OGGETTI CHE RAPPRESENTANO ICONE E SARANNO COPOSTI DA 
FAMILY FAS PREFIX FA- NOME CAT E DALLA TIPOLOGIA DI ICONA !! 
TRAMITE UN CICLO FOREACH E TEMPLATE LITTERAL STAMPARE A SCHERMO LE ICONE
*/
//creo un array di oggetti icone e lo salvo in una variabile di nome icons
    const icons =[
        {family:'fas',prefix:'fa-',nome:'dog',type:'animal'},
        {family:'fas',prefix:'fa-',nome:'cat',type:'animal'},
        {family:'fas',prefix:'fa-',nome:'hippo',type:'animal'},
        {family:'fas',prefix:'fa-',nome:'dragon',type:'animal'},
        {family:'fas',prefix:'fa-',nome:'server',type:'tech'},
        {family:'fas',prefix:'fa-',nome:'laptop',type:'tech'},
        {family:'fas',prefix:'fa-',nome:'tablet',type:'tech'},
        {family:'fas',prefix:'fa-',nome:'tv',type:'tech'},
        {family:'fas',prefix:'fa-',nome:'running',type:'healt'},
        {family:'fas',prefix:'fa-',nome:'first-aid',type:'healt'},
        {family:'fas',prefix:'fa-',nome:'user-md',type:'healt'},
        {family:'fas',prefix:'fa-',nome:'weight',type:'healt'},
    ];

    // creiamo il nostro array che conterranno i nostri colori per le icone
    const color = ['orange','blue','red']
    console.log(color);
    const coloredArray = colorIcons(icons, color)
    //   salvo in una costante il mio container dove saranno visibili le icone
    const container = $('.icons')
    console.log(container);
   print(coloredArray, container)

   const select = $('#type')
   const types = getType(coloredArray)
    printOption(types, select)

    select.change({container}, function(event){
            console.log(event);
            const container = event.data.container
            const optionSelected = $(this).val()
            console.log(optionSelected);

            const filtered = coloredArray.filter((item)=>{

                return item.type === optionSelected
            })

            if(filtered.length > 0){
                print(filtered, container)
            } else {

                print(coloredArray, container)
            }
            
    });
 
})

// creo una funzione che chiamero' print  essa mi servirà per stampare a schermo le mie icone

function print (array, container) {

    container.html('')
    array.forEach((item) => {
        const {color, family, prefix, nome}= item

        const elementHTML = `
            <div class="icon">
                <i class="${family} ${prefix}${nome} icona"style="color:${color}"></i>
                 <span style="color:${color}">${nome}</span>
            </div>
        `
        container.append(elementHTML)
    });
}


// creo una funzione che faccia un bind tra icona.tipo e colore
function colorIcons(icons, color){
    const types = getType(icons)
    const coloredArray = icons.map((item)=>{
      

        const indexType = types.indexOf(item.type)
            item.color = color[indexType]
          
            return item
    })


    return coloredArray
}





// creo una funzione che estrapoli i tipi delle mie icone e li inserisca in un array
function getType(array){
   const types = []
//    array che ocnterrà i nostri tipi di icone all' interno della funzione

    array.forEach((item) => {
        
        if(!types.includes(item.type)){

            types.push(item.type)
        }
       
    });
     
    return types

    
}

function printOption (array, select){

    array.forEach((item) => {
        
        select.append(`<option style="font-size:1vw" value="${item}">${item.toUpperCase()}</option>`)

    });
}