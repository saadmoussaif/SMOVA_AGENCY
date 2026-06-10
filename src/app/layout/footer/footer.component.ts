import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { TranslationService } from '../../core/translation.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  readonly i18n = inject(TranslationService);
}
