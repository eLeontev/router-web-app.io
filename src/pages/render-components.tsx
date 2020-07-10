import { RouteComponentProps } from 'react-router';
import { componentsToRender } from '../constants/router.constants';
import { ContentWrapper } from './content-wrapper/content-wrapper';
import React from 'react';

export const render = (props: RouteComponentProps<any>) => {
    const {
        location: { pathname },
    } = props;
    const ContentComponent = componentsToRender[pathname] || componentsToRender.default;

    return (
        <ContentWrapper>
            <ContentComponent />
        </ContentWrapper>
    );
};
