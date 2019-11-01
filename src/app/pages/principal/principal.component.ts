import { Component, Input,  OnInit } from '@angular/core';
import { Person } from 'src/app/models/person';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  @Input() private person:Person
  constructor() { }

  ngOnInit() {
  }

}
