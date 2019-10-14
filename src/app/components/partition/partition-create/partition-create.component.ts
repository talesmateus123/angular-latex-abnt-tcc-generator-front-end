import { Component, OnInit } from '@angular/core';
import { Partition } from 'src/app/models/partition';

@Component({
  selector: 'app-partition-create',
  templateUrl: './partition-create.component.html',
  styleUrls: ['./partition-create.component.css']
})
export class PartitionCreateComponent implements OnInit {
  private partition:Partition = {
    id:null,
    tipoParticao:'',
    titulo:'',
    conteudo:'',
    document:null,
    data:null
  }
  constructor() { }

  ngOnInit() {
  }

}
