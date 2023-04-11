import { useCookies } from 'react-cookie';
import ChangeTheme from './ChangeTheme';

const ThemeSection = () => {
  const [cookies, setCookie] = useCookies([
    'color-theme',
    'light-theme',
    'dark-theme',
  ]);
  return (
    <div className="flex h-full flex-row items-center justify-around">
      <div>
        <h1>Light Theme</h1>
        <ChangeTheme
          borderEnabled={true}
          currentTheme={cookies['light-theme']}
          onChangeFn={(theme) => {
            setCookie('light-theme', theme);
          }}
        />
      </div>
      <div>
        <h2>Dark Theme</h2>
        <ChangeTheme
          borderEnabled={true}
          currentTheme={cookies['dark-theme']}
          onChangeFn={(theme) => {
            setCookie('dark-theme', theme);
          }}
        />
      </div>
    </div>
  );
};

export default ThemeSection;
