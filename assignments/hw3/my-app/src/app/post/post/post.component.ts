import { Component, EventEmitter, Output, Input } from '@angular/core';
import { Post } from '../post.model';

@Component({
  selector: 'app-post',
  standalone: false,
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {
  @Output() postCreated = new EventEmitter<Post>(); // Sends new posts to parent
  @Input() postCount = 0; // Receives current number of posts
  newPostContent = '';

  addPost() {
    if (this.newPostContent.trim()) {
      const post: Post = { id: this.postCount + 1, content: this.newPostContent };
      this.postCreated.emit(post); // Emit post to parent (AppComponent)
      this.newPostContent = ''; // Clear input
    }
  }
}
