import { Injectable, signal } from '@angular/core';
import { contacts } from './contact-data';
import { Contact } from './contact';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor() {}

  contacts = contacts;

  addContact(fName: string, lName: string, phoneNumber: string, email: string) {
    this.contacts.push({ fName, lName, phoneNumber, email });
  }

  deleteContact(email: string) {
    const index = this.contacts.findIndex((contact) => contact.email === email);
    this.contacts.splice(index, 1);
  }

  getContactByEmail(email: string): Contact {
    return this.contacts.filter((contact) => contact.email == email)[0];
  }
}
