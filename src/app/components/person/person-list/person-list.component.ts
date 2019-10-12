import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {
  private people:Person[]
  constructor(private personService:PersonService) { }

  ngOnInit() {
    this.personService.getPeople().subscribe(
      res => {
        this.people=res
      }
    )
  }

}
