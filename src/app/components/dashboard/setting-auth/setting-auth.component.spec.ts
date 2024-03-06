import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingAuthComponent } from './setting-auth.component';

describe('SettingAuthComponent', () => {
  let component: SettingAuthComponent;
  let fixture: ComponentFixture<SettingAuthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SettingAuthComponent]
    });
    fixture = TestBed.createComponent(SettingAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
