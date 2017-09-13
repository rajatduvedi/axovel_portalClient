import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetPasseordComponent } from './reset-passeord.component';

describe('ResetPasseordComponent', () => {
  let component: ResetPasseordComponent;
  let fixture: ComponentFixture<ResetPasseordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResetPasseordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetPasseordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
