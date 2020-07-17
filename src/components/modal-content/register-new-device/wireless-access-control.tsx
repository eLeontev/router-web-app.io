import React, { useContext, useMemo } from 'react';
import { Link } from 'react-router-dom';

import { ModalContext } from '../../../context/modal.context';

import { useGetTranslatedLabels } from '../../../services/i18n.service';

import { i18nDynamicKey } from '../../../constants/common.constants';
import { navActionLinks } from '../../../constants/nav.constants';

import { modalLabels } from '../../../models/modals.model';

export const WirelessAccessControl = () => {
    const { setModal } = useContext(ModalContext);

    const [title, description, linkLabel] = useGetTranslatedLabels([
        modalLabels.wirelessAccessControlTitleLabel,
        modalLabels.wirelessAccessControlDescriptionLabel,
        modalLabels.controlAccessLinkLabel,
    ]);

    const [leftDescriptionPart, rightDescriptionPart] = useMemo(
        () => description.split(i18nDynamicKey),
        [description]
    );
    return (
        <section className="page-text-section">
            <h2 className="page-sub-title">{title}</h2>
            <p className="page-text">
                {leftDescriptionPart}
                <Link
                    className="action-as-link action-as-link__with-underline"
                    to={navActionLinks.wirelessACL}
                    onClick={() => setModal(null)}
                >
                    {linkLabel}
                </Link>
                {rightDescriptionPart}
            </p>
        </section>
    );
};
