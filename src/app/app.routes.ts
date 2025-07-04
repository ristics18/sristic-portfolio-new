import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { AssistantAiComponent } from './assistant-ai/assistant-ai.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'project/:id', component: ProjectDetailsComponent},
  { path: 'contact', component: ContactComponent },
  { path: 'ai-assistant', component: AssistantAiComponent },
  { path: '**', component: HomeComponent },
];
