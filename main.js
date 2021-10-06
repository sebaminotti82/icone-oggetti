

//MILLESTONE 1
/*
DEFINIRE UN ARRAI DI OGGETTI:OGNI OGGETTO RAPPRESENTERA' UN ICONA 
CARATTERIZZATA DA:NOME PREFISSO CATEGORIA FAMIGLIA.

UTILIZZANDO LA FUNZIONE FOREACH E IL TEMPLATELITERAL VISUALIZZARE LE ICONE IN PAGINA CON TANTO DI NOME
*/
// creo il mio array di oggetti icone 
const icons = [
    {
        nome:'cat',
        prefix:'fa-',
        family:'fas',
        type:'animal'
    },{
        nome:'crow',
        prefix:'fa-',
        family:'fas',
        type:'animal'
    },{
        nome:'dog',
        prefix:'fa-',
        family:'fas',
        type:'animal'
    }, {
        nome:'dragon',
        prefix:'fa-',
        family:'fas',
        type:'animal'
    },{
        nome:'memory',
        prefix:'fa-',
        family:'fas',
        type:'tech'
    },{
        nome:'server',
        prefix:'fa-',
        family:'fas',
        type:'tech'
    },{
        nome:'laptop-code',
        prefix:'fa-',
        family:'fas',
        type:'tech'
    },{
        nome:'headphones',
        prefix:'fa-',
        family:'fas',
        type:'tech'
    },{
        nome:'carrot',
        prefix:'fa-',
        family:'fas',
        type:'vegetable'
    },{
        nome:'apple-alt',
        prefix:'fa-',
        family:'fas',
        type:'vegetable'
    },{
        nome:'lemon',
        prefix:'fa-',
        family:'fas',
        type:'vegetable'
    },{
        nome:'pepper-hot',
        prefix:'fa-',
        family:'fas',
        type:'vegetable'
    },{
        nome:'user-astronaut',
        prefix:'fa-',
        family:'fas',
        type:'user'
    },{
        nome:'user-graduate',
        prefix:'fa-',
        family:'fas',
        type:'user'
    }, {
        nome:'user-ninja',
        prefix:'fa-',
        family:'fas',
        type:'user'
    }, {
        nome:'user-secret',
        prefix:'fa-',
        family:'fas',
        type:'user'
    },
    
];

const color = [
'#ffff00',
'white',
'orange',
'dodgerblue'

];
const container = $('.icons')
console.log(icons);
const colorArray = colorIcons(icons, color)
console.log(icons);
console.log(colorArray);
//fine del nostro array oggetti icone

// creo il mio array con i colori da associare alle icone 
print(colorArray, container)

const select = $('#type')

const types = getType(colorArray)
printOptions(types, select)
select.change({container},function(event){

const container = event.data.container
const optionSelected = $(this).val()
console.log(optionSelected);

const filtered = colorArray.filter((e)=>{

    return e.type===optionSelected;
})

if(filtered.length >0){
    print(filtered, container)
} else {

    print(colorArray, container)
}
})



print(icons,container)

function print(icons, container){
  container.html('')

  icons.forEach(element => {
    const{nome,color,prefix,family}=element

    const iconHTML = `
     <div class="icon">
     <i class='${family} ${prefix}${nome}'style='color:${color}'></i>
      <div class'title'><h5 style='color:${color};'>${nome.toUpperCase()}'</h5></div>
     </div>
    
    `;
    container.append(iconHTML)
});

}

function colorIcons(icons, color){
   const types = getType(icons)
    const colorArray = icons.map((item)=>{
      
         const indexType = types.indexOf(item.type)
          if(indexType != -1){
               item.color = color[indexType]
          }
       return item
    })
    return colorArray
};


function getType (array){

    const types = []
    array.forEach(item => {
        if(!types.includes(item.type)){
            types.push(item.type)
        }
    });
  return types
}


function printOptions (array, select) {
     array.forEach((e) => {
         
        select.append(`
        <option value="${e}">${e}</option>
        `)
     });
}






