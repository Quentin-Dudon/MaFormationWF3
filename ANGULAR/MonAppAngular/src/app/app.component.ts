// 1. Importation de la libraire Angular Core
import { Component } from '@angular/core';
import { Contact } from './shared/models/contact'; 


// 2. Déclaration du Composant
@Component({

  // 2a. Le sélecteur pour le rendu de l'application
  selector: 'app-root',

  // 2b. Le contenu HTML de notre composant
  templateUrl: './app.component.html',

  // 2c. Les styles CSS 
  styleUrls: ['./app.component.css']
})

// Notre code JS
export class AppComponent {
  // Déclaration d'une variable title
  title = 'contact';

  // Déclaration d'un Objet contact
  Contact = {
    id : 1, 
    fullname : 'Quentin', 
    username : 'Takeshi', 
  }

  // Je travail avec des contacts
  Contacts: Contact[] = [
    {id : 1,  fullname : 'Quentin', username : 'Takeshi'},
    {id : 2,  fullname : 'Yimin', username : 'Li'},
    {id : 3,  fullname : 'Tanguy', username : 'Manas'}
  ]

  // -- Choix de mon utilisateur actif
  contactActif: Contact;

  // -- Ma fonction choisir le contact, prend un contact en paramètre, et le transmet à la variable contactActif
  choisirUnContact(contact){
    this.contactActif = contact; 
    console.log(this.contactActif); 
  }
    // Si unContactEstCree j'appelle ma fonction ajouterContactDansListe
    ajouterContactDansListe(event){
      this.Contacts.push(event.contact);
    }

}
