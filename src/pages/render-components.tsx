import React, { Suspense } from 'react';
import { RouteComponentProps } from 'react-router';

import { ContentWrapper } from './content-wrapper/content-wrapper';

import { componentsToRender } from '../constants/router.constants';

export const render = (props: RouteComponentProps<any>) => {
    const {
        location: { pathname },
    } = props;
    const ContentComponent = componentsToRender[pathname] || componentsToRender.default;

    return (
        <ContentWrapper>
            <Suspense fallback={<h1>Loading</h1>}>
                <ContentComponent />
            </Suspense>
        </ContentWrapper>
    );
};
