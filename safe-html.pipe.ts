import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
@Pipe({
  name: 'safeHtml'
})

export class SafeHtmlPipe implements PipeTransform {
constructor(private sanitized: DomSanitizer) {}
  transform(value:any) {
      if(!value) return "";
        return this.sanitized.bypassSecurityTrustHtml(value);
    }


}
