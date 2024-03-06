import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingHelpComponent } from './setting-help.component';

describe('SettingHelpComponent', () => {
  let component: SettingHelpComponent;
  let fixture: ComponentFixture<SettingHelpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SettingHelpComponent]
    });
    fixture = TestBed.createComponent(SettingHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
