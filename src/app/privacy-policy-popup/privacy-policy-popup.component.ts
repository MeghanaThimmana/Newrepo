import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-privacy-policy-popup',
  templateUrl: './privacy-policy-popup.component.html',
  styleUrls: ['./privacy-policy-popup.component.css']
})
export class PrivacyPolicyPopupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onCloseClicked(){
    localStorage.setItem("dialog","false")
   }

}
