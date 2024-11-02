import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesComponent } from './features.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { PreloaderComponent } from './preloader/preloader.component';
import { WeddingComponent } from './wedding/wedding.component';
import { LovelineComponent } from './loveline/loveline.component';
import { OurHistoryComponent } from './our-history/our-history.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { LocationComponent } from './location/location.component';
import { GiftsComponent } from './gifts/gifts.component';

@NgModule({
    declarations: [
        FeaturesComponent,
        PreloaderComponent,
        HeaderComponent,
        HeroComponent,
        AboutUsComponent,
        OurHistoryComponent,
        LovelineComponent,
        WeddingComponent,
        LocationComponent,
        TestimonialsComponent,
        GalleryComponent,
        GiftsComponent,
        BlogComponent,
        ContactComponent,
        FooterComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        FeaturesComponent,
        PreloaderComponent,
        HeaderComponent,
        HeroComponent,
        AboutUsComponent,
        OurHistoryComponent,
        LovelineComponent,
        WeddingComponent,
        LocationComponent,
        TestimonialsComponent,
        GalleryComponent,
        GiftsComponent,
        BlogComponent,
        ContactComponent,
        FooterComponent
    ]
})
export class FeaturesModule { }