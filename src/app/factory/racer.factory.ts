import { Injectable } from '@angular/core';

import { Racer } from '../model/racer.model';

@Injectable()
export class RacerFactory {
    newInstance(): Racer {
        return new Racer();
    }

    newInstanceFromJSON(json: any): Racer {
        const r: Racer = this.newInstance();
        if (!json) {
            return null;
        }
        r.id = Number(json.racer_id);
        r.name =  json.name;
        r.lifetimeLapCount = Number(json.lifetimeLapCount);
        r.uid = json.uid;
        r.scale = json.scale;
        r.chassis = json.chassis;
        r.rClass = json.rClass;
        r.make = json.make;
        r.model = json.model;
        r.motor = json.motor;
        r.bestLapTime = json.bestLapTime;
        r.bestLapTimeEventId = json.bestLapTimeEventId;
        r.recentLapCount = json.recentLapCount;

        Object.freeze(r);

        return r;
    }

}
