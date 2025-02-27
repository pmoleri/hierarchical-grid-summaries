import { Component, OnDestroy, OnInit } from '@angular/core';
import { IGX_BUTTON_GROUP_DIRECTIVES, IGX_HIERARCHICAL_GRID_DIRECTIVES, IgxButtonDirective, IgxRippleDirective } from 'igniteui-angular';
import { Subject, takeUntil } from 'rxjs';
import { OrdersType } from '../models/northwind/orders-type';
import { NorthwindService } from '../services/northwind.service';

@Component({
  selector: 'app-master-view',
  imports: [IGX_HIERARCHICAL_GRID_DIRECTIVES, IGX_BUTTON_GROUP_DIRECTIVES, IgxButtonDirective, IgxRippleDirective],
  templateUrl: './master-view.component.html',
  styleUrls: ['./master-view.component.scss']
})
export class MasterViewComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public northwindOrders: OrdersType[] = [];

  constructor(
    private northwindService: NorthwindService,
  ) {}


  ngOnInit() {
    this.northwindService.getOrders().pipe(takeUntil(this.destroy$)).subscribe(
      data => this.northwindOrders = data
    );
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
