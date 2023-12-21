import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NationalityGuessingComponent } from './nationality-guessing.component';

describe('NationalityGuessingComponent', () => {
  let component: NationalityGuessingComponent;
  let fixture: ComponentFixture<NationalityGuessingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NationalityGuessingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NationalityGuessingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
