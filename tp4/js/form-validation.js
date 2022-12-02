function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
      }
     // Y mettre le code Javascript pour valider tous les champs du formulaire
    //prompt("Bonjoue Saisissez les champs")

   // const e1 = document.querySelector("#name");
    //var x = document.getElementById("name");

  //  x.querySelector(".container").innerHTML = "Hello World!";

      
  function calcNbChar(id) {
    document.querySelector(`#${id} + span`).textContent = document.querySelector(`#${id}`).value.length;
  }

        
  function testDate (){
    let msg;

    let mtn = new Date ();

    let m = new Date ( document.querySelector("#Date".value));

    if (m > mtn){
      msg = false;
    }else{
      msg= true;
    }
    return msg ;

  }
    function test(){
      let n= document.getElementById("name").value;
      let p = document.getElementById("Prénom").value;
      let a = document.getElementById("Adresse").value;
      let e = document.getElementById("email").value;
      let ma = document.getElementById("Date").value;

      var myModal = new bootstrap.Modal(document.getElementById("myModal"));
     
        
   
      
      
        
      
        
      if (n.length <= 5 || p.length <= 5 || a.length <= 5 || validateEmail(e) == false || testDate (ma) ==false) {
        document.querySelector(".modal-title").textContent = " Erreur formulaire";
        document.querySelector(".modal-body").innerHTML = "Tout les champs sont obligatoire";
        
        myModal.show();
      } else {
        
        adr = document.getElementById("Adresse").value;
        
      
      
        document.querySelector(".modal-title").textContent = " Bienvenue " + n + " "+ p ;
        document.querySelector(".modal-body").innerHTML = `Vous êtes né le ${ma} et vous habitez à <a href= 'https://maps.google.com/maps?q=${a}'> <img style="max-width: 100%" src='https://maps.googleapis.com/maps/api/staticmap?markers=${a}&zoom=14&size=400x300&scale=2&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg' > ${a}</a>`;
        document.querySelector("table tbody").innerHTML = document.querySelector("table tbody").innerHTML+`
        
        <tr>
        <td> ${n}</td>
          <td>${p}</td>
          <td>${a}</td>
          <td>${e}</td>
          <td>${ma}</td>
        </tr>`


        myModal.show();
      }
     

    }


  