import { Component, inject, input } from '@angular/core';
import { ContactService } from '../contact.service';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-new-contact',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './new-contact.component.html',
  styleUrl: './new-contact.component.css',
})
export class NewContactComponent {
  contactService = inject(ContactService);

  onCreateContact(fName: string, lName: string, number: string, email: string) {
    this.contactService.addContact(fName, lName, number, email);
  }
}
