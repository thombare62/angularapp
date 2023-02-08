import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-pass-generator',
  templateUrl: './new-pass-generator.component.html',
  styleUrls: ['./new-pass-generator.component.css']
})
export class NewPassGeneratorComponent implements OnInit {
  length = 10;
  includeLetters = true;
  includeNumbers = true;
  includeSpecial = true;
  password = '';

  getPassword() {
    let possibleChars = '';
    if (this.includeLetters) {
      possibleChars += 'abcdefghijklmnopqrstuvwxyz';
    }
    if (this.includeNumbers) {
      possibleChars += '0123456789';
    }
    if (this.includeSpecial) {
      possibleChars += '!@#$%^&*';
    }
    let randomPassword = '';
    for (let i = 0; i < this.length; i++) {
      randomPassword += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
    }
    this.password = randomPassword;
  }
  constructor() { }

  ngOnInit() {
  }

}
