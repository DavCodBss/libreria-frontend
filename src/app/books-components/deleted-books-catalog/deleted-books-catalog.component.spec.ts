import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletedBooksCatalogComponent } from './deleted-books-catalog.component';

describe('DeletedBooksCatalogComponent', () => {
  let component: DeletedBooksCatalogComponent;
  let fixture: ComponentFixture<DeletedBooksCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletedBooksCatalogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletedBooksCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
