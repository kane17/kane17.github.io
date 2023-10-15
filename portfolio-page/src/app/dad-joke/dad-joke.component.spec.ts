import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadJokeComponent } from './dad-joke.component';

describe('DadJokeComponent', () => {
  let component: DadJokeComponent;
  let fixture: ComponentFixture<DadJokeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DadJokeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DadJokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
