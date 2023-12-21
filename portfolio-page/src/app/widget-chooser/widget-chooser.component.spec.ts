import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetChooserComponent } from './widget-chooser.component';

describe('WidgetChooserComponent', () => {
  let component: WidgetChooserComponent;
  let fixture: ComponentFixture<WidgetChooserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetChooserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidgetChooserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
