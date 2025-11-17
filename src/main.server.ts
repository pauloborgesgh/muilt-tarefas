import { bootstrapApplication, type BootstrapContext } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';

<<<<<<< HEAD
const bootstrap = (context?: any) =>
bootstrapApplication(AppComponent, config, context as any);
=======
// Export a bootstrap function that accepts the optional server context and forwards it
// to `bootstrapApplication` as the third argument. This ensures the platformRef provided
// by the server renderer is used and avoids NG0401 (Platform missing) when rendering per-request.
const bootstrap = (context?: BootstrapContext) =>
	bootstrapApplication(AppComponent, config, context);
>>>>>>> develop

export default bootstrap;
