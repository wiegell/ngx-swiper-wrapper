import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewChild,
} from "@angular/core";

import { SwiperComponent, SwiperDirective } from "ngx-swiper-wrapper";
import { SwiperOptions } from "swiper";
import { PaginationOptions } from "swiper/types/components/pagination";
import { ScrollbarOptions } from "swiper/types/components/scrollbar";

@Component({
  selector: "my-app",
  moduleId: "src/app/app.component",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit, AfterViewInit {
  constructor(private cdr: ChangeDetectorRef) {}

  config: SwiperOptions = {};

  virtualSlides: any = { slides: [] };

  ngOnInit() {
    this.config = {
      virtual: {
        addSlidesBefore: 3,
        addSlidesAfter: 3,
        slides: this.slides,
        renderExternal: (data) => {
          // console.log("RENDEREXTERNAL");
          this.virtualSlides = data;
        },
      },
      initialSlide: 2,
      slidesPerView: 1,
      navigation: false,
      pagination: false,
      scrollbar: false,
      roundLengths: true,
    };
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.slides.push(
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "20"
      );
      setTimeout(() => {
        this.cdr.detectChanges();
      }, 1);
    }, 2000);
  }

  public show: boolean = true;

  public slides = [
    "First slide",
    "Second slide",
    "Third slide",
    "Fourth slide",
    "Fifth slide",
    "Sixth slide",
  ];

  private scrollbar: ScrollbarOptions = {
    el: ".swiper-scrollbar",
    hide: false,
    draggable: true,
  };

  private pagination: PaginationOptions = {
    el: ".swiper-pagination",
    clickable: true,
    hideOnClick: false,
  };

  @ViewChild(SwiperComponent, { static: false }) componentRef?: SwiperComponent;
  @ViewChild(SwiperDirective, { static: false }) directiveRef?: SwiperDirective;

  public onIndexChange(index: number): void {
    console.log(
      "Swiper index: ",
      index,
      this.componentRef.directiveRef.swiper()
    );
  }

  public onSwiperEvent(event: string): void {
    console.log(
      "Swiper event: ",
      event,
      this.componentRef.directiveRef.swiper()
    );
  }
}
