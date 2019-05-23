import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ModelType} from '../constants/constants';

@Injectable({
  providedIn: 'root'
})
export class CabinetHttpService {
  constructor(private httpClient: HttpClient) {}

  public getData(endPoint: string): Observable<ModelType[]> {
    return this.httpClient.get<ModelType[]>(endPoint);
  }
}
