// Example from here: http://nyintergroup.com/meetings/?tsml-day=any&tsml-attendance_option=active
// We want to see all meetings in the East Village on Wednesdays
// on or after 4:00pm
SELECT day,time,name,location,address,neighborhood,COUNT(name) AS num_meetings //adding column with the number of meetings
FROM aa_meetings
WHERE day='Wednesdays' AND neighborhood='East Village' AND time>=timestamp'4:00pm'
// time needs to be converted in a function
// time can be recorded differently, 8.5 instead of 8:30am, 13.5 instead of 1:30pm.
// GROUP BY
// HAVING
GROUP BY name // you can group on multiple columns — for example day or time
ORDER BY time // default is ascending
;