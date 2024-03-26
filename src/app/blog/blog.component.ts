import { Component, OnInit } from '@angular/core';

import { BlogService } from '../blog.service';
import { Tag, Post } from '../post/post';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  posts: Post[];
  filters: Set<Tag>;

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts(): void {
    this.blogService.getPosts()
    .subscribe(posts => this.posts = posts);
  }

  onFiltered(tag: Tag) {
    this.filters.add(tag)
    this.posts.filter(function(post, idx, array) { return this.filter.isSubsetOf(post.tags); });
  }

}
