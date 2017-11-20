import { Injectable } from '@angular/core';

import { Lap } from './../model/lap.model';



@Injectable()
export class LapFactory {
    newInstance(): Lap {
        return new Lap();
    }
    
    newInstanceFromJSON(json: any): Lap {
        const t: Lap = this.newInstance();
        if (!json) {
            return null;
        }
        // [{"bestLap":4.72,"eventId":990,"eventName":null,"eventDate":"2017-10-17 13:46:19","racerId":4,"racerName":"Knight Rider"},
        t.bestLap = Number(json.bestLap);
        t.eventId = Number(json.eventId);
        t.eventDate = json.eventDate;
        t.racerId = Number(json.racerId);
        t.racerName = json.racerName;
        Object.freeze(t);
        return t;
    }

}
