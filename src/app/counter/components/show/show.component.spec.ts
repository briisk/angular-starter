import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowComponent } from './show.component';
import { Store } from '@ngrx/store';
import { CounterState } from '../../counter.reducer';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

describe('ShowComponent', () => {
  let component: ShowComponent;
  let fixture: ComponentFixture<ShowComponent>;
  const counterState: CounterState = { value: 3 };
  const counterStore$ = new BehaviorSubject<CounterState>(counterState);
  const mockStore = {
    select: jasmine.createSpy('select').and.returnValue(counterStore$),
    dispatch: () => {},
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowComponent ],
      providers: [
        { provide: Store, useValue: mockStore },
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
