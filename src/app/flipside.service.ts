
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { RaceEventSummaryFactory } from './factory/race-event-summary.factory';
import { RaceEventFactory } from './factory/race-event.factory';
import { RacerFactory } from './factory/racer.factory';
import { RaceEventSummary } from './model/race-event-summary.model';
import { RaceEvent } from './model/race-event.model';
import { Racer } from './model/racer.model';

const apiServer = 'http://localhost:8080';
// const apiServer = 'http://galdor.tm.dom:8080';
const baseUrl = apiServer + '/TMSupportAlert';
const flipsideBaseUrl = baseUrl + '/misc/';  // URL to web api
// const flipsideBaseUrl = 'http://localhost:3000/';  // URL to web api
const flipsideEventsUrl = flipsideBaseUrl + 'events';
const flipsideRacerLapsUrl = flipsideBaseUrl + 'statistics_racer';
const flipsideRacersUrl = flipsideBaseUrl + 'racers';

@Injectable()
export class FlipsideService {

  constructor(private httpc: HttpClient, private http: Http,
    private raceEventFactory: RaceEventFactory, private raceEventSummaryFactory: RaceEventSummaryFactory,
    private racerFactory: RacerFactory) { }

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


  getRacerLaps(): Promise<Racer[]> {
    return this.httpc.get(flipsideRacerLapsUrl)
      .toPromise()
      .then(response => this.handleGetRacerLapsResponse(response))
      .catch(this.handleError);
  }

  private handleGetRacerLapsResponse(response: any): Promise<any> {
    const res: Racer[] = [];
    for (const entry of response) {
      let r: Racer;
      r = this.racerFactory.newInstanceFromJSON(entry);
      res.push(r);
    }
    return Promise.resolve(res);
  }

  getRacers(): Promise<Racer[]> {
    return this.httpc.get(flipsideRacersUrl)
      .toPromise()
      .then(response => this.handleGetRacersResponse(response))
      .catch(this.handleError);
  }

  private handleGetRacersResponse(response: any): Promise<any> {
    const res: Racer[] = [];
    for (const entry of response) {
      let r: Racer;
      r = this.racerFactory.newInstanceFromJSON(entry);
      res.push(r);
    }
    return Promise.resolve(res);
  }

}
