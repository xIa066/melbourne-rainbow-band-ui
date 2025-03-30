import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ComingNextEventService {
  private http = inject(HttpClient);
  private readonly endpoint = 'https://mrb.org.au/wp-json/wp/v2/posts/2988';

  fetchEventData(): Observable<{ posterUrl: string; steps: { title: string; content: string; visible: boolean }[] }> {
    return this.http.get<any>(this.endpoint).pipe(
      map(post => this.parsePost(post))
    );
  }

  private parsePost(post: any) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(post.content.rendered, 'text/html');

    const image = doc.querySelector('img')?.getAttribute('src') ?? '';
    const paragraphs = Array.from(doc.querySelectorAll('p'))
      .map(p => p.textContent?.trim())
      .filter(p => !!p);

    return {
      title: post.title.rendered,
      posterUrl: image,
      steps: paragraphs.map((text, i) => ({
        title: `Step ${i + 1}`,
        content: text!,
        visible: false
      }))
    };
  }
}
