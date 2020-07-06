import React from 'react';
import './navigation-footer.scss';

import { Button } from '../../common/button';

import { navigationMockData } from '../../../mock/nav.mock';
import { navActionLabels } from '../../../constants/nav.constants';

export type NavigationFooterProps = {
    triggerNavBar: () => void;
};
export const NavigationFooter = React.memo(({ triggerNavBar }: NavigationFooterProps) => {
    return (
        <section className="navbar-footer">
            <Button
                buttonHandler={triggerNavBar}
                className="navbar-footer_trigger-action"
                buttonName={navActionLabels[navigationMockData.footer.triggerNavAction.type]}
            ></Button>
        </section>
    );
});
