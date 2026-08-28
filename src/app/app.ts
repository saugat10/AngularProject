import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { About } from './about/about';
import { Home } from './home/home';
import { Contact } from './contact/contact';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Home, About, Contact],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('Saugat Angular');
}
