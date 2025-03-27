import { Component } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [MatCheckboxModule, CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  inputNameOk: boolean = false;
  inputEmailOk: boolean = false;
  inputMessageOk: boolean = false;
  checkboxOk: boolean = false;

  checked: boolean = false;
  inputName: boolean = false;
  inputMail: boolean = false;
  inputMessage: boolean = false;

  activateBtn: boolean = false;

  validDomains: Array<string> = [
    '.com',
    '.net',
    '.org',
    '.info',
    '.biz',
    '.online',
    '.shop',
    '.de',
    '.at',
    '.ch',
    '.fr',
    '.it',
    '.es',
    '.nl',
    '.uk',
    '.us',
    '.ca',
    '.au',
    '.jp',
    '.cn',
    '.ru',
    '.br',
    '.in',
    '.io',
    '.ai',
    '.tech',
    '.xyz',
    '.dev',
  ];
  validMail = /[A-z]/g;

  contactData = {
    name: '',
    email: '',
    message: '',
  };

  checkInputfields(para: boolean) {
    if (
      this.inputNameOk &&
      this.inputEmailOk &&
      this.inputMessageOk &&
      this.checked
    ) {
      this.activateBtn = true;
    } else {
      this.activateBtn = false;
    }
  }

  onSubmit() {
    if (this.activateBtn) {
      console.log(this.contactData);
    }
  }

  checkValue(checkbox: any) {
    this.checked = checkbox.checked;
    if (checkbox == true) {
      this.checkboxOk = true;
    } else {
      this.checkboxOk = false;
    }
    this.checkInputfields(this.checkboxOk);
  }

  checkNameInput(para: boolean): void {
    if (this.contactData.name.length > 3) {
      this.inputName = false;
      this.inputNameOk = true;
    } else {
      this.inputNameOk = false;
    }
    this.checkInputfields(this.checkboxOk);
  }

  checkEmailInput(para: boolean): void {
    if (
      this.contactData.email.length > 3 &&
      this.contactData.email.match(this.validMail) &&
      this.contactData.email.includes('@') &&
      this.validDomains.some((domains) =>
        this.contactData.email.includes(domains)
      )
    ) {
      this.inputMail = false;
      this.inputEmailOk = true;
    } else {
      this.inputEmailOk = false;
    }
    this.checkInputfields(this.checkboxOk);
  }

  checkMsgInput(para: boolean): void {
    if (this.contactData.message.length > 3) {
      this.inputMessage = false;
      this.inputMessageOk = true;
    } else {
      this.inputMessageOk = false;
    }
    this.checkInputfields(this.checkboxOk);
  }
}
