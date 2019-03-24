import * as React from 'react';
import { Route } from 'react-router-dom';

import routes from 'modules/routes';
import { IModule } from 'shared/types/app';
import Kyc from './view/Kyc/Kyc';

const KycModule: IModule = {
  getRoutes() {
    return (
      <Route
        exact
        key="kyc"
        path={routes.kyc.getRoutePath()}
        component={Kyc}
      />
    );
  },
};

export default KycModule;
