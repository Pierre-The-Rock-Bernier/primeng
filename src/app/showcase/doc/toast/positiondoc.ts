import { Component, Input } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Code } from '../../domain/code';

@Component({
    selector: 'toast-position-demo',
    template: ` <section>
        <app-docsectiontext [title]="title" [id]="id">
            <p>Location of the toast is customized with the <i>position</i> property. Valid values are <i>top-left</i>, <i>top-center</i>, <i>top-right</i>, <i>bottom-left</i>, <i>bottom-center</i>, <i>bottom-right</i> and <i>center</i>.</p>
        </app-docsectiontext>
        <div class="card flex justify-content-center gap-2">
            <p-toast position="top-left" key="tl"></p-toast>
            <p-toast position="top-center" key="tc"></p-toast>
            <p-toast position="bottom-center" key="bc"></p-toast>
            <button type="button" pButton pRipple (click)="showTopLeft()" label="Top Left"></button>
            <button type="button" pButton pRipple (click)="showTopCenter()" label="Top Center" class="p-button-warning"></button>
            <button type="button" pButton pRipple (click)="showBottomCenter()" label="Bottom Center" class="p-button-success"></button>
        </div>
        <app-code [code]="code" selector="toast-position-demo"></app-code>
    </section>`,
    providers: [MessageService]
})
export class ToastPositionDemo {
    @Input() id: string;

    @Input() title: string;

    constructor(private messageService: MessageService) {}

    showTopLeft() {
        this.messageService.add({ key: 'tl', severity: 'info', summary: 'Info', detail: 'Message Content' });
    }

    showTopCenter() {
        this.messageService.add({ key: 'tc', severity: 'warn', summary: 'Warn', detail: 'Message Content' });
    }

    showBottomCenter() {
        this.messageService.add({ key: 'bc', severity: 'success', summary: 'Success', detail: 'Message Content' });
    }

    code: Code = {
        basic: `
<p-toast></p-toast>
<button type="button" pButton pRipple (click)="showSuccess()" label="Success" class="p-button-success"></button>
<button type="button" pButton pRipple (click)="showInfo()" label="Info" class="p-button-info"></button>
<button type="button" pButton pRipple (click)="showWarn()" label="Warn" class="p-button-warning"></button>
<button type="button" pButton pRipple (click)="showError()" label="Error" class="p-button-danger"></button>`,
        html: `
<div class="card flex justify-content-center gap-2">
    <p-toast></p-toast>
    <button type="button" pButton pRipple (click)="showSuccess()" label="Success" class="p-button-success"></button>
    <button type="button" pButton pRipple (click)="showInfo()" label="Info" class="p-button-info"></button>
    <button type="button" pButton pRipple (click)="showWarn()" label="Warn" class="p-button-warning"></button>
    <button type="button" pButton pRipple (click)="showError()" label="Error" class="p-button-danger"></button>
</div>`,
        typescript: `
import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
    selector: 'toast-position-demo',
    templateUrl: './toast-position-demo.html',
    providers: [MessageService]
})
export class ToastPositionDemo {

    constructor(private messageService: MessageService) {}

    showTopLeft() {
        this.messageService.add({ key: 'tl', severity: 'info', summary: 'Info', detail: 'Message Content' });
    }

    showTopCenter() {
        this.messageService.add({ key: 'tc', severity: 'warn', summary: 'Warn', detail: 'Message Content' });
    }

    showBottomCenter() {
        this.messageService.add({ key: 'bc', severity: 'success', summary: 'Success', detail: 'Message Content' });
    }
}`,
        module: `
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ToastModule } from 'primeng/toast';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { ToastDemo } from './toastdemo';

@NgModule({
    imports: [CommonModule, ToastModule, ButtonModule, RippleModule],
    declarations: [ToastDemo]
})
export class ToastDemoModule {}`
    };
}
