import { Track } from './track.model';
// To parse this data:
//
//   import { RaceEventSummary } from "./RaceEventSummary;
//   let value: RaceEventSummary[] = JSON.parse(json);

export class RaceEventSummary {
    date_added:   Date;
    num_laps:     number;
    best_lap:     number;
    average_time: number;
    best_time:    number;
    event_name:   string;
    event_id:     number;
    laps_leading: number;
    racer_name:   string;
    race_type:    string;
    rank:         number;
    track: Track;
}
