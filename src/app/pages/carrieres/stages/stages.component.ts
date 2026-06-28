import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-stages',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, LucideAngularModule],
  templateUrl: './stages.component.html',
  styleUrl: './stages.component.scss'
})
export class StagesComponent {

  form = {
    prenom: '',
    nom: '',
    email: '',
    telephone: '',
    poste: '',
    ecole: '',
    niveau: '',
    duree: '',
    dateDebut: '',
    convention: '',
    portfolio: '',
    competences: '',
    lettre: ''
  };

  setPoste(poste: string) {
    this.form.poste = poste;
    const el = document.getElementById('candidature');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  submitForm() {
    console.log('Candidature stage envoyée :', this.form);
    alert('Candidature envoyée ! Nous vous répondrons sous 48h.');
    this.form = {
      prenom: '', nom: '', email: '', telephone: '',
      poste: '', ecole: '', niveau: '', duree: '',
      dateDebut: '', convention: '', portfolio: '',
      competences: '', lettre: ''
    };
  }
}