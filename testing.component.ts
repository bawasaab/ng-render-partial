import { Component, ElementRef, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { UserService } from 'src/app/common/service/userService';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.scss']
})
export class TestingComponent implements OnInit, OnDestroy {

  tenantIdKey: any = localStorage.getItem('TenantId');
  contentKey: any;
  /**
* let the below html code snippet we are gwtting from the server as render partial
   * "Ich bin damit einverstanden, ein <button id="FBO" (click)="openModalonClick()">Forever Business Owner</button> zu werden."
   */
  contentData: HTMLElement | undefined;

  constructor(
    protected userService: UserService,
    protected renderer2: Renderer2,
    protected elementRef: ElementRef
  ) { }

  ngOnInit(): void {
    this.userService.getTandCForForeverBusinessOwner(this.tenantIdKey, this.contentKey).subscribe((res: any) => {
      this.contentData = res.contentData;

      setTimeout(() => {
        const simple = this.renderer2.listen( this.elementRef.nativeElement.querySelector('#FBO'), 'click', (ent) => {
          console.log('button clicked');
        } );
      }, 1000);
    });
  }

  ngOnDestroy() {

  }

}
