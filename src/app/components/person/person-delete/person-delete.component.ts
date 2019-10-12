import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person';
import { PersonService } from 'src/app/services/person.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-person-delete',
  templateUrl: './person-delete.component.html',
  styleUrls: ['./person-delete.component.css']
})
export class PersonDeleteComponent implements OnInit {
  id: string
  person:Person
  constructor(private personService:PersonService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id')
    this.personService.getPerson(this.id).subscribe(
      res => {
        this.person = res
      }
    )
  }
  delete(){
    this.personService.deletePerson(this.id).subscribe(
      res => {
        alert('Removido com sucesso!')
        this.cancel()
      }
    )
  }
  cancel(){
    this.router.navigate(['/'])
  }
}
