import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class GovDataService {

  constructor(private http:HttpClient) { }

  getMandiData() {

    let url = 'https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070?api-key=579b464db66ec23bdd0000019a1919a01593448940e8012025024f21&format=json&offset=0&limit=10000';

    return this.http.get(url);

  }


}
