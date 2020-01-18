import { Component, OnInit } from '@angular/core';
import { CoreService } from './services/core.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  data;
  originalData;
  selectedFilter =[];
  constructor(private _coreService: CoreService) { }

  ngOnInit() {
    this._coreService.getData().subscribe(data => {
      this.originalData = data;
      this.filterData(null, null);
    });
  }

  filterData(filterBy: string, value: string){
    console.log('Filter By: ', filterBy, value)
    if(!filterBy || !value || value == ' ') {
      this.data = this.originalData.results;
    }else{
      filterBy = filterBy.toLowerCase();
      if(filterBy == 'gender'){
        this.data = this.originalData.results.filter(item => item[filterBy] == value);
      }
      else if(filterBy == 'origin'){
        this.data = this.originalData.results.filter(item => item[filterBy]['name'].indexOf(value) > -1);
      }
      else{

      this.data = this.originalData.results.filter(item => item[filterBy].indexOf(value) > -1);
      }
    }
    console.log(this.data);
  }

  filterByName(value){
    this.filterData('name', value);
  }

  onFilterUpdate(selectedFilter){
    for(let i=0; i < selectedFilter.length; i++){
      this.filterData(selectedFilter[i].type, selectedFilter[i].id);
      this.selectedFilter.push(selectedFilter[i].id);
    }
  } 
  
}
