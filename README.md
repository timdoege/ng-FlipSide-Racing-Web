# TmRacing


Upgrade:
Currently using ng cli 1.6.3 and Angular 5.1.3

To update to latest version of Angular:
`npm update -D &amp;&amp; npm update -S`

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

Build:
<code>ng build --aot --prod --build-optimizer=false --base-href "/flip/"</code>

Assets:
1. <code>\\galdor\c$\Apps\WCSSupportPhone\Flip</code>: Folder for tmtracks.csv and tmtrackhistory.csv 
1. <code>\\galdor\c$\Apps\WCSSupportPhone\FlipWeb</code>: Dist of ng build

Cleanup
<code>
delete from laps_table where event_id in  (977,1023,722,774,781)
delete from laps_backup_table  where event_id in  (977,1023,722,774,781)
delete from summary_table where event_id in (977,1023,722,774,781)
</code>
## Data model (Flipside Racing)

Data is collected from an offline-version of the Flipside Racing database, served as JSON from here:
http://galdor.tm.dom:8080/TMSupportAlert/misc

For testing, the entities can be placed in the <code>flipside-db.json</code> file.
Serve with json-server (https://www.npmjs.com/package/json-server) from the project root using
<code>json-server --watch db.json</code> (accessible as http://localhost:3000/bestlap etc.)

## Components

1.  Dashboard
1.  Race events overview
1.  Race details
1.  Racers
1.  Racer details
1.  Best laps


