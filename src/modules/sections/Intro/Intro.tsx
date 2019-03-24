import * as React from 'react';

import { useTranslate } from 'services/i18n';
import { Button } from 'shared/view/elements';
import { StylesProps, provideStyles } from './Intro.style';

interface IProps {
  title: string;
  subtitle: string;
  actions?: React.ReactNode;
}

function IntroBase(props: IProps & StylesProps) {
  const { classes, actions, subtitle, title } = props;
  return (
    <div className={classes.root}>
      <p className={classes.title}>{title}</p>
      <p className={classes.subtitle}>{subtitle}</p>
      {actions && <div className={classes.actions}>{actions}</div>}
    </div>
  );
}

const StyledIntroBase = provideStyles(IntroBase);

function HomeIntro() {
  const { t, tKeys } = useTranslate();
  return (
    <StyledIntroBase
      title={t(tKeys.sections.homeIntro.title.getKey())}
      subtitle={t(tKeys.sections.homeIntro.subtitle.getKey())}
    />
  );
}

function KycIntro() {
  const { t, tKeys } = useTranslate();
  return (
    <StyledIntroBase
      title={t(tKeys.sections.kycIntro.title.getKey())}
      subtitle={t(tKeys.sections.kycIntro.subtitle.getKey())}
      actions={(
        <Button size="large" color="primary" variant="contained" href={'#'} target="_blank" rel="noopener noreferrer">
          {t(tKeys.sections.kycIntro.startButton.getKey())}
        </Button>
      )}
    />
  );
}

export { HomeIntro, KycIntro };
export default StyledIntroBase;
