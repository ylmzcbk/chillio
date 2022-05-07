import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddonManagerComponent } from './addon-manager/addon-manager.component';
import { ChatComponent } from './chat/chat.component';
import { ErrorComponent } from './error/error.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoadingComponent } from './loading/loading.component';
import { SettingsComponent } from './settings/settings.component';
import { LockScreenComponent } from './player/lock-screen/lock-screen.component';
import { PlayerComponent } from './player/player/player.component';
import { SubtitleComponent } from './player/subtitle/subtitle.component';
import { AutoSyncComponent } from './player/controls/auto-sync/auto-sync.component';
import { FullScreenComponent } from './player/controls/full-screen/full-screen.component';
import { HlsComponent } from './player/controls/hls/hls.component';
import { PlayPauseComponent } from './player/controls/play-pause/play-pause.component';
import { SubtitlesComponent } from './player/controls/subtitles/subtitles.component';
import { TimeBarComponent } from './player/controls/time-bar/time-bar.component';
import { VolumeComponent } from './player/controls/volume/volume.component';

@NgModule({
  declarations: [
    AppComponent,
    AddonManagerComponent,
    ChatComponent,
    ErrorComponent,
    FooterComponent,
    HeaderComponent,
    LoadingComponent,
    SettingsComponent,
    LockScreenComponent,
    PlayerComponent,
    SubtitleComponent,
    AutoSyncComponent,
    FullScreenComponent,
    HlsComponent,
    PlayPauseComponent,
    SubtitlesComponent,
    TimeBarComponent,
    VolumeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
