import { CommonModule } from '@angular/common';
import { Component, HostListener, OnDestroy, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { Lang, TranslationService } from '../../core/translation.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, LucideAngularModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnDestroy {
  // ✅ Service d'internationalisation
  protected readonly i18n = inject(TranslationService);

  // ✅ État de la navbar
  menuOpen = false;
  isScrolled = false;
  activeDropdown: string | null = null;
  languageMenuOpen = false;

  // ✅ Timeout pour fermer le dropdown
  private dropdownTimeout?: ReturnType<typeof setTimeout>;

  /**
   * Nettoyage à la destruction du composant
   */
  ngOnDestroy(): void {
    if (this.dropdownTimeout) {
      clearTimeout(this.dropdownTimeout);
    }
    // Réactiver le scroll si le menu était ouvert
    document.body.style.overflow = '';
  }

  /**
   * Toggle le menu mobile (hamburger)
   */
  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;

    if (this.menuOpen) {
      // Ouvrir le menu
      this.activeDropdown = null;
      document.body.style.overflow = 'hidden'; // Désactiver scroll
      return;
    }

    // Fermer le menu
    document.body.style.overflow = '';
  }

  /**
   * Fermer le menu mobile
   */
  closeMenu(): void {
    this.menuOpen = false;
    this.activeDropdown = null;
    this.languageMenuOpen = false;
    document.body.style.overflow = ''; // Réactiver scroll
  }

  /**
   * Ouvrir un dropdown (desktop hover)
   */
  openDropdown(dropdown: string): void {
    if (this.dropdownTimeout) {
      clearTimeout(this.dropdownTimeout);
    }
    this.activeDropdown = dropdown;
  }

  /**
   * Fermer un dropdown avec délai (pour éviter fermeture au mouvement souris)
   */
  closeDropdown(): void {
    this.dropdownTimeout = setTimeout(() => {
      this.activeDropdown = null;
    }, 100);
  }

  /**
   * Toggle dropdown (mobile click)
   */
  toggleDropdown(dropdown: string): void {
    this.activeDropdown = this.activeDropdown === dropdown ? null : dropdown;
  }

  toggleLanguageMenu(): void {
    this.languageMenuOpen = !this.languageMenuOpen;
    this.activeDropdown = null;
  }

  selectLanguage(lang: Lang): void {
    this.i18n.setLang(lang);
    this.languageMenuOpen = false;
  }

  /**
   * Détection du scroll
   * Active la transition du navbar de transparent à blanc au 50px
   */
  @HostListener('window:scroll')
  onScroll(): void {
    const scrollPosition = window.scrollY;
    
    // Mettre à jour l'état du scroll (transparent → white)
    this.isScrolled = scrollPosition > 50;

    // Fermer le menu mobile automatiquement si scroll > 100px
    if (scrollPosition > 100 && this.menuOpen) {
      this.closeMenu();
    }
  }

  /**
   * Fermer le dropdown si clic en dehors
   */
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target;

    // Vérifier que target est un HTMLElement
    if (!(target instanceof HTMLElement)) {
      return;
    }

    // Si clic pas sur .nav-dropdown, fermer le dropdown
    if (!target.closest('.nav-dropdown') && !target.closest('.nav-language')) {
      this.activeDropdown = null;
      this.languageMenuOpen = false;
    }
  }

  /**
   * Fermer le menu avec ESC key
   */
  @HostListener('window:keydown', ['$event'])
  onKeydown(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      this.closeMenu();
    }
  }
}
