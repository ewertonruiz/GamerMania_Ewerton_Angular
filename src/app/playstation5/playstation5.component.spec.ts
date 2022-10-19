import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Playstation5Component } from './playstation5.component';

describe('Playstation5Component', () => {
  let component: Playstation5Component;
  let fixture: ComponentFixture<Playstation5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Playstation5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Playstation5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
