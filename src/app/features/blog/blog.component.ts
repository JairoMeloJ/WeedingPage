import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../../services/firebase.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
})
export class BlogComponent implements OnInit {
  blogs: any[] = [];

  constructor(private readonly firebaseService: FirebaseService) {}

  ngOnInit(): void {
    this.firebaseService.getBlogs().subscribe((data: any) => {
      this.blogs = data.map((e: any) => {
        return { id: e.payload.doc.id, ...e.payload.doc.data() };
      });
    });
  }
}
