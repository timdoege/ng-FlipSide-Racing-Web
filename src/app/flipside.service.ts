import { RaceEventSummaryFactory } from './factory/race-event-summary.factory';
import { RaceEventSummary } from './model/race-event-summary.model';
import { RaceEventFactory } from './factory/race-event.factory';
import { RaceEvent } from './model/race-event.model';
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { HttpClient, HttpParams } from '@angular/common/http';

import 'rxjs/add/operator/toPromise';

const apiServer = 'http://localhost:8080';
// const apiServer = 'http://galdor.tm.dom:8080';
const baseUrl = apiServer + '/TMSupportAlert';
const flipsideBaseUrl = baseUrl + '/misc/';  // URL to web api
// const flipsideBaseUrl = 'http://localhost:3000/';  // URL to web api
const flipsideEventsUrl = flipsideBaseUrl + 'events';

@Injectable()
export class FlipsideService {

  constructor(private httpc: HttpClient, private http: Http,
    private raceEventFactory: RaceEventFactory, private raceEventSummaryFactory: RaceEventSummaryFactory) { }

    getRaceEvents(pageSize: number, page: number, sort: number): Promise<RaceEvent[]> {
      return this.getRaceEventsClient(pageSize, page, sort);
    }
  private getRaceEventsClient(pageSize: number, page: number, sort: number): Promise<RaceEvent[]> {
    let params = new HttpParams();
    params = params.append('pageSize', String(pageSize));
    params = params.append('page', String(page));
    params = params.append('sort', String(sort));
    return this.httpc.get(flipsideEventsUrl, { params: params })
      .toPromise()
      .then(response => this.handleGetRaceEventsResponse(response))
      .catch(this.handleError);
    }
  private getRaceEventsHttp(): Promise<RaceEvent[]> {
    return this.http.get(flipsideEventsUrl)
      .toPromise()
      .then(response => this.handleGetRaceEventsResponse(response))
      .catch(this.handleError);
  }

  getRaceEventById(id: number): void {
    console.log('Get ', id);
    this.http.get('https://api.github.com/users/seeschweiler').subscribe(data => {
      console.log(data);
    });
  }
  getRaceEvent(id: number): Promise<RaceEventSummary[]> {
    return this.http.get(flipsideEventsUrl + '/' + id)
      .toPromise()
      .then(response => this.handleGetRaceSummaryResponse(response))
      .catch(this.handleError);
  }

  private handleGetRaceEventsResponse(response: any): Promise<any> {
    const rEvents: RaceEvent[] = [];
    // console.log('Events received', response, response.json());
    for (const entry of response) {
      let rEvent: RaceEvent;
      rEvent = this.raceEventFactory.newInstanceFromJSON(entry);
      rEvents.push(rEvent);
    }
    return Promise.resolve(rEvents);
  }

  private handleGetRaceSummaryResponse(response: any): Promise<any> {

    const rSummary: RaceEventSummary[] = [];
    // console.log('Events received', response, response.json());
    for (const entry of response.json()) {
      let rSum: RaceEventSummary;
      rSum = this.raceEventSummaryFactory.newInstanceFromJSON(entry);
      rSummary.push(rSum);
    }
    return Promise.resolve(rSummary);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
