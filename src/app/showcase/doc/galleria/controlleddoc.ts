import { Component, Input, OnInit } from '@angular/core';
import { Code } from '../../domain/code';
import { PhotoService } from '../../service/photoservice';

@Component({
    selector: 'galleria-controlled-demo',
    template: ` <section>
        <app-docsectiontext [title]="title" [id]="id">
            <p>Galleria can be controlled programmatically using the <i>activeIndex</i> property.</p>
        </app-docsectiontext>
        <div class="card">
            <div class="py-2">
                <p-button type="button" icon="pi pi-minus" (click)="prev()" styleClass="p-button-secondary mr-2"></p-button>
                <p-button type="button" icon="pi pi-plus" (click)="next()" styleClass="p-button-primary"></p-button>
            </div>
            <p-galleria [(value)]="images" [responsiveOptions]="responsiveOptions" [containerStyle]="{ width: '100%' }" [numVisible]="5" [(activeIndex)]="activeIndex">
                <ng-template pTemplate="item" let-item>
                    <img [src]="item.previewImageSrc" style="width: 100%;" />
                </ng-template>
                <ng-template pTemplate="thumbnail" let-item>
                    <div class="grid grid-nogutter justify-content-center">
                        <img [src]="item.thumbnailImageSrc" />
                    </div>
                </ng-template>
            </p-galleria>
        </div>
        <app-code [code]="code" selector="galleria-controlled-demo"></app-code>
    </section>`
})
export class GalleriaControlledDemo implements OnInit {
    @Input() id: string;

    @Input() title: string;

    images: any[];

    get activeIndex(): number {
        return this._activeIndex;
    }

    set activeIndex(newValue) {
        if (this.images && 0 <= newValue && newValue <= this.images.length - 1) {
            this._activeIndex = newValue;
        }
    }

    _activeIndex: number = 2;

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
        this.photoService.getImages().then((images) => (this.images = images));
    }

    next() {
        this.activeIndex++;
    }

    prev() {
        this.activeIndex--;
    }

    code: Code = {
        basic: `
<div class="py-2">
    <p-button type="button" icon="pi pi-minus" (click)="prev()" styleClass="p-button-secondary mr-2"></p-button>
    <p-button type="button" icon="pi pi-plus" (click)="next()" styleClass="p-button-primary"></p-button>
</div>
<p-galleria [(value)]="images" [responsiveOptions]="responsiveOptions" [containerStyle]="{ width: '100%' }" [numVisible]="5" [(activeIndex)]="activeIndex">
    <ng-template pTemplate="item" let-item>
        <img [src]="item.previewImageSrc" style="width: 100%;" />
    </ng-template>
    <ng-template pTemplate="thumbnail" let-item>
        <div class="grid grid-nogutter justify-content-center">
            <img [src]="item.thumbnailImageSrc" />
        </div>
    </ng-template>
</p-galleria>`,
        html: `
<div class="card">
    <div class="py-2">
        <p-button type="button" icon="pi pi-minus" (click)="prev()" styleClass="p-button-secondary mr-2"></p-button>
        <p-button type="button" icon="pi pi-plus" (click)="next()" styleClass="p-button-primary"></p-button>
    </div>
    <p-galleria [(value)]="images" [responsiveOptions]="responsiveOptions" [containerStyle]="{'width': '100%'}" [numVisible]="5" [(activeIndex)]="activeIndex"> 
        <ng-template pTemplate="item" let-item>
            <img [src]="item.previewImageSrc" style="width: 100%;" />
        </ng-template>
        <ng-template pTemplate="thumbnail" let-item>
            <div class="grid grid-nogutter justify-content-center">
                <img [src]="item.thumbnailImageSrc" />
            </div>
        </ng-template>
    </p-galleria>
</div>`,
        typescript: `
import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../../service/photoservice';

@Component({
    templateUrl: './galleria-controlled-demo.html',
    styleUrls: ['./galleria-controlled-demo.scss']
})
export class GalleriaControlledDemo implements OnInit {
    images: any[];

    get activeIndex(): number {
        return this._activeIndex;
    }

    set activeIndex(newValue) {
        if (this.images && 0 <= newValue && newValue <= this.images.length - 1) {
            this._activeIndex = newValue;
        }
    }

    _activeIndex: number = 2;

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
        this.photoService.getImages().then((images) => (this.images = images));
    }

    next() {
        this.activeIndex++;
    }

    prev() {
        this.activeIndex--;
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
