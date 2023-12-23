import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MyNavBarComponent } from './shared/components/my-nav-bar/my-nav-bar.component';
import { ThemeService } from './shared/services/theme.service';
import { TypeTheme } from './shared/interfaces/my-theme/itheme';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, MyNavBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  modeThemeText: string = '';

  constructor(private readonly themeService: ThemeService) {
    const mytheme = this.themeService.getThemeLocalStorage();
    this.themeService.setTheme(mytheme);
    this.modeThemeText = this.setModeTheme(mytheme);
  }

  onChangeTheme() {
    let myTheme = this.themeService.getThemeLocalStorage()
    myTheme = (myTheme == TypeTheme.light) ? TypeTheme.dark : TypeTheme.light;
    this.themeService.setTheme(myTheme);
    this.modeThemeText = this.setModeTheme(myTheme);
  }

  private setModeTheme(myTheme: string): string {
    if (myTheme == TypeTheme.light) {
      return 'Dark Mode';
    } else {
      return 'Light Mode';
    }
  }
}
