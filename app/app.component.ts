import { Component, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { single } from "./data";
import { multi } from './dataHeatmap';
import { singlePieGrid } from './dataPieGrid';
import { singlePieAdvanced } from './dataPieAdvanced';

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  single: any[];
  view: any[] = [500, 400];
  legend: boolean = true;
  legendPosition: string = "right";

  colorScheme = {
    domain: ["#5AA454", "#E44D25", "#CFC0BB", "#7aa3e5", "#a8385d", "#aae3f5"]
  };

  // card
  cardColor: string = "#232837";
  cardColorScheme = {
    domain: ["#5AA454", "#E44D25", "#CFC0BB", "#7aa3e5", "#a8385d", "#aae3f5"]
  };
  viewCard: any[] = [600, 500];

  // heatmap
  multi: any[];
  viewHeatmap: any[] = [700, 300];

  // heatmap options
  legendHeatmap: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = "Country";
  yAxisLabel: string = "Year";

  colorSchemeHeatmap = {
    domain: ["#5AA454", "#E44D25", "#CFC0BB", "#7aa3e5", "#a8385d", "#aae3f5"]
  };

  // PieGrid
  singlePieGrid: any[];
  viewPieGrid: any[] = [500, 400];

  // options
  showLegendPieGrid: boolean = true;
  showLabelsPieGrid: boolean = true;

  colorSchemePieGrid = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  // PieAdvanced
  singlePieAdvanced: any[];
  viewPieAdvanced: any[] = [700, 400];

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabelsPieAdvanced: boolean = true;
  isDoughnut: boolean = false;

  colorSchemePieAdvanced = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };
  constructor() {
    Object.assign(this, { single });
    Object.assign(this, { multi });
    Object.assign(this, { singlePieGrid });
    Object.assign(this, { singlePieAdvanced});
  }

  onSelect(data): void {
    console.log("Item clicked", JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log("Activate", JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log("Deactivate", JSON.parse(JSON.stringify(data)));
  }

  valueFormatting(): string {
    return "COPD";
  }

  onSelectCard(event) {
    console.log(event);
  }
}
