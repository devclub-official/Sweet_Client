import {Typo} from '@/components/Typo';
import appleAuth from '@invertase/react-native-apple-authentication';
import {StatusBar, StyleSheet, View} from 'react-native';
import {useCallback} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {Svg} from '@/components/Svg';

export const Login = () => {
  const onAppleButtonPress = async () => {
    try {
      const appleAuthRequestResponse = await appleAuth.performRequest({
        requestedOperation: appleAuth.Operation.LOGIN,
        requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
      });

      console.log('애플 로그인 성공!');
      console.log('appleAuthRequestResponse ==>', appleAuthRequestResponse);

      // identityToken을 서버에 보내서 본인 인증하면 완벽하게 안전!
    } catch (error) {
      console.error('애플 로그인 실패', error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      StatusBar.setBarStyle('dark-content');
    }, []),
  );

  return (
    <View>
      <View style={styles.contentWrapper}>
        <Svg svgName="AppLogo" />
        <Typo>login</Typo>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contentWrapper: {},
});
