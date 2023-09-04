import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebartoComponent } from './sidebarto.component';

describe('SidebartoComponent', () => {
  let component: SidebartoComponent;
  let fixture: ComponentFixture<SidebartoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebartoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebartoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
