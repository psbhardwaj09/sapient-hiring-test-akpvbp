import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class FiltersService {

  constructor() { }

  private get species(){
    return {
      header: "Species",
      categories: [  "Human", "Mytholog", "Other Species" ]
    }
  }

  private get genders(){
    return {
      header: "Gender",
      categories: [  "Male", "Female"]
    }
  }

  private get origin(){
    return {
      header: "Origin",
      categories: [  "Unknown", "Post-Apocalyptic Earth", "Nuptia", "Other Origins" ]
    }
  }

  get filters(){
    return [this.species, this.genders, this.origin];
  }

}