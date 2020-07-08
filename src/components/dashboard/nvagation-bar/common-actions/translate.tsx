import React from 'react';

import { navActionLabels } from '../../../../constants/nav.constants';

import { navActionTypes } from '../../../../models/nav.model';

export const Translate = React.memo(() => (
    <section className="dropdown-as-link">{navActionLabels[navActionTypes.translate]}</section>
));
