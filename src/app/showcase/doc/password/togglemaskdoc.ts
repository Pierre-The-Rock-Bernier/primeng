import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'password-togglemask-demo',
    template: ` <section>
        <app-docsectiontext [title]="title" [id]="id">
            <p>When <i>toggleMask</i> is present, an icon is displayed to show the value as plain text.</p>
        </app-docsectiontext>
        <div class="card flex justify-content-center">
            <p-password [(ngModel)]="value" [toggleMask]="true"></p-password>
        </div>
        <app-code [code]="code" selector="password-togglemask-demo"></app-code>
    </section>`
})
export class TogglemaskDoc {
    @Input() id: string;

    @Input() title: string;

    value: string;

    code: Code = {
        basic: `
<p-password [(ngModel)]="value" [toggleMask]="true"></p-password>`,

        html: `
<div class="card flex justify-content-center">
    <p-password [(ngModel)]="value" [toggleMask]="true"></p-password>
</div>`,

        typescript: `
import { Component } from '@angular/core';

@Component({
    selector: 'password-togglemask-demo',
    templateUrl: './password-togglemask-demo.html',
    styleUrls: ['./password-togglemask-demo.scss']
})

export class PasswordTogglemaskDemo {
    value: string;
}`
    };
}
