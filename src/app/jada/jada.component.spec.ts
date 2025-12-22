import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JadaComponent } from './jada.component';

describe('JadaComponent', () => {
  let component: JadaComponent;
  let fixture: ComponentFixture<JadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JadaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
