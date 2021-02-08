import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Member } from '../model/member.model';

@Injectable({
  providedIn: 'root',
})
export class MemberService {
  baseUrl = 'http://localhost:3000/members';
  constructor(private httpClient: HttpClient) {}

  getMembers(): Observable<Member[]> {
    return this.httpClient.get<Member[]>(this.baseUrl);
  }

  registerMember(data: Member): Observable<Member> {
    return this.httpClient.post<Member>(this.baseUrl, data);
  }

  viewMember(id: number): Observable<Member> {
    return this.httpClient.get<Member>(`${this.baseUrl}/${id}`);
  }

  update(id: number, data: any): Observable<Member> {
    return this.httpClient.put<Member>(`${this.baseUrl}/${id}`, data);
  }

  delete(id: number): Observable<Member> {
    return this.httpClient.delete<Member>(`${this.baseUrl}/${id}`);
  }
}
