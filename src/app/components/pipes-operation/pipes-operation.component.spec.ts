import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesOperationComponent } from './pipes-operation.component';

describe('PipesOperationComponent', () => {
  let component: PipesOperationComponent;
  let fixture: ComponentFixture<PipesOperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PipesOperationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipesOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
