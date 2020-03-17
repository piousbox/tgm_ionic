import { PipeTransform, Pipe } from '@angular/core';

@Pipe({ name: 'transformYoutubeUrl' })
export class TransformYoutubeUrlPipe implements PipeTransform {

    transform(id) {
        return `https://www.youtube.com/embed/${id}`;
    }
}