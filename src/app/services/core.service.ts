import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable()
export class CoreService {

  readonly DATA_URL = "https://rickandmortyapi.com/api/character/";

  constructor(private _httpClient: HttpClient) { }

  getData(){
    return this._httpClient.get(this.DATA_URL);
  }

}