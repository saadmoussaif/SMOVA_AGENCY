import { NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

type StaticInfoData = {
  kicker: string;
  title: string;
  description: string;
  items: string[];
};

@Component({
  selector: 'app-static-info',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './static-info.component.html',
  styleUrl: './static-info.component.scss'
})
export class StaticInfoComponent {
  private readonly route = inject(ActivatedRoute);

  get page(): StaticInfoData {
    return this.route.snapshot.data as StaticInfoData;
  }
}
