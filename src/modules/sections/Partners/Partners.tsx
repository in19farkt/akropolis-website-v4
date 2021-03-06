import * as React from 'react';

import partners from 'data/partners';
import PageBlock from 'modules/shared/PageBlock/PageBlock';
import { useTranslate } from 'services/i18n';
import { Section } from 'shared/view/components';
import { Grid } from 'shared/view/elements';

import PartnerCard from './PartnerCard';

interface IProps {
  withTitle?: boolean;
}

function Partners({ withTitle = true }: IProps) {
  const { t, tKeys } = useTranslate();

  return (
    <PageBlock xsVPadding={1} mdVPadding={2}>
      <Section title={withTitle ? t(tKeys.sections.partners.title.getKey()) : undefined}>
        <Grid container spacing={16} justify="center">
          {partners.map(item => (
            <Grid key={item.url} item xs={6} md={4} lg={3}>
              <PartnerCard {...item} />
            </Grid>
          ))}
        </Grid>
      </Section >
    </PageBlock >
  );
}

export default Partners;
