import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-utente',
    templateUrl: './utente.component.html',
    styleUrls: ['./utente.component.scss']
})
export class UserComponent {
    jsonIn = {
        userType: 'PersonaGiuridica',
        name: '',
        surname: '',
        ragioneSociale: '',
        indirizzo: {
            via: '',
            numeroCivico: 0,
            cap: 0,
            comune: '',
            provincia: '',
            stato: ''
        },
        email: '',
        telefono: '',
        pec: '',
        fax: '',
        maggiorenne: false,
        prodottiInteresse: '',
        sesso: '',
        partitaIva: '',
        codiceFiscale: '',
        rememberMe: false
    }
    @ViewChild('utente') utente!: NgForm;
    showErrors = false;


    constructor(private router: Router) { }

    signIn() {
        if (this.utente.form.invalid) {
            this.showErrors = true;
        } else {
            this.router.navigateByUrl('/home');
        }
    }



}
