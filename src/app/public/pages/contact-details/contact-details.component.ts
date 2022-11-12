import {Component, OnInit} from '@angular/core';
import {Contact} from "../../../core/interfaces/contact";
import {ContactService} from "../../../core/services/contact.service";
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {

  contact: Contact | undefined
  id: number | undefined

  constructor(private contactService: ContactService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
    })
    this.getContactDetails(this.id!)
  }

  getContactDetails(id: number) {
    this.contactService.getContactDetails(id).then(r => this.contact = r);
  }

}
