import { Component } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [MatCheckboxModule, CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  inputReq: boolean = false;
  inputOk: boolean = false;

  inputName: boolean = false;
  inputMail: boolean = false;
  inputMessage: boolean = false;

  activateBtn: boolean = false;

  contactData = {
    name: "",
    email: "",
    message: ""
  }

  checkInput(para: boolean) {
    console.log(para);
    
    if (this.contactData.name == " " || this.contactData.email == " " || this.contactData.message == " ") {
      
    }
  }

  onSubmit() {
    console.log(this.contactData);
    console.log('Test');
    
  }
}
