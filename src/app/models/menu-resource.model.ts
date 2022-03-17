export class CustomMenuResource {
    constructor() {
        this.label = null;
        this.routerLink = null;
        this.items = null;
        this.inputs = null;
        this.command = (event) => {
            console.log(event);
            console.log(event.originalEvent);
            console.log(event.item);
        };
    }
    label: string;
    routerLink: string;
    items: any[];
    inputs: any[];
    command?: any = (event) => {
        //event.originalEvent: Browser event
        //event.item: menuitem metadata
        console.log(event);
        console.log(event.originalEvent);
        console.log(event.item);
    }
}
