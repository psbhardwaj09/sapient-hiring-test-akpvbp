import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-check-box-container',
  templateUrl: './check-box-container.component.html',
  styleUrls: ['./check-box-container.component.css']
})
export class CheckBoxContainerComponent implements OnInit {

  @Input('filterData') data;
  @Output('onCheckValChanged') onCheckValChanged = new EventEmitter();
  modelVal;

  constructor() { }

  ngOnInit() {
  }

  onChange(type, id, value){
    this.onCheckValChanged.emit({type, id, value});
  }

}