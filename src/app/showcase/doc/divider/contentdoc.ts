import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'divider-content-demo',
    template: ` <section>
        <app-docsectiontext [title]="title" [id]="id">
            <p>
                Children are rendered within the boundaries of the divider where location of the content is configured with the align property. In horizontal layout, alignment options are <i>left</i>, <i>center</i> and <i>right</i> whereas vertical
                mode supports <i>top</i>, <i>center</i> and <i>bottom</i>.
            </p>
        </app-docsectiontext>
        <div class="card">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <p-divider align="left">
                <div class="inline-flex align-items-center">
                    <i class="pi pi-user mr-2"></i>
                    <b>Text</b>
                </div>
            </p-divider>

            <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
            </p>

            <p-divider align="center">
                <span class="p-tag">Badge</span>
            </p-divider>

            <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
                officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
            </p>

            <p-divider align="right">
                <p-button label="Button" icon="pi pi-search" styleClass="p-button-outlined"></p-button>
            </p-divider>

            <p>
                Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
                voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Donec vel volutpat ipsum. Integer nunc magna, posuere ut tincidunt eget, egestas vitae sapien. Morbi dapibus luctus odio.
            </p>
        </div>
        <app-code [code]="code" selector="divider-content-demo"></app-code>
    </section>`
})
export class DividerContentDemo {
    @Input() id: string;

    @Input() title: string;

    code: Code = {
        basic: `
<p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>
<p-divider align="left">
    <div class="inline-flex align-items-center">
        <i class="pi pi-user mr-2"></i>
        <b>Text</b>
    </div>
</p-divider>
<p>
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
    voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
</p>
<p-divider align="center">
    <span class="p-tag">Badge</span>
</p-divider>
<p>
    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
    officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
</p>
<p-divider align="right">
    <p-button label="Button" icon="pi pi-search" styleClass="p-button-outlined"></p-button>
</p-divider>
<p>
    Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
    voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Donec vel volutpat ipsum. Integer nunc magna, posuere ut tincidunt eget, egestas vitae sapien. Morbi dapibus luctus odio.
</p>`,

        html: `
<div class="card">
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    <p-divider align="left">
        <div class="inline-flex align-items-center">
            <i class="pi pi-user mr-2"></i>
            <b>Text</b>
        </div>
    </p-divider>
    <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
        voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
    </p>
    <p-divider align="center">
        <span class="p-tag">Badge</span>
    </p-divider>
    <p>
        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
        officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
    </p>
    <p-divider align="right">
        <p-button label="Button" icon="pi pi-search" styleClass="p-button-outlined"></p-button>
    </p-divider>
    <p>
        Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
        voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Donec vel volutpat ipsum. Integer nunc magna, posuere ut tincidunt eget, egestas vitae sapien. Morbi dapibus luctus odio.
    </p>
</div>`,

        typescript: `
import { Component } from '@angular/core';

@Component({
    selector: 'divider-content-demo',
    templateUrl: './divider-content-demo.html'
})
export class DividerContentDemo {}`
    };
}
