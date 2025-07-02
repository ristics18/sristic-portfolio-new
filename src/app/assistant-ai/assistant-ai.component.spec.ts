import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssistantAiComponent } from './assistant-ai.component';

describe('AssistantAiComponent', () => {
  let component: AssistantAiComponent;
  let fixture: ComponentFixture<AssistantAiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssistantAiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssistantAiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
