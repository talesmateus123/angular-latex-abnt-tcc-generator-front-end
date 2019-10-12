import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person';
import { PersonService } from 'src/app/services/person.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-person-create',
  templateUrl: './person-create.component.html',
  styleUrls: ['./person-create.component.css']
})
export class PersonCreateComponent implements OnInit {
    private person:Person = {
    id:null,
    nome:'',
    tipoPessoa:'',
    email:'',
    senha:''
  }

  private id:string
  constructor(private personService:PersonService, private route: ActivatedRoute, private router: Router){

  }

  ngOnInit() {
  }
  create(){
    this.personService.createPerson(this.person).subscribe(
      res => {

      }
    )
  }
  cancel(){
    this.router.navigate(['/'])
  }

}


