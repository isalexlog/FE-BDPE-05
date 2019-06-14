import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ModuleDto} from '../dto/ModuleDto';

@Injectable({
  providedIn: 'root'
})
export class ModuleService {

  private modulesUrl = '/api/modules';

  constructor(private httpClient: HttpClient) { }

  getModules(groupId: number): Observable<ModuleDto[]> {
    return this.httpClient.get<ModuleDto[]>(`${this.modulesUrl}?groupId=${groupId}`);
  }
}
