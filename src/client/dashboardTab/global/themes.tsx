import * as React from 'react';
import { DefaultTheme, DarkTheme, TeamsTheme, WordTheme } from '@fluentui/theme-samples';
import { ThemeProvider, CommandBarButton } from '@fluentui/react';
import { useLocalStorage } from 'react-use';
import { useTeams } from 'msteams-react-base-component';
import { useState } from 'react';

export const themes = {
  default: DefaultTheme,
  dark: DarkTheme,
  teams: TeamsTheme,
  word: WordTheme
};

export const ThemeContext = React.createContext({
  theme: 'default',
  changeTheme: (name): void => {}
});

export const useTheme = () => React.useContext(ThemeContext);

function ThemeConsumer({ value, children }: { value: string; children: any }) {
  const { theme } = useTheme();
  return (
    <ThemeProvider theme={themes[value!]} className={value === 'dark' ? 'mgt-dark' : 'mgt-light'}>
      {children}
    </ThemeProvider>
  );
}

export function DynamicThemeProvider({ inTeams, themeString, children }) {
  const [theme, setTheme] = useLocalStorage('theme', 'default');
  const [teamsTheme, setTeamsTheme] = useState<string>(themeString);
  const changeTheme = name => themes[name] && setTheme(name);
  const changeTeamsTheme = name => themes[name] && setTeamsTheme(name);
  //const changeTeamsTheme = (name) => themes[name] && setTeamsTheme(name);
  //const changeTheme = (name) => {};
  let themeContextValue: any = { theme, changeTheme };
  let teamsContextValue: any = { themeString, changeTeamsTheme };

  return (
    <>
      {inTeams && (
        <ThemeContext.Provider value={teamsContextValue}>
          <ThemeConsumer value={teamsTheme!}>{children}</ThemeConsumer>
        </ThemeContext.Provider>
      )}

      {!inTeams && (
        <ThemeContext.Provider value={themeContextValue}>
          <ThemeConsumer value={theme!}>{children}</ThemeConsumer>
        </ThemeContext.Provider>
      )}
    </>
  );
}

export function ThemeToggle({ as: ButtonComponent }) {
  const { theme, changeTheme } = useTheme();
  const [{ inTeams }] = useTeams();
  const menuItems = Object.keys(themes).map(key => ({
    key,
    text: key,
    canCheck: true,
    checked: theme === key,
    onClick: () => changeTheme(key)
  }));

  return (
    <>
      {!inTeams && (
        <ButtonComponent menuProps={{ shouldFocusOnMount: true, items: menuItems }} iconProps={{ iconName: 'Color' }}>
          {theme}
        </ButtonComponent>
      )}
    </>
  );
}

ThemeToggle.defaultProps = {
  as: CommandBarButton
};
