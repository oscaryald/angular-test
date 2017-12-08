import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

interface login{
	login: string;
	password: string;
}

@Component({
	moduleId:module.id,
	selector:"form-control-sample",
	templateUrl:"form1.component.html",
	// styleUrls:["http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"]
})

export class Form1Component implements OnInit{
	loginForm: FormGroup;
	errorMessage: string;

	ngOnInit(){
		this.loginForm = new FormGroup({
			login: new FormControl("user1", Validators.required),
			password: new FormControl("", [Validators.required, Validators.minLength(7)])
		});


		if(this.loginForm.get('password').errors.required){
			this.errorMessage = 'test!!!'
		}

		console.log(this.loginForm.value)

	}



	onSubmit(form){
		console.log(form.valid, form.value);
	}
}