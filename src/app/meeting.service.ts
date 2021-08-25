import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, Subject, Subscriber } from 'rxjs';
import { Student } from './student';

@Injectable({
  providedIn: 'root',
})
export class MeetingService {
  baseUrl = 'hhttp://3.144.112.125:8082/meetingURL';
  // private _obs = new Subject<string>();
  // url$ = this._obs.asObservable();

  constructor(private _http: HttpClient) {}

  httpOptions = {
    Headers: new HttpHeaders({
      'Content-type': 'application/json',
    }),
  };

  SetMeeting(meetingURL: string, date: Date, teachID: number) {
    this._http
      .post<any>(this.baseUrl, {
        meetingURL,
        date,
        teachID,
      })
      .subscribe();
  }
}
