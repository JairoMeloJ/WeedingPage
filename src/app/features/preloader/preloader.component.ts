import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-preloader',
  templateUrl: './preloader.component.html',
})
export class PreloaderComponent implements OnInit {
  isLoading = true;
  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private readonly platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      // Código que accede a `window` aquí
      window.addEventListener('load', () => {
        const preloader = document.getElementById('preloader');
        if (preloader) {
          preloader.style.opacity = '0';
          setTimeout(() => {
            preloader.style.display = 'none';
            this.isLoading = false;
          }, 3000);
        }
      });
    }
  }
}
