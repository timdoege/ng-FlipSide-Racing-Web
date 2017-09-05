import { RaceEvent } from './../model/race-event.model';
import { Inject, Injectable } from '@angular/core';

@Injectable()
export class RaceEventFactory {
    newInstance(): RaceEvent {
        return new RaceEvent();
    }

    newInstanceFromJSON(json: any): RaceEvent {
        const e: RaceEvent = this.newInstance();
        if (!json) {
            return null;
        }
        e.id = Number(json.event_id);
        e.name =  json.event_name;
        e.date_added = new Date(json.date_added);
        e.race_type = json.race_type;
        e.num_laps = Number(json.num_laps);
        e.time_limit = Number(json.time_limit);
        e.min_lap_time = Number(json.min_lap_time);
        e.round_type = json.round_type;
        e.rankmethod = json.rankmethod;
        e.racer_name = json.racer_name;
        e.rank = Number(json.rank);
        e.best_lap = Number(json.best_lap);
        e.best_time = Number(json.best_time);
        e.average_time = Number(json.average_time);
        e.laps_leading = Number(json.laps_leading);

        Object.freeze(e);

        return e;
    }

}
