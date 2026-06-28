// carrieres.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-carrieres',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, LucideAngularModule],
  templateUrl: './carrieres.component.html',
  styleUrl: './carrieres.component.scss'
})
export class CarrieresComponent {

  form = {
    prenom: '',
    nom: '',
    email: '',
    telephone: '',
    poste: '',
    experience: '',
    technologies: '',
    portfolio: '',
    lettre: ''
  };

  // ← appelé depuis les boutons "Postuler"
  setPoste(poste: string) {
    this.form.poste = poste;
  }

  submitForm() {
    console.log('Candidature envoyée :', this.form);
    // TODO: appel API ou EmailJS
    alert('Candidature envoyée ! Nous vous répondrons sous 48h.');
    this.form = {
      prenom: '', nom: '', email: '', telephone: '',
      poste: '', experience: '', technologies: '',
      portfolio: '', lettre: ''
    };
  }
}