import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';

import { useGetTranslatedLabels } from '../../../services/i18n.service';

import { i18nDynamicKey } from '../../../constants/common.constants';

import { modalLabels } from '../../../models/modals.model';
import { navActionLinks } from '../../../constants/nav.constants';

export const WirelessAccessControl = () => {
    const [title, description] = useGetTranslatedLabels([
        modalLabels.wirelessAccessControlTitleLabel,
        modalLabels.wirelessAccessControlDescriptionLabel,
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
                <Link className="action-as-link" to={navActionLinks.wirelessACL}>
                    Wireless ACL
                </Link>
                {rightDescriptionPart}
            </p>
        </section>
    );
};
