import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

import { Chapter } from './../../shared';

@Component({
  selector: 'app-partition',
  templateUrl: './partition.component.html',
  styleUrls: ['./partition.component.css']
})
export class PartitionComponent implements OnInit {
  @Input() public chapters: Chapter[];
  public selectedChapter = 0;

  public items: MenuItem[] = [];

  constructor() { }

  ngOnInit() {
    this.items = this.chapters.map(document => {
      return {
        label: document.titulo,
        command: (event) => { this.selectChapter(event.item.label); }
      };
    });
  }

  selectChapter(label: string) {
    for (let i = 0; i < this.chapters.length; i++) {
      if (this.chapters[i].titulo === label) {
        this.selectedChapter = i;
      }
    }
  }

  changeItemLabel() {
    this.items[this.selectedChapter].label = this.chapters[this.selectedChapter].titulo;
    console.log(this.chapters[this.selectedChapter]);
  }

}
