import { UpperCasePipe } from '@angular/common';
import { LowerCasePipe } from '@angular/common';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TemplateSyntaxComponent } from './pages/template-syntax/template-syntax.component';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'myapp';

  myComponentMethod() {
    throw new Error('Method not implemented.');
  }
}
