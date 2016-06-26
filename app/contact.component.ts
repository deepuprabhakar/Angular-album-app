import { Component } from 'angular2/core';
import { ControlGroup, Control, Validators, FormBuilder } from 'angular2/common';
import { Router, CanDeactivate } from 'angular2/router';

@Component({
    selector: 'contact',
    templateUrl: 'app/contact.component.html'
})

export class ContactComponent implements CanDeactivate{
    form: ControlGroup;

    constructor(private _router: Router, fb: FormBuilder){
        this.form = fb.group({
            name: ['', Validators.required],
            comment: ['', Validators.required]
        })
    }

    onSubmit(){
        console.log(this.form.value);
        this._router.navigate(['Albums']);
    }

    routerCanDeactivate(next, prev){
        if(!this.form.dirty)
            return confirm("Are you sure?");
    }
}