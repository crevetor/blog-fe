import { Component, OnInit } from '@angular/core';

import { BlogService } from '../blog.service';
import { Post } from '../post/post';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  posts: Post[];

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts(): void {
    this.blogService.getPosts()
    .subscribe(posts => this.posts = posts);
  }

}
