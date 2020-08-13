import { StoreModule } from '@ngrx/store';

import { reducers } from './reducers';

export const Store = StoreModule.forRoot(reducers);
