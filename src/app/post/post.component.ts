import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { formatDate } from '@angular/common';

import { Tag, Post } from './post';

import { BlogService } from '../blog.service';
import { NavBarService } from '../navbar.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() post: Post;
  @Input() summary: boolean;
  @Output() filtered = new EventEmitter<Tag>();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private blogService: BlogService,
    private navBarService: NavBarService
    ) {
   
   }

  ngOnInit() {
    const postId = this.route.snapshot.paramMap.get('id');
    if (postId) {
      this.blogService.getPost(Number(postId)).subscribe(post => {
        this.post = post;
        const subtitle = "by " + this.post.author.user.first_name + " " + this.post.author.user.last_name + " on " +  formatDate(this.post.published_date, 'mediumDate', 'en-US');
        this.navBarService.publishTitle(this.post.title, subtitle);
      });
    }
  }

  onPostSummaryClicked(){
    this.router.navigate(['/blog/post/', this.post.id]);
  }

  filter(tag: Tag) {
    this.filtered.emit(tag);
  }

  ngOnDestroy() {
    this.navBarService.clearTitle();
  }
}
