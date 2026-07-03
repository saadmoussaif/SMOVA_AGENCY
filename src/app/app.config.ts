import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';

import {
  LucideAngularModule,
  CalendarDays, ChevronDown, ChevronLeft, ChevronRight,
  ArrowRight, LayoutGrid, Monitor, Smartphone, TrendingUp,
  Server, Briefcase, GraduationCap,
  Users, Code2, Rocket, LineChart, ShieldCheck,
  Cpu, Layers, Compass, Palette, Code, Search,
  HeartPulse, Building2, Store, Landmark, Plane, Factory,
  Brain, Database, Globe2, ShoppingBag, ChartNoAxesColumn,
  Video, Share2, Cloud, Settings,
} from 'lucide-angular';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withInMemoryScrolling({
        anchorScrolling: 'enabled',
        scrollPositionRestoration: 'enabled'
      })
    ),
    provideHttpClient(),
    importProvidersFrom(
      LucideAngularModule.pick({
        CalendarDays, ChevronDown, ChevronLeft, ChevronRight,
        ArrowRight, LayoutGrid, Monitor, Smartphone, TrendingUp,
        Server, Briefcase, GraduationCap,
        Users, Code2, Rocket, LineChart, ShieldCheck,
        Cpu, Layers, Compass, Palette, Code, Search,
        HeartPulse, Building2, Store, Landmark, Plane, Factory,
        Brain, Database, Globe2, ShoppingBag, ChartNoAxesColumn,
        Video, Share2, Cloud, Settings,
      })
    )
  ]
};