import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaNaveComponent } from './ficha-nave.component';

describe('FichaNaveComponent', () => {
  let component: FichaNaveComponent;
  let fixture: ComponentFixture<FichaNaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FichaNaveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FichaNaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
