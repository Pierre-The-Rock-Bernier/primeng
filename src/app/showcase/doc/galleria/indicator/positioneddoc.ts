import { Component, Input, OnInit } from '@angular/core';
import { Code } from '../../../domain/code';
import { PhotoService } from '../../../service/photoservice';

@Component({
    selector: 'galleria-indicator-positioned-demo',
    template: ` <section>
        <app-docsectiontext [title]="title" [id]="id" [level]="3">
            <p>
                Indicators can be placed at four different sides using the <i>indicatorsPosition</i> property. In addition, enabling <i>showIndicatorsOnItem</i> moves the indicators inside the image section. <i>indicatorsPosition</i> set to
                <i>bottom</i> by default, accepted values are <i>top</i>, <i>left</i>, <i>right</i>, and <i>bottom</i>.
            </p>
        </app-docsectiontext>
        <div class="card">
            <div class="flex flex-wrap gap-3 mb-5">
                <p-radioButton *ngFor="let option of positionOptions" [name]="option.label" [value]="option.value" [label]="option.label" [(ngModel)]="position" [inputId]="label"></p-radioButton>
            </div>
            <div class="flex align-items-center">
                <p-checkbox [(ngModel)]="showIndicatorsOnItem" [binary]="true" inputId="binary" label="Inside" ngClass="mt-3"></p-checkbox>
            </div>
            <p-galleria
                [(value)]="images"
                [indicatorsPosition]="position"
                [showIndicators]="true"
                [showThumbnails]="false"
                [showIndicatorsOnItem]="showIndicatorsOnItem"
                [responsiveOptions]="responsiveOptions"
                [containerStyle]="{ width: '100%', 'margin-top': '2em' }"
            >
                <ng-template pTemplate="item" let-item>
                    <img [src]="item.previewImageSrc" style="width: 100%; display: block;" />
                </ng-template>
            </p-galleria>
        </div>
        <app-code [code]="code" selector="galleria-indicator-positioned-demo"></app-code>
    </section>`
})
export class GalleriaIndicatorPositionedDemo implements OnInit {
    @Input() id: string;

    @Input() title: string;

    images: any[];

    position: string = 'top';

    showIndicatorsOnItem: boolean = false;

    positionOptions = [
        {
            label: 'Bottom',
            value: 'bottom'
        },
        {
            label: 'Top',
            value: 'top'
        },
        {
            label: 'Left',
            value: 'left'
        },
        {
            label: 'Right',
            value: 'right'
        }
    ];

    responsiveOptions: any[] = [
        {
            breakpoint: '1024px',
            numVisible: 5
        },
        {
            breakpoint: '768px',
            numVisible: 3
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];

    constructor(private photoService: PhotoService) {}

    ngOnInit() {
        this.photoService.getImages().then((images) => {
            this.images = images;
        });
    }

    code: Code = {
        basic: `
<p-galleria
    [(value)]="images"
    [indicatorsPosition]="position"
    [showIndicators]="true"
    [showThumbnails]="false"
    [showIndicatorsOnItem]="showIndicatorsOnItem"
    [responsiveOptions]="responsiveOptions"
    [containerStyle]="{ width: '100%', 'margin-top': '2em' }"
>
    <ng-template pTemplate="item" let-item>
        <img [src]="item.previewImageSrc" style="width: 100%; display: block;" />
    </ng-template>
</p-galleria>`,
        html: `
<div class="card">
    <div class="flex flex-wrap gap-3 mb-5">
        <p-radioButton *ngFor="let option of positionOptions;" [name]="option.label" [value]="option.value" [label]="option.label" [(ngModel)]="position" [inputId]="label"></p-radioButton>
    </div>
    <div class="flex align-items-center">
        <p-checkbox [(ngModel)]="showIndicatorsOnItem" [binary]="true" inputId="binary" label="Inside" ngClass="mt-3"></p-checkbox>
    </div>
    <p-galleria [(value)]="images" [indicatorsPosition]="position" [showIndicators]="true" [showThumbnails]="false" [showIndicatorsOnItem]="showIndicatorsOnItem" [responsiveOptions]="responsiveOptions" [containerStyle]="{'width': '100%','margin-top': '2em'}">
        <ng-template pTemplate="item" let-item>
            <img [src]="item.previewImageSrc" style="width: 100%; display: block;" />
        </ng-template>
    </p-galleria>
</div>`,
        typescript: `
import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../../service/photoservice';

@Component({
    selector: 'galleria-indicator-positioned-demo',
    templateUrl: './galleria-indicator-positioned-demo.html',
    styleUrls: ['./galleria-indicator-positioned-demo.scss']
})
export class GalleriaIndicatorPositionedDemo implements OnInit {
    images: any[];

    position: string = 'top';

    showIndicatorsOnItem: boolean = false;

    positionOptions = [
        {
            label: 'Bottom',
            value: 'bottom'
        },
        {
            label: 'Top',
            value: 'top'
        },
        {
            label: 'Left',
            value: 'left'
        },
        {
            label: 'Right',
            value: 'right'
        }
    ];

    responsiveOptions: any[] = [
        {
            breakpoint: '1024px',
            numVisible: 5
        },
        {
            breakpoint: '768px',
            numVisible: 3
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];

    constructor(private photoService: PhotoService) {}

    ngOnInit() {
        this.photoService.getImages().then((images) => {
            this.images = images;
        });
    }
}`,
        data: `
/* PhotoService */
{
    itemImageSrc: 'https://primereact.org/images/galleria/galleria1.jpg',
    thumbnailImageSrc: 'https://primereact.org/images/galleria/galleria1s.jpg',
    alt: 'Description for Image 1',
    title: 'Title 1'
},
...`,
        service: ['PhotoService']
    };
}
