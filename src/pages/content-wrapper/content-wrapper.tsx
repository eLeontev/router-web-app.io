import React, { PropsWithChildren } from 'react';
import './content-wrapper.scss';

import { Header } from '../../components/dashboard/header/header';
import { ContextLoader } from '../../components/common/loader';
import { NavigationBar } from '../../components/dashboard/nvagation-bar/navigation-bar';
import { Modal } from '../../components/common/modal';

import { useExpandCollapseHook } from '../../hooks/expand-collpase.hook';
import { useToggleNavBar } from '../../hooks/toggle-nav-bar.recoil.hook';
import { WithModalContext } from '../../context/modal.context';
import { WithLoaderContext } from '../../context/loader.context';

export const ContentWrapper = ({ children }: PropsWithChildren<{}>) => {
    const { isNavBarExpanded } = useToggleNavBar();
    const expandCollapseClassName = useExpandCollapseHook(isNavBarExpanded);

    return (
        <>
            <WithLoaderContext>
                <WithModalContext>
                    <Modal />
                    <ContextLoader />
                    <Header />
                    <main>
                        <NavigationBar />
                        <section className={`content content__${expandCollapseClassName}`}>
                            {children}
                        </section>
                    </main>
                </WithModalContext>
            </WithLoaderContext>
        </>
    );
};
