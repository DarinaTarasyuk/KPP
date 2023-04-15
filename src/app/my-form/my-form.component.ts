import { Component, OnInit } from '@angular/core';
import { Good } from './Class/goods';
import { Validators } from '@angular/forms';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms';
import { priceValidator } from './Services/priceValidator';
import { ValidatorCountService } from './Services/validatorCount.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.scss'],
})
export class MyFormComponent implements OnInit {
  //не присвоєне значення, тобто змінна underfined
  goodsForm!: FormGroup;
  goods!:Good;
  
  constructor(private fb: FormBuilder, private alertController: AlertController) { 
    this.goodsForm = this.fb.group({
      goodName: ['', [Validators.required]],
      goodCount: ['', [Validators.required]],
      goodUnit: ['', [Validators.required]],
      goodPrice: ['', [priceValidator()]],
      manufacturer: new FormArray([new FormControl()]),
    });
  }

  //додавання
  addManuf(){
    console.log("Add");
    (this.goodsForm.controls['manufacturer'] as FormArray).push(
    new FormControl())
  }

  //видалення
  deleteManuf(i:any){
    console.log('Delete');
    (this.goodsForm.controls['manufacturer'] as FormArray).removeAt(i)
  }

  //повернення списку контролів як FormArray
  getControls(){
    return (this.goodsForm.get('manufacturer') as FormArray).controls;
  }

  //збереження форми
  OnSubmit(){
    let name = this.goodsForm.value.goodName;
    let count = this.goodsForm.value.goodCount;
    let unit = this.goodsForm.value.goodUnit;
    let price = this.goodsForm.value.goodPrice;
    let manuf = this.goodsForm.value.manufacturer;
    let valid = new ValidatorCountService;
    if (valid.validate_count(count)) {
      this.goods = new Good(name,count,unit, price, manuf)
      console.log("Submit");
      console.log(this.goods);
    }
    else this.presentAlert();
  }

  async presentAlert(){
    const alert = await this.alertController.create({
      header:'Помилка',
      subHeader: ' ',
      message: "Кількість товару повинна бути додатньою та цілим числом",
      buttons:['OK'],
    });
    await alert.present();
  }

  ngOnInit() {}

}
