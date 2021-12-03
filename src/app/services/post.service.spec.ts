import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';
import { Post } from '../models/post';

import { PostService } from './post.service';

describe('PostService', () => {
  let service: PostService;
  let http :HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, HttpClientModule],
      providers: [PostService],
    });
    service = TestBed.inject(PostService);
    http =TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  afterEach(()=>{
    http.verify();
  })

  it('retrieve all Posts from API', () => {
    const posts: Post[] = [
      {
        userId: 1,
        id: 1,
        body: 'hello world',
        title: 'Testing',
      },
      {
        userId: 2,
        id: 2,
        body: 'hello world',
        title: 'Testing',
      },
    ];
    service.getPost().subscribe((post) => {
      expect(post.length).toBe(2);
      expect(post).toEqual(posts);
    });
    const request = http.expectOne(`${environment.apiUrl+"posts"}`);
    expect(request.request.method).toBe('GET');
    request.flush(posts);
  });
});
