# Calendar-and-Task-Planner

A Calendar App with a task manager and a random inspirational quote when a day's tasks are all checked off

#What I would have changed

In the future, I will not be using React Big Calendar because it made unique styling of the calendar virtually impossible because the library's components are linked to a css file in node modules that overrode much of my desired style changes. Oddly, the !important operator could not override the styling, and the only way I could change the file was to alter the styling within nodemodules/react-big-calendar/lib/css/react-big-calendar.css.
Because I couldn't push these changes to git without taking node modules outside of git ignore, which is frowned upon, I decided to negate most of my styling aspirations. In researching the problem, I found that many others have had this same problem, so with lofty styling goals, I would not use React-Big-Calendar again.