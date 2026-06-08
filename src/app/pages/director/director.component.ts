import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { DOCUMENT, NgFor } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-director',
  standalone: true,
  imports: [NgFor, LucideAngularModule],
  templateUrl: './director.component.html',
  styleUrl: './director.component.scss'
})
export class DirectorComponent implements OnInit, OnDestroy {
  readonly highlights = [
    'Ingenieur d Etat en genie logiciel',
    'Applications web robustes et scalables',
    'Expertise back-end, front-end et architecture',
    'Innovation, rigueur et performance produit'
  ];

  constructor(@Inject(DOCUMENT) private readonly document: Document) {}

  ngOnInit(): void {
    this.document.body.classList.add('director-route');
  }

  ngOnDestroy(): void {
    this.document.body.classList.remove('director-route');
  }
}
