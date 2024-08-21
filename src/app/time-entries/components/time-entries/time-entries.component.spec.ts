import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeEntriesComponent } from './time-entries.component';

describe('TimeEntriesComponent', () => {
  let component: TimeEntriesComponent;
  let fixture: ComponentFixture<TimeEntriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TimeEntriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TimeEntriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
