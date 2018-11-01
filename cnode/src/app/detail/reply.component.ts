import { Component, Input } from '@angular/core';
import { Replies } from './interface/replies';
@Component({
    selector: 'app-reply',
    template: `
        <ul *ngIf="replies">
            <li *ngFor="let item of replies">
                <p>{{item.loginname}} {{item.last_reply_at}}</p>
                <p>{{item.content}}</p>
            </li>
        </ul>
    `
})


export class ReplyComponent {
    @Input() replies: Replies
}