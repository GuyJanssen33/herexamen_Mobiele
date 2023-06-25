import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {Plant} from "../Datatypes/Plant";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  /*readonly #apiKey = environment.theOneApiKey;*/
  readonly #baseURL = 'https://api-production-f861.up.railway.app/moestuin';

  constructor(private httpClient: HttpClient) {
  }

  getPlant(): Observable<Plant[]> {
    return this.httpClient.get<Plant[]>(`${this.#baseURL}`)
  }

  getPlantById(id: string): Observable<Plant> {
    return  this.httpClient.get<Plant>(`${this.#baseURL}/${id}`);
  }
}
