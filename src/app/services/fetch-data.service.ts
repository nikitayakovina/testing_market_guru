import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class FetchDataService {
  constructor(private httpClient: HttpClient) {
    // empty
  }
  public fetchData(): Observable<any> {
    return this.httpClient.get('../../assets/data.json');
  }
}
