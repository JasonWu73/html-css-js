import '../css/style.css';

import ProjectInput from "./ProjectInput";
import ProjectList from "./ProjectList";
import { ProjectStatus } from "./ProjectState";

new ProjectInput();
new ProjectList(ProjectStatus.Active);
new ProjectList(ProjectStatus.Finished);
