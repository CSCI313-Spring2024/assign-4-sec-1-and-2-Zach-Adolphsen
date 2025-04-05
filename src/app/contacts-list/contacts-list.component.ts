import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contacts-list',
  imports: [CommonModule, FormsModule, RouterOutlet, RouterLink],
  templateUrl: './contacts-list.component.html',
  styleUrl: './contacts-list.component.css',
})
export class ContactsListComponent {
  contactService = inject(ContactService);

  contacts: Contact[] = [];

  ngOnInit() {
    this.contacts = this.contactService.contacts;
  }

  onDeleteAccount(email: string) {
    this.contactService.deleteContact(email);
  }
}
