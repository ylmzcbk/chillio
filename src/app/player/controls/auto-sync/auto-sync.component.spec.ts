import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoSyncComponent } from './auto-sync.component';

describe('AutoSyncComponent', () => {
  let component: AutoSyncComponent;
  let fixture: ComponentFixture<AutoSyncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutoSyncComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoSyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
