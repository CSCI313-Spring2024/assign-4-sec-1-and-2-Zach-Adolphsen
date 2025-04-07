import { Component, inject, input, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { contacts } from '../contact-data';
import { Contact } from '../contact';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-component',
  imports: [RouterLink, RouterOutlet, RouterModule, FormsModule],
  templateUrl: './update-component.component.html',
  styleUrl: './update-component.component.css',
})
export class UpdateComponent {
  contactService = inject(ContactService);
  email = input.required<string>();

  contact!: Contact;

  ngOnInit() {
    this.contact = this.contactService.getContactByEmail(this.email());
  }
}
