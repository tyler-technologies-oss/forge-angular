import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {
  defineAppBarComponent,
  defineAppBarMenuButtonComponent,
  defineAppBarSearchComponent,
  defineButtonComponent,
  defineCardComponent,
  defineCheckboxComponent,
  defineDrawerComponent,
  defineExpansionPanelComponent,
  defineIconButtonComponent,
  defineIconComponent,
  defineListComponent,
  defineOpenIconComponent,
  defineScaffoldComponent,
  defineTextFieldComponent,
  VERSION as FORGE_VERSION
} from '@tylertech/forge';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

defineScaffoldComponent();
defineAppBarComponent();
defineAppBarMenuButtonComponent();
defineAppBarSearchComponent();
defineIconComponent();
defineCardComponent();
defineDrawerComponent();
defineListComponent();
defineOpenIconComponent();
defineIconButtonComponent();
defineButtonComponent();
defineCheckboxComponent();
defineTextFieldComponent();
defineExpansionPanelComponent();

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

console.log('[Forge version]', FORGE_VERSION);
