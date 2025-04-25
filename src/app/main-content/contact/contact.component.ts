import { Component, inject, ViewChild } from '@angular/core';
import { MatCheckbox, MatCheckboxModule } from '@angular/material/checkbox';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { DataService } from '../../data.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [MatCheckboxModule, CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  constructor(private dataService: DataService) {}
  daten: any;
  mailTest = true;
  http = inject(HttpClient);
    
  /**
  * Lifecycle hook that initializes component data from the data service.
  */
  ngOnInit() {
    this.daten = this.dataService.getJsonData();
  }
  
  @ViewChild('myCheckbox') myCheckbox!: MatCheckbox;

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

  /**
  * Enables or disables the submit button based on input and checkbox validation.
  * @param para - Current checkbox state.
  */
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

  post = {
    endPoint: 'https://niclas-holzhey.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  /**
  * Handles form submission and sends data if valid.
  * @param ngForm - The Angular form object.
  */
  onSubmit(ngForm: NgForm) {
    if (this.checkNameInput(this.inputName) && this.checkEmailInput(this.inputMail) && this.checkMsgInput(this.inputMessage) && this.checkValue(this.checked)) {
      if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
        this.http.post(this.post.endPoint, this.post.body(this.contactData))
          .subscribe({
            next: (response) => {
              ngForm.resetForm();
            },
            error: (error) => {
              console.error(error);
            },
            complete: () => console.info('send post complete'),
          });
      } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
        ngForm.resetForm();
        this.checkboxOk = false;
        this.inputNameOk = false;
        this.inputEmailOk = false;
        this.inputMessageOk = false;
        this.checked = false;
        this.myCheckbox.checked = false; // uncheckt sie beim Start
      }
    } else {
      this.checkNameInput(this.inputName);
      this.checkEmailInput(this.inputMail);
      this.checkMsgInput(this.inputMessage);
      this.checkValue(this.checked);
    }
  }

  /**
  * Updates checkbox state and revalidates inputs.
  * @param checkbox - The checkbox input element.
  */
  checkValue(checkbox: any) {
    if (checkbox.checked == false || checkbox.checked == true) {
      this.checked = checkbox.checked
    };
    this.checkInputfields(this.checkboxOk);
    if (this.checked == true) {
      this.checkboxOk = false;
      return true;
    } else {
      this.checkboxOk = true;
      return false;
    }
  }

  /**
  * Validates the name input field.
  * @param para - Checkbox validation state.
  */
  checkNameInput(para: boolean): boolean {
    if (this.contactData.name.length > 3) {
      this.inputName = false;
      this.inputNameOk = true;
      this.checkInputfields(this.inputNameOk);
      return true;
    } else {
      this.inputNameOk = false;
      this.checkInputfields(this.inputNameOk);
      return false;
    }
  }

  /**
  * Validates the email input field.
  * @param para - Checkbox validation state.
  */
  checkEmailInput(para: boolean): boolean {
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
      this.checkInputfields(this.inputEmailOk);
      return true;
    } else {
      this.inputEmailOk = false;
      this.checkInputfields(this.inputEmailOk);
      return false;
    }
  }

  /**
  * Validates the message input field.
  * @param para - Checkbox validation state.
  */
  checkMsgInput(para: boolean): boolean {
    if (this.contactData.message.length > 3) {
      this.inputMessage = false;
      this.inputMessageOk = true;
      this.checkInputfields(this.inputMessageOk);
      return true;
    } else {
      this.inputMessageOk = false;
      this.checkInputfields(this.inputMessageOk);
      return false;
    }
  }
}
