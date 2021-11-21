import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KenlistComponent } from './kenlist.component';

describe('KenlistComponent', () => {
  let component: KenlistComponent;
  let fixture: ComponentFixture<KenlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KenlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KenlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
