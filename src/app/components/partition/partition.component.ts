import { Component, Input, OnInit } from '@angular/core';
import { Document } from 'src/app/models/document';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-partition',
  templateUrl: './partition.component.html',
  styleUrls: ['./partition.component.css']
})
export class PartitionComponent implements OnInit {
  @Input() private document:Document
  private items: MenuItem[];
  constructor() { }

  ngOnInit() {
    this.items = [
      {
        label: 'Capítulo 1',
        items: [
          {
            label: 'Seção 1',
          },
          {
            label: 'Seção 2',
            items:[
              {
                label: 'Subseção 1'
              }
            ]
          }
          //{separator: true}
          //{label: 'Quit', icon: 'pi pi-fw pi-times'}
        ]
      }
    ]
  }

}
