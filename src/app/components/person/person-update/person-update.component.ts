import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person';
import { PersonService } from 'src/app/services/person.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-person-update',
  templateUrl: './person-update.component.html',
  styleUrls: ['./person-update.component.css']
})
export class PersonUpdateComponent implements OnInit {
  private person:Person
  private id:string
  constructor(private personService:PersonService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id')
    this.personService.getPerson(this.id).subscribe(
      res => {
        this.person = res
      }
    )
  }
  update(){
    this.personService.updatePerson(this.id, this.person).subscribe(
      res => {
        alert('Atualizado com sucesso!')
      }
    )
  }
  cancel(){
    this.router.navigate(['/'])
  }
}
