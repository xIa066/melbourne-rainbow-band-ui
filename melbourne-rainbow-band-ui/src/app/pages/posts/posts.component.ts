import { Component, OnInit } from '@angular/core';
import { WordpressService } from '../../core/wordpress.service';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  standalone:true,
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  imports: [MatCardModule, RouterModule, CommonModule]
})
export class PostsComponent implements OnInit {
  posts: any[] = [];

  constructor(private wpService: WordpressService) {}

  ngOnInit(): void {
    this.wpService.getPosts().subscribe(data => this.posts = data);
  }
}
