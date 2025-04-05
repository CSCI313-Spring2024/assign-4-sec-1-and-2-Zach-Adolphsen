import { Routes } from '@angular/router';
import { NewContactComponent } from './new-contact/new-contact.component';
import { UpdateComponent } from './update-contact/update-component.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/Contacts',
    pathMatch: 'full',
  },
  {
    path: 'NewContact',
    component: NewContactComponent,
  },
  {
    path: 'update/:email',
    component: UpdateComponent,
  },
  {
    path: 'Contacts',
    component: ContactsListComponent,
  },
];
