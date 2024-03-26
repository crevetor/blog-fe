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
  filters: Tag[];

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.getPosts();
    this.filters = [];
  }

  getPosts(): void {
    this.blogService.getPosts()
    .subscribe(posts => this.posts = posts);
  }

  filteredPosts(): Post[] {
    if (this.filters.length == 0) {
      return this.posts;
    }

    return this.posts.filter(post => this.filters.map(value => value.id).every(value => post.tags.map(value => value.id).includes(value)));
  }

  onFiltered(tag: Tag) {
    this.filters.push(tag)
  }

  removeFilter(tag: Tag) {
    this.filters.splice(this.filters.findIndex(value => value.id == tag.id), 1);
  }
}
