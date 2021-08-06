import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopinputComponent } from './topinput.component';

describe('TopinputComponent', () => {
  let component: TopinputComponent;
  let fixture: ComponentFixture<TopinputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopinputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
