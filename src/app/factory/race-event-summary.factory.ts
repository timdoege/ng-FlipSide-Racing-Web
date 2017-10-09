import { RaceEventSummary } from './../model/race-event-summary.model';
import { RaceEvent } from './../model/race-event.model';
import { Inject, Injectable } from '@angular/core';

@Injectable()
export class RaceEventSummaryFactory {
    newInstance(): RaceEventSummary {
        return new RaceEventSummary();
    }

    newInstanceFromJSON(json: any): RaceEventSummary {
        const e: RaceEventSummary = this.newInstance();
        if (!json) {
            return null;
        }
        e.event_id = Number(json.event_id);
        e.event_name =  json.event_name;
        e.date_added = new Date(json.date_added);
        e.race_type = json.race_type;
        e.num_laps = Number(json.num_laps);
        e.best_time = Number(json.best_time);
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
