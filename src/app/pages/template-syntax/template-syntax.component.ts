import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-template-syntax',
  standalone: false,
  templateUrl: './template-syntax.component.html',
  styleUrl: './template-syntax.component.scss'
})
export class TemplateSyntaxComponent {
  title =  'Template Syntax'

  myComponentMethod() {
    throw new Error('Method not implemented.');
  }
}
