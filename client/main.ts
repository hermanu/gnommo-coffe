/**
 * Created by manu on 15/11/16.
 */

import 'angular2-meteor-polyfills';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './imports/app/app.module';

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
