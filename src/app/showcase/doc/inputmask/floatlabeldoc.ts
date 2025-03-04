import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'inputmask-floatlabel-demo',
    template: ` <section>
        <app-docsectiontext [title]="title" [id]="id">
            <p>A floating label appears on top of the input field when focused.</p>
        </app-docsectiontext>
        <div class="card flex justify-content-center">
            <span class="p-float-label">
                <p-inputMask mask="999-99-9999" [(ngModel)]="value" id="ssn_input"></p-inputMask>
                <label htmlFor="ssn_input">SSN</label>
            </span>
        </div>
        <app-code [code]="code" selector="inputmask-floatlabel-demo"></app-code>
    </section>`
})
export class FloatlabelDoc {
    @Input() id: string;

    @Input() title: string;

    value: string;

    code: Code = {
        basic: `
<span class="p-float-label">
    <p-inputMask mask="999-99-9999" [(ngModel)]="value" id="ssn_input"></p-inputMask>
    <label htmlFor="ssn_input">SSN</label>
</span>`,

        html: `
<div class="card flex justify-content-center">
    <span class="p-float-label">
    <p-inputMask mask="999-99-9999" [(ngModel)]="value" id="ssn_input"></p-inputMask>
    <label htmlFor="ssn_input">SSN</label>
    </span>
</div>`,

        typescript: `
import { Component } from '@angular/core';

@Component({
    selector: 'inputmask-floatlabel-demo',
    templateUrl: './inputmask-floatlabel-demo.html',
    styleUrls: ['./inputmask-floatlabel-demo.scss']
})
export class InputmaskFloatlabelDemo {
    value: string;
}`
    };
}
