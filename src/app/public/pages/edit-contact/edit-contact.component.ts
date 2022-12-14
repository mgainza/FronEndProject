import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IContact } from 'src/app/core/interfaces/contact';
import { ContactService } from 'src/app/core/services/contact.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.scss']
})
export class EditContactComponent implements OnInit {

  id: number | undefined

  constructor(private contactService: ContactService, private router: Router, private route: ActivatedRoute ) { }



  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log(params)
      this.id = params['id'];
      this.contactService.getContactDetails(this.id!).then(r => this.contact = r);
      console.log(this.id)
    })
  }



  contact: IContact = {
    id: 0,
    name: "",
    telephoneNumber: "",
    cellPhoneNumber: "",
    description: "",
  }

  isEdit: boolean = false;

  updateContact(editForm : NgForm): void {
    if (editForm.errors !== null) return
    const res = this.contactService.updateContact(editForm.value)
    console.log(res)
    this.router.navigate(["/contacts"]);
    console.log(editForm.value)
  }

}
