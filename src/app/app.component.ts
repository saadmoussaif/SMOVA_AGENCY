import { Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  ArrowRight,
  Bot,
  Building2,
  CalendarDays,
  CheckCircle2,
  Code2,
  Cpu,
  Facebook,
  Globe2,
  HeartPulse,
  Instagram,
  LUCIDE_ICONS,
  LineChart,
  Linkedin,
  LucideIconProvider,
  Mail,
  MapPin,
  Megaphone,
  Menu,
  Phone,
  Rocket,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Store,
  Target,
  Users,
  Workflow,
  X
} from 'lucide-angular';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';

const icons = {
  ArrowRight,
  Bot,
  Building2,
  CalendarDays,
  CheckCircle2,
  Code2,
  Cpu,
  Facebook,
  Globe2,
  HeartPulse,
  Instagram,
  LineChart,
  Linkedin,
  Mail,
  MapPin,
  Megaphone,
  Menu,
  Phone,
  Rocket,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Store,
  Target,
  Users,
  Workflow,
  X
};

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, RouterOutlet, FooterComponent],
  providers: [{ provide: LUCIDE_ICONS, multi: true, useValue: new LucideIconProvider(icons) }],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {}
