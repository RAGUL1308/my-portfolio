import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import emailjs from 'emailjs-com';


@Component({
  selector: 'app-contact',
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  isLoading = false; // 👈 loader flag
  showStatus = false;
  statusMessage = '';
  statusColor = '';

  showToast(message: string, success: boolean = true) {
    this.statusMessage = message;
    this.statusColor = success ? '#28CD41' : '#FF3B30'; // Green or Red
    this.showStatus = true;

    setTimeout(() => {
      this.showStatus = false;
    }, 3000);
  }
  sendEmail(event: Event) {
    event.preventDefault(); // Prevent default form submit
    this.isLoading = true;
  
    emailjs.sendForm(
      'service_mn3n6wm',
      'template_31dx5z1',
      event.target as HTMLFormElement,
      'JKp88OpaRSb9I0T-u'
    ).then(
      () => {
        this.showToast('Sent successfully!', true);
        (event.target as HTMLFormElement).reset();
        this.isLoading = false;
      },
      (error) => {
        this.showToast('Failed to send. Try again.', false);
        this.isLoading = false;
      }
    );
  }
  
  
}
