export class Note {
    public title:string;
    public content:string;
    public date:string;
    public level:number;
    public order:number;

    constructor(title, content, date, level, order) {
        this.title = title;
        this.content = content;
        this.level = level;
        this.date = date;
        this.order = order;
    }
}