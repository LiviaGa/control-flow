import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivaComponent } from './diretiva.component';

describe('DiretivaComponent', () => {
  let component: DiretivaComponent;
  let fixture: ComponentFixture<DiretivaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiretivaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DiretivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
