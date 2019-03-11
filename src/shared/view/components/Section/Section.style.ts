import { withStyles, Theme, WithStyles } from 'shared/styles';
import { rule } from 'shared/helpers/style';

const styles = (theme: Theme) => ({
  root: rule({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  }),

  title: rule({
    maxWidth: theme.extra.sizes.maxContentWidth,
    margin: `0 auto ${theme.spacing.unit * 3.5}px`,
    fontFamily: theme.extra.typography.primaryFont,
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 2,
    textAlign: 'center',
    color: theme.extra.colors.rhino,
    textTransform: 'uppercase',

    [theme.breakpoints.up('lg')]: {
      marginBottom: theme.spacing.unit * 5,
      fontSize: 44,
      lineHeight: 1.09,
    },
  }),
});

export const provideStyles = withStyles(styles);

export type StylesProps = WithStyles<typeof styles>;