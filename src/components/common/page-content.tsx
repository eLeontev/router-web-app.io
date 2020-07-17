import React, { PropsWithChildren } from 'react';
import '../../styles/typography.page.scss';

import { useScrollPageListener } from '../../hooks/scroll-page.hook';

export type PageContentProps = {
    classModifier?: string;
};

export const getClassNames = (classModifier: string, withScroll: boolean) =>
    `page-content ${classModifier} ${withScroll ? 'page-content__with-scroll' : ''}`;

export const PageContent = React.memo(
    ({ children, classModifier = '' }: PropsWithChildren<PageContentProps>) => {
        const withScroll = useScrollPageListener();
        return <section className={getClassNames(classModifier, withScroll)}>{children}</section>;
    }
);
