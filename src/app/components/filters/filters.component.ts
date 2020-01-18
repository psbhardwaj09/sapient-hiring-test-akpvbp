import { Component, OnInit, Output,  EventEmitter} from '@angular/core';

import { FiltersService } from './../../services/filters.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  @Output('selectedFilters') selectedFilter = new EventEmitter();
  filter;
  selectedFilters = [];
  
  constructor(private _filterService: FiltersService ) { }

  ngOnInit() {
    this.filter = this._filterService.filters;
  }

  onCheckValChanged(data){
    if(data.value){
      this.selectedFilters.push(data)
    }else{
      let index = this.selectedFilters.indexOf(data.id);
      this.selectedFilters.splice(index, 1);
    }
    this.selectedFilter.emit(this.selectedFilters);
  }

}