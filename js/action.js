
let nav= document.getElementById("nuevoContenedor");
let prueba= `<div class="logotipo" > <a href="index.html"> <p class="logotipo">Clinica Medica</p></a></div> 
<nav class="navegador">
    <ul>
        <li> <a href="login.html"> login</a>  </li>   
        <li> <a href="registrarme.html"> Registrarme</a></li> 
        <li> <a href="turnos.html"> Turnos </a> </li>
        <li> <a href="visionActual.html"> Ver Turno</a> </li>
        <li> <a href="fijarTablero.html"> Current</a> </li>

    </ul>
</nav>`;
nav.innerHTML=prueba;



// const NavBar= document.getElementById("nuevoContenedor");
// const listaElementos= ["registrarse", "login", "turnos","vista"];

// const fragmentNav= document.createDocumentFragment();
// // const fragmentNav= create new DocumentFragment(); es lo mismo

// listaElementos.forEach(item => {
//     const li= document.createElement('li');
//         const a= document.createElement('a');
//     //a.setAttribute('href');
//     a.textContent= item;
//     li.appendChild(a);

//     fragmentNav.appendChild(li);

// })
// NavBar.appendChild(fragmentNav);

// console.log(fragmentNav)

// let fragmentNav=""
// listaElementos.forEach(item => {
//     fragmentNav+=`
//     <li> <a href="registrarme.html"> ${item}</a></li> 
//     `
// });
// NavBar.innerHTML=fragmentNav;



//----ultima manera de hacerlo---correcta!
// en html crear:
// <template id+"template-li">
//  <ul class="list">
//      <li> <a href="login.html"> ${item}/a>  </li>  
// </ul>
// </template>
// entonces... //-->
// const lista= document.getElementById("#lista");
// const arrayLista=[];

// const template= document.querySelector(#template-li);
// const fragmente= document.createDocumentFragment()

// arrayLista.forEach(item =>{
//     template.querySelector("a").textContent=item;
//     const clone= template.cloneNode(true);
//     fragmente.appendChild(clone);
// })

// lista.appendChild(fragmente);

