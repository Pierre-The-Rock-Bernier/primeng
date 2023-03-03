import { Component, Input } from '@angular/core';

@Component({
    selector: 'style-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>Following is the list of structural style classes, for theming classes visit <a href="#" [routerLink]="['/theming']">theming</a> page.</p>
        </app-docsectiontext>
        <div class="doc-tablewrapper">
            <table class="doc-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Element</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>p-fileupload</td>
                        <td>Container element</td>
                    </tr>
                    <tr>
                        <td>p-fileupload-buttonbar</td>
                        <td>Header containing the buttons</td>
                    </tr>
                    <tr>
                        <td>p-fileupload-content</td>
                        <td>Content section</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>`
})
export class StyleDocComponent {
    @Input() id: string;

    @Input() title: string;
}
