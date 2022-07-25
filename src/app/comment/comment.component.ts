import { Component, OnInit } from '@angular/core';
import { CommentService } from '../services/comment.service';
import { Comment } from '../model/comment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
comment!:Comment[];
  constructor(private serviceComment:CommentService) { }

  ngOnInit(): void {
this.serviceComment.getComment().subscribe(
    data=>{
        this.comment=data;
        console.log(data);
    }
);
  }

}
