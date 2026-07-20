import { DOCUMENT } from '@angular/common';
import { Injectable, inject, signal } from '@angular/core';

export type Lang = 'fr' | 'en' | 'ar';

export interface LanguageOption {
  code: Lang;
  nativeLabel: string;
}

const dictionary: Record<Lang, Record<string, string>> = {
  fr: {
    'nav.home': 'Accueil', 'nav.director': 'Mot du Directeur', 'nav.expertises': 'Nos expertises', 'nav.overview': 'Vue globale', 'nav.webApps': 'Applications web', 'nav.mobileApps': 'Applications mobiles', 'nav.marketing': 'Marketing digital', 'nav.systems': 'Systèmes digitaux', 'nav.sectors': 'Secteurs', 'nav.careers': 'Carrière', 'nav.jobs': 'Offres d’emploi', 'nav.internships': 'Stages', 'nav.technologies': 'Technologies', 'nav.cta': 'Confiez-nous votre projet', 'nav.call': 'Réserver un appel', 'footer.description': 'Agence digitale marocaine spécialisée dans les produits web, mobiles, IA et croissance digitale pour startups et PME.', 'footer.contact': 'Contact', 'footer.follow': 'Suivez-nous', 'footer.legal': 'Mentions légales', 'footer.privacy': 'Politique de confidentialité', 'footer.news': 'Actualités', 'footer.rights': 'Tous droits réservés.'
  },
  en: {
    'nav.home': 'Home', 'nav.director': 'Director’s message', 'nav.expertises': 'Our expertise', 'nav.overview': 'Overview', 'nav.webApps': 'Web applications', 'nav.mobileApps': 'Mobile applications', 'nav.marketing': 'Digital marketing', 'nav.systems': 'Digital systems', 'nav.sectors': 'Sectors', 'nav.careers': 'Careers', 'nav.jobs': 'Job openings', 'nav.internships': 'Internships', 'nav.technologies': 'Technologies', 'nav.cta': 'Tell us about your project', 'nav.call': 'Book a call', 'footer.description': 'Moroccan digital agency specialized in web, mobile, AI and digital growth products for startups and SMEs.', 'footer.contact': 'Contact', 'footer.follow': 'Follow us', 'footer.legal': 'Legal notice', 'footer.privacy': 'Privacy policy', 'footer.news': 'News', 'footer.rights': 'All rights reserved.'
  },
  ar: {
    'nav.home': 'الرئيسية', 'nav.director': 'كلمة المدير', 'nav.expertises': 'خبراتنا', 'nav.overview': 'نظرة عامة', 'nav.webApps': 'تطبيقات الويب', 'nav.mobileApps': 'تطبيقات الجوال', 'nav.marketing': 'التسويق الرقمي', 'nav.systems': 'الأنظمة الرقمية', 'nav.sectors': 'القطاعات', 'nav.careers': 'الوظائف', 'nav.jobs': 'فرص العمل', 'nav.internships': 'التدريب', 'nav.technologies': 'التقنيات', 'nav.cta': 'حدثنا عن مشروعك', 'nav.call': 'احجز مكالمة', 'footer.description': 'وكالة رقمية مغربية متخصصة في منتجات الويب والجوال والذكاء الاصطناعي والنمو الرقمي للشركات الناشئة والصغرى والمتوسطة.', 'footer.contact': 'تواصل', 'footer.follow': 'تابعنا', 'footer.legal': 'إشعار قانوني', 'footer.privacy': 'سياسة الخصوصية', 'footer.news': 'الأخبار', 'footer.rights': 'جميع الحقوق محفوظة.'
  }
};

@Injectable({ providedIn: 'root' })
export class TranslationService {
  private readonly document = inject(DOCUMENT);
  readonly languages: readonly LanguageOption[] = [
    { code: 'fr', nativeLabel: 'Français' },
    { code: 'en', nativeLabel: 'English' },
    { code: 'ar', nativeLabel: 'العربية' }
  ];
  readonly lang = signal<Lang>(this.getInitialLanguage());

  constructor() {
    this.applyDocumentLanguage(this.lang());
  }

  setLang(lang: Lang): void {
    this.lang.set(lang);
    this.applyDocumentLanguage(lang);
    if (typeof window !== 'undefined') localStorage.setItem('smovagency_language', lang);
  }

  t(key: string): string {
    return dictionary[this.lang()][key] ?? dictionary.fr[key] ?? key;
  }

  private getInitialLanguage(): Lang {
    if (typeof window === 'undefined') return 'fr';
    const saved = localStorage.getItem('smovagency_language');
    return saved === 'en' || saved === 'ar' || saved === 'fr' ? saved : 'fr';
  }

  private applyDocumentLanguage(lang: Lang): void {
    this.document.documentElement.lang = lang;
    this.document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }
}
