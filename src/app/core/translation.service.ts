import { Injectable, signal } from '@angular/core';

type Lang = 'fr' | 'en';

const dictionary: Record<Lang, Record<string, string>> = {
  fr: {
    'nav.home': 'Accueil',
    'nav.expertises': 'Expertises',
    'nav.sectors': 'Secteurs',
    'nav.technologies': 'Technologies',
    'nav.cta': 'Confiez-nous votre projet',
    'nav.call': 'Reserver un appel',
    'footer.description': 'Agence digitale marocaine specialisee dans les produits web, mobiles, IA et croissance digitale pour startups et PME.'
  },
  en: {
    'nav.home': 'Home',
    'nav.expertises': 'Expertise',
    'nav.sectors': 'Sectors',
    'nav.technologies': 'Technologies',
    'nav.cta': 'Tell us about your project',
    'nav.call': 'Book a call',
    'footer.description': 'Moroccan digital agency specialized in web, mobile, AI and digital growth products for startups and SMEs.'
  }
};

@Injectable({ providedIn: 'root' })
export class TranslationService {
  readonly lang = signal<Lang>('fr');

  setLang(lang: Lang): void {
    this.lang.set(lang);
  }

  t(key: string): string {
    return dictionary[this.lang()][key] ?? key;
  }
}
