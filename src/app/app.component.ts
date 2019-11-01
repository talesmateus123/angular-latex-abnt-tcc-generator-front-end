import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front-end';
  constructor(private router: Router) { }

  ngOnInit() {
    //verificar se está logado ou não, caso esteja:
    //this.router.navigate(['/documents'])
    //caso nao esteja: redirecionar para a pagina de ínicio
  }
}
