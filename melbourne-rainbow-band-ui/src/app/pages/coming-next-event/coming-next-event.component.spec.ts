import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComingNextEventComponent } from './coming-next-event.component';

describe('ComingNextEventComponent', () => {
  let component: ComingNextEventComponent;
  let fixture: ComponentFixture<ComingNextEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComingNextEventComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComingNextEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
