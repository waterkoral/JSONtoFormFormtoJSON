import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-basicform',
  templateUrl: './basicform.component.html',
  styleUrls: ['./basicform.component.css']
})
export class BasicformComponent implements OnInit {

  myForm: FormGroup;
  myFormTemp:string;
  jsonEmpty: boolean;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      name:['',[
        Validators.required,
      ]],
      gender:['',[
        Validators.required
      ]],
      lifestory:['',[
        Validators.required
      ]],
      dob:['',[
        Validators.required
      ]]
    })
    this.myFormTemp = JSON.stringify(this.myForm.value, undefined, 4);
    this.jsonEmpty = true;
  }

  onJsonConvert(): void {
    let json:string = JSON.stringify(this.myForm.value, undefined, 4);
    this.onKey(json)
    this.myFormTemp = json;
  }

  onFormConvert(value: string): void {
    const json = JSON.parse(value)
    console.log(json);
    this.myForm = this.fb.group({
      name:[json.name,[
        Validators.required,
      ]],
      gender:[json.gender,[
        Validators.required
      ]],
      lifestory:[json.lifestory,[
        Validators.required
      ]],
      dob:[json.dob,[
        Validators.required
      ]]
    })
  }

  onKey(value: any): void {
    let obj: any = JSON.parse(value);
    console.log(obj)
    if (obj.name != '' && (obj.gender == 'male' || obj.gender == 'female') && obj.lifestory != '' && obj.dob != ''){
      this.jsonEmpty = false;
    }
    else {
      this.jsonEmpty = true;
    }
  }
}
