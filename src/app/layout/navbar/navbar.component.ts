import { CommonModule } from '@angular/common';
import { Component, HostListener, OnDestroy, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { TranslationService } from '../../core/translation.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, LucideAngularModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnDestroy {
  protected readonly i18n = inject(TranslationService);

  menuOpen = false;
  isScrolled = false;
  activeDropdown: string | null = null;

  private dropdownTimeout?: ReturnType<typeof setTimeout>;

  ngOnDestroy(): void {
    if (this.dropdownTimeout) {
      clearTimeout(this.dropdownTimeout);
    }

    document.body.style.overflow = '';
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;

    if (this.menuOpen) {
      this.activeDropdown = null;
      document.body.style.overflow = 'hidden';
      return;
    }

    document.body.style.overflow = '';
  }

  closeMenu(): void {
    this.menuOpen = false;
    this.activeDropdown = null;
    document.body.style.overflow = '';
  }

  openDropdown(dropdown: string): void {
    if (this.dropdownTimeout) {
      clearTimeout(this.dropdownTimeout);
    }

    this.activeDropdown = dropdown;
  }

  closeDropdown(): void {
    this.dropdownTimeout = setTimeout(() => {
      this.activeDropdown = null;
    }, 100);
  }

  toggleDropdown(dropdown: string): void {
    this.activeDropdown = this.activeDropdown === dropdown ? null : dropdown;
  }

  @HostListener('window:scroll')
  onScroll(): void {
    const scrollPosition = window.scrollY;
    this.isScrolled = scrollPosition > 50;

    if (scrollPosition > 100 && this.menuOpen) {
      this.closeMenu();
    }
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target;

    if (!(target instanceof HTMLElement)) {
      return;
    }

    if (!target.closest('.nav-dropdown')) {
      this.activeDropdown = null;
    }
  }

  @HostListener('window:keydown', ['$event'])
  onKeydown(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      this.closeMenu();
    }
  }
}
