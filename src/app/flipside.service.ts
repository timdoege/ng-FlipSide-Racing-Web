import { RaceEventFactory } from './factory/race-event.factory';
import { RaceEvent } from './model/race-event.model';
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

const apiServer = 'http://localhost:8080';
// const apiServer = 'http://galdor.tm.dom:8080';
const baseUrl = apiServer + '/TMSupportAlert';
const flipsideBaseUrl = baseUrl + '/misc/';  // URL to web api
// const flipsideBaseUrl = 'http://localhost:3000/';  // URL to web api
const flipsideEventsUrl = flipsideBaseUrl + 'events';
const flipsideEventIdUrl = flipsideBaseUrl + 'events/';
// res.header("Access-Control-Allow-Origin", "*");
// res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");


@Injectable()
export class FlipsideService {

  constructor(private http: Http, private raceEventFactory: RaceEventFactory) {}

  getRaceEvents(): Promise<RaceEvent[]> {
    return this.http.get(flipsideEventsUrl)
               .toPromise()
               .then(response => this.handleResponse(response))
               .catch(this.handleError);
 }

 getRaceEvent(): Promise<RaceEvent> {
  console.log('Requesting ', flipsideEventsUrl);
  return this.http.get(flipsideEventsUrl)
             .toPromise()
             .then(response => this.handleResponse(response))
             .catch(this.handleError);
}

private handleResponse(response: any): Promise<any> {
    const rEvents: RaceEvent[] = [];
    console.log('Events received', response, response.json());
    for (const entry of response.json()) {
      let rEvent: RaceEvent;
      rEvent = this.raceEventFactory.newInstanceFromJSON(entry);
      console.log('Pushing event ', rEvent);
      rEvents.push(rEvent);
    }
    return Promise.resolve(rEvents);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
