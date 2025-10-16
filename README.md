# Calendar-and-Task-Planner

A Calendar App with a task manager and a random inspirational quote when a day's tasks are all checked off.

Note: In the future, I will avoid using React Big Calendar. The library made custom styling extremely difficult because its components are tied to a CSS file within node_modules, which overrides any attempted modifications —> even with the !important rule. The only way to adjust styles was to directly edit node_modules/react-big-calendar/lib/css/react-big-calendar.css.

Since I couldn’t commit those changes to Git without removing node_modules from .gitignore, I had to scale back my design plans. After researching, I discovered that many developers encounter the same issue. For projects with significant styling needs, I would choose an alternative calendar library instead. In hindsight, deeper research before implementation would have been beneficial, though given the project’s tight timeline, other libraries might not have been feasible either. What I learned/food for thought! | Abandoned my plans for user profiles and sharing tasks/friending. Apps already exist that do this--will use those for myself!
