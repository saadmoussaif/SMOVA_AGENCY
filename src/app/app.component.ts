import { Component, ViewEncapsulation } from '@angular/core';
import { NgIf } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {
  ArrowRight,
  Bot,
  Brain,
  Building2,
  CalendarDays,
  ChartNoAxesColumn,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Cloud,
  Code2,
  Cpu,
  Database,
  Facebook,
  Factory,
  Globe2,
  GraduationCap,
  HeartPulse,
  Instagram,
  LUCIDE_ICONS,
  LineChart,
  Linkedin,
  Landmark,
  LucideIconProvider,
  Mail,
  MapPin,
  Megaphone,
  Menu,
  Palette,
  Phone,
  Plane,
  Rocket,
  Settings,
  Search,
  Share2,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Store,
  Target,
  Users,
  Video,
  Workflow,
  X
} from 'lucide-angular';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';

const icons = {
  ArrowRight,
  Bot,
  Brain,
  Building2,
  CalendarDays,
  ChartNoAxesColumn,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Cloud,
  Code2,
  Cpu,
  Database,
  Facebook,
  Factory,
  Globe2,
  GraduationCap,
  HeartPulse,
  Instagram,
  LineChart,
  Linkedin,
  Landmark,
  Mail,
  MapPin,
  Megaphone,
  Menu,
  Palette,
  Phone,
  Plane,
  Rocket,
  Settings,
  Search,
  Share2,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Store,
  Target,
  Users,
  Video,
  Workflow,
  X
};

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgIf, NavbarComponent, RouterOutlet, FooterComponent],
  providers: [{ provide: LUCIDE_ICONS, multi: true, useValue: new LucideIconProvider(icons) }],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  showCookieBanner = this.getCookieChoice() === null;
  showCookieSettings = false;

  acceptCookies(): void {
    this.saveCookieChoice('accepted');
  }

  rejectCookies(): void {
    this.saveCookieChoice('rejected');
  }

  toggleCookieSettings(): void {
    this.showCookieSettings = !this.showCookieSettings;
  }

  private saveCookieChoice(value: 'accepted' | 'rejected'): void {
    try {
      localStorage.setItem('smagency_cookie_choice', value);
    } catch {
      // Ignore storage restrictions and still hide the banner for this session.
    }

    this.showCookieBanner = false;
    this.showCookieSettings = false;
  }

  private getCookieChoice(): string | null {
    try {
      return localStorage.getItem('smagency_cookie_choice');
    } catch {
      return null;
    }
  }
}
