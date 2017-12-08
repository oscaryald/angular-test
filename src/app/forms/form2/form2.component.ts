import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { User } from "../user";
import { emailValidator, rangeValidator, requiredCustom } from "./custom-validators";

@Component({
	moduleId: module.id,
	selector:"custom-validators",
	templateUrl:"form2.component.html",
})

export class Form2Component implements OnInit{

	userForm: FormGroup;
	user: User = new User();

	roles: string[] = ["Guest", "Moderator", "Admin"];

	formErrors = {
		name:'',
		age:'',
		email:'',
		role:''
	}

	validationMessages = {
		name: {
            required: "Обязательное поле.",
            minlength: "Значение должно быть не менее 4х символов.",
            maxlength: "Значение не должно быть больше 15 символов."
        },
        email: {
            required: "Обязательное поле.",
            emailValidator: "Не правильный формат email адреса."
        },
        role: {
            required: "Обязательное поле."
        },
        age: {
            required: "Обязательное поле.",
            rangeValidator: "Значение должно быть в диапазоне от 10 до 100."
        }
	}

	constructor(private fb: FormBuilder){}

	ngOnInit(){
		this.buildForm();
	}

	buildForm(){

		this.userForm = this.fb.group({
            "name": [this.user.name, [
                requiredCustom, // custom required
                Validators.minLength(4),
                Validators.maxLength(15)
            ]],
            "email": [this.user.email, [
                Validators.required,
                emailValidator // использование пользовательского валидатора
            ]],
            "role": [this.user.role, [
                Validators.required
            ]],
            "age": [this.user.age, [
                Validators.required,
                rangeValidator(10, 100)
            ]]
        });

        this.userForm.valueChanges
            .subscribe(data => this.onValueChange(data));

        this.onValueChange();

	}

	onValueChange(data?: any){

		if(!this.userForm) return;
		let form = this.userForm;

		for (let field in this.formErrors){
			this.formErrors[field] = "";
			let control = form.get(field);

			if(control && control.dirty && !control.valid){
				let message = this.validationMessages[field];
				
				for(let key in control.errors){
					this.formErrors[field] += message[key] + " ";

					console.log(control.errors)
				}
			}
		}
	}

	onSubmit() {
        console.log("submitted");
        console.log(this.userForm.value);
    }
}