import * as React from 'react';
import { Stack, styled, classNamesFunction } from '@fluentui/react';
import { Sidebar } from '../Sidebar/Sidebar';
import { TopMenu } from '../TopMenu/TopMenu';

const getStyles = ({ theme }) => {
  return {
    root: {},
    sidebar: {},
    contentWrapper: {
      paddingLeft: theme.spacing.l2,
      paddingRight: theme.spacing.l2
    }
  };
};

const getClassNames = classNamesFunction();

function MasterLayoutComponent({ children, theme, styles }) {
  const classNames: any = getClassNames(styles, { theme });
  return (
    <Stack horizontal className={classNames.canvas}>
      <Stack.Item grow={false} className={classNames.sidebar}>
        <Sidebar />
      </Stack.Item>
      <Stack.Item grow={true} className={classNames.content}>
        <TopMenu styles={styles} theme={theme} />
        <Stack className={classNames.contentWrapper}>{children}</Stack>
      </Stack.Item>
    </Stack>
  );
}

export const MasterLayout = styled(MasterLayoutComponent, getStyles);
