import {StatusBar, StatusBarProps} from 'react-native';

interface Props extends StatusBarProps {}
export const AppStatusBar = (props: Props) => {
  return <StatusBar {...props} />;
};
