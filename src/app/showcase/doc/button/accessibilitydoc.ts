import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'accessibility-doc',
    template: ` <app-developmentsection>
        <app-docsectiontext [title]="title" [id]="id">
            <h3>Screen Reader</h3>
            <p>
                Button component renders a native button element that implicitly includes any passed prop. Text to describe the button is defined with the <i>ariaLabel</i> property, if not present <i>label</i> property is used as the value. If the button is
                icon only or custom templating is used, it is recommended to use <i>ariaLabel</i> so that screen readers would be able to read the element properly.
            </p>
        </app-docsectiontext>
        
        <app-code [code]="code" [hideToggleCode]="true" [hideStackBlitz]="true" [hideCodeSandbox]="true"></app-code>

        <h3>Keyboard Support</h3>
        <div class="doc-tablewrapper">
            <table class="doc-table">
                <thead>
                    <tr>
                        <th>Key</th>
                        <th>Function</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <i>tab</i>
                        </td>
                        <td>Moves focus to the button.</td>
                    </tr>
                    <tr>
                        <td>
                            <i>enter</i>
                        </td>
                        <td>Activates the button.</td>
                    </tr>
                    <tr>
                        <td>
                            <i>space</i>
                        </td>
                        <td>Activates the button.</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </app-developmentsection>`
})
export class AccessibilityDoc {
    @Input() id: string;

    @Input() title: string;

    code: Code = {
        basic: `
<p-button icon="pi pi-check" ariaLabel="Submit"></p-button>

<p-button icon="pi pi-check" label="Submit"></p-button>

<p-button class="youtube p-0" ariaLabel="Youtube">
    <i class="pi pi-youtube px-2"></i>
    <span class="px-3">Youtube</span>
</p-button>
    `
    };
}
