import { Injectable } from '@angular/core';

import { Track } from './../model/track.model';


@Injectable()
export class TrackFactory {
    newInstance(): Track {
        return new Track();
    }

    newInstanceFromJSON(json: any): Track {
        const t: Track = this.newInstance();
        if (!json) {
            return null;
        }
        t.trackId = Number(json.trackId);
        t.name = json.name;
        t.description = json.description;
        t.fromDate = new Date(json.fromDate).toLocaleString();
        t.toDate = json.toDate ? new Date(json.toDate).toLocaleString() : 'now';
        if (json.bestLapRacerId && json.bestLapEventId && json.bestLapTime) {
            t.bestLapRacerId = Number(json.bestLapRacerId);
            t.bestLapEventId = Number(json.bestLapEventId);
            t.bestLapTime = Number(json.bestLapTime);
        }
        Object.freeze(t);
        return t;
    }

}
