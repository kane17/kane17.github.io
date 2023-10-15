import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoCapComponent } from './crypto-cap.component';

describe('CryptoCapComponent', () => {
  let component: CryptoCapComponent;
  let fixture: ComponentFixture<CryptoCapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CryptoCapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CryptoCapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
