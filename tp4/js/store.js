/*
store.js
Script pour gérer la liste de contact en JSON

Pour ajouter un contact:  contactStore.add(_name, _firsname, _date, _adress, _mail);
Pour récuper la liste:    contactStore.getList();
*/

var contactStore = (function () {
    // variable privée
    let contactListString = localStorage.getItem('contactList')
    var contactList = contactListString ? JSON.parse(contactListString) : [];
    var n= document.getElementById("name").value;
    var p = document.getElementById("Prénom").value;
    var a = document.getElementById("Adresse").value;
    var e = document.getElementById("email").value;
    var ma = document.getElementById("Date").value;
    // Expose these functions via an interface while hiding
    // the implementation of the module within the function() block
    for (var index in contactList) {
      console.log(contactList[index].name);
      document.querySelector("table tbody").innerHTML =
  document.querySelector("table tbody").innerHTML +
  `<tr>
  <td> +${n}</td>
    <td>${p}</td>
    <td>${a}</td>
    <td>${e}</td>
    <td>${ma}</td>
  </tr>`

    }
    return {
      add: function (_name, _firsname, _date, _adress, _mail) {
        var contact = {
          name: _name,
          firstname: _firsname,
          date: _date,
          adress: _adress,
          mail: _mail,
        };
        // ajout du contact à la liste
        contactList.push(contact);
  
        // persistence de la liste dans une base de données local du navigateur web
        // https://developer.mozilla.org/fr/docs/Web/API/Window/localStorage
        localStorage.setItem('contactList', JSON.stringify(contactList));
  
        return contactList;
        

      },
      reset: function () {
       
        localStorage.removeItem('contactList');
  
        return contactList;
      },
  
      getList: function () {
        return contactList;
      },
     
    };
   
     })();
     
    