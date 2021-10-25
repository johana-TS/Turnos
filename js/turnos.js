
//------------------validaciones-------------------

// function validarDNI(){
//     const userDNI= document.getElementById("dniST");

// }
// function habilitar(){
//     // const s_t= document.getElementById('solicitarDNI');
//     document.getElementById("STurno").style.disabled=false; 
//     document.getElementById("ATurno").style.disabled=false;
//     document.getElementById("GTurno").style.disabled=false;
    
//     }
//     document.getElementById("btnConfirm").addEventListener('click',habilitar);
//-------------boton solicitar turno-------------------
    
    // function solicitar (){
    //     document.getElementById("solicitar").style.display='block';
        // let seccion1= document.getElementById("solicitar");
        // let prueba= `
        // <div class="solicitarDetalle">
        
        // <div class="especialidades">
        // <div class="table-responsive">
        // <table class="table text-center">
        // <thead>
        // <tr> <th style="width: 34%;">Especialidad</th> </tr>
        // </thead>
        // <tbody>
        // <tr> <th class="text-start">Cardiologia</th> </tr>
        // <tr> <th class="text-start">Cirugia quirurgica</th> </tr>
        // <tr> <th class="text-start">Clinica</th> </tr>
        // <tr> <th class="text-start">Ecocardiograma</th> </tr>
        // <tr> <th class="text-start">Gastroenterologia</th> </tr>
        // <tr> <th class="text-start">Kinesiologia</th> </tr>
        // <tr> <th class="text-start">Laboratorio</th> </tr>
        // <tr> <th class="text-start">Neumonologia</th> </tr>
        // <tr> <th class="text-start">Neurologia</th> </tr>
        // <tr> <th class="text-start">Nutricion</th> </tr>
        // <tr> <th class="text-start">Odontologia</th> </tr>
        // <tr> <th class="text-start">Oftalmologia</th> </tr>
        // <tr> <th class="text-start">Pediatria</th> </tr>
        // <tr> <th class="text-start">Psicologia</th> </tr>
        // <tr> <th class="text-start">Rayos</th> </tr>
        // <tr> <th class="text-start">Traumatologia</th> </tr>
        // <tr> <th class="text-start">Urologia</th> </tr>                   
        // </tbody>
        // </table>
        // </div>
        
        // </div>
        // <div class="medicosNames">
        // <div class="table-responsive">
        // <table class="table text-center">
        // <thead>
        // <tr> <th style="width: 34%;">Profecional</th> </tr>
        // </thead>
        // <tbody>
        // <tr> <th class="text-start">Dr. Ramirez Alberto</th> </tr>
        // <tr> <th class="text-start">Dr. Ramirez Julia</th> </tr>
        // <tr> <th class="text-start">Dr. Lopez Juan</th> </tr>                                       
        // </tbody>
        // </table>
        // </div>
        
        // </div>
        // <div class="os">
        // <div class="table-responsive">
        // <table class="table text-center">
        // <thead>
        // <tr> <th style="width: 34%;">Obra Social</th> </tr>
        // </thead>
        // <tbody>
        // <tr> <th class="text-start">IOSFA</th> </tr>
        // <tr> <th class="text-start">OSEF</th> </tr>
        // <tr> <th class="text-start">DISA</th> </tr>    
        // <tr> <th class="text-start">DIBA</th> </tr> 
        // <tr> <th class="text-start">PN</th> </tr>          
        // <tr> <th class="text-start">IOSE</th> </tr>                         
        // </tbody>
        // </table>
        // </div>
        
        // </div>
        // <div class="calendarioDisponibles">
        // <h3>listado/calendario</h3>
        // <p> Div o Frame con un listado de opciones: turnos disponibles dias y horarios o bien calendario</p>
        // </div>

        // <div class="iconos">
        // <i class="fas fa-times-circle imgConfirm"></i>
        // <i class="fas fa-check-circle imgConfirm"></i> 
        // </div>
        // </div>`;

        // seccion1.innerHTML=prueba;
    //}

        //  sTurno.addEventListener("click",solicitar);
       
//--------------------------boton asistir al turno--------------------- // modificar clases mejorar distribucion
        //   let aTurno=document.getElementById("ATurno");
        //   function guardia(){
        //     let seccion3= document.getElementById("guardia");
        //     let prueba= `
        //             </div>
        //         <div class="calendarioDisponibles">
        //         <h3>Turno</h3>
        //         <p> Detalle del turno</p>
        //         </div>

        //         <div class="iconos">
                
        //         <i class="fas fa-check-circle imgConfirm"></i> 
        //         </div>
        //         </div>`;
        //     seccion3.innerHTML=prueba;
        //   }

        //   aTurno.addEventListener("click",asistir);
//-------------------------btn turno para guardia----------------------

        //   let gTurno=document.getElementById("GTurno");
        //   function asistir(){
          
        //     let seccion2= document.getElementById("asistencia");           
        //     const dniP=document.getElementById("dniST");
                
        //         for (let p = 0; p < arrayTurno.length; p++) {
        //             const eto = arrayTurno[p].dni;
                    
        //             if (eto===dniP){
        //                 const nroD=arrayTurno[p].nro;
        //                 const fecha= arrayTurno[p].fechaImp;
        //                 let prueba= `
        //                         </div>
        //                     <div class="calendarioDisponibles">
        //                     <h3>Turno</h3>
        //                     <p style="text-aling=center;"> ${nro} </br>
        //                         ${fechaImp}</p>
        //                     </div>

        //                     <div class="iconos">
                            
        //                     <i class="fas fa-check-circle imgConfirm"></i> 
        //                     </div>
        //                     </div>`;
        //                 seccion2.innerHTML=prueba;
        //             }
        //          } //else{
        //         //     alert('no se encontro turno asignado al paciente con el DNI ingresado');
        //         // }
        // }

        // function asistir(){
          
        //     let seccion2= document.getElementById("asistencia");           
            
        //                 let prueba= `
        //                         </div>
        //                     <div class="calendarioDisponibles">
        //                     <h3>Turno</h3>
        //                     <p >descripcion  </br>
        //                         }</p>
        //                     </div>

        //                     <div class="iconos">
                            
        //                     <i class="fas fa-check-circle imgConfirm"></i> 
        //                     </div>
        //                     </div>`;
        //                 seccion2.innerHTML=prueba;
        //  }


        document.addEventListener('dniST',()=>{
            fetchData();
        }
        );
       const fetchData =async ()=>{
             try {
                 const res = await fetchData('api.json');
                 const data =await res.json;
                 console.log(data);
             } catch () {
              
             }
         }