import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-my-nav-bar',
  standalone: true,
  imports: [],
  templateUrl: './my-nav-bar.component.html',
  styleUrl: './my-nav-bar.component.css'
})
export class MyNavBarComponent {

  @Output() changeTheme = new EventEmitter<void>();
  @Input() modeTheme: string = 'Light Mode';

  toggleTheme() {
    this.changeTheme.emit();
  }

}
