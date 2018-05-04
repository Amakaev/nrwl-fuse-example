import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class AudienceService {

  constructor(private httpClient: HttpClient) {
  }


  getAudiences(filters): Observable<{}> {
    return this.httpClient.get<{}>('api/audiences',)
  }
}
