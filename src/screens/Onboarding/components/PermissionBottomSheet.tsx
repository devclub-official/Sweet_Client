import {Svg} from '@/components/Svg';
import {Typo} from '@/components/Typo';
import {colors} from '@/theme/colors';
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import {forwardRef} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {PERMISSION_LIST} from '../constants';

import {ScrollView} from 'react-native-gesture-handler';
import {Button} from '@/components/Button';
import {BottomSheet} from '@/components/BottomSheet';

interface Props {
  onStateChange?: (state: number) => void;
  onConfirmPress: () => void;
  onSkipPress: () => void;
}

/**
 * TODO: 바텀시트 컨테이너와 컨텐츠를 분리
 * 공통으로 사용할 수 있는 바텀시트 컨테이너 컴포넌트 추가
 */

export const PermissionBottomSheet = forwardRef<BottomSheetModal, Props>(
  ({onStateChange, onConfirmPress, onSkipPress}, ref) => {
    return (
      <BottomSheet
        ref={ref}
        onChange={onStateChange}
        handleComponent={() => null}>
        <View style={styles.contentWrapper}>
          <Typo font="SubLargeB">
            {'피티피티 이용을 위해\n아래 접근 권한 허용이 필요해요'}
          </Typo>
          <ScrollView style={styles.permissionWrapper}>
            <View>
              <Typo font="SubSmallM">선택 권한</Typo>
              <View style={styles.permissionList}>
                {PERMISSION_LIST.map(permission => {
                  return (
                    <View key={permission.name} style={styles.permissionInfo}>
                      <Svg svgName={permission.svg} />
                      <Typo style={styles.permissionItemName} font="SubSmallM">
                        {permission.name}
                      </Typo>
                      <Typo font="CaptionR" color="CG15">
                        {permission.description}
                      </Typo>
                    </View>
                  );
                })}
              </View>
            </View>
          </ScrollView>
          <Typo
            font="CaptionR"
            color="CG10"
            style={styles.permissionDescription}>
            {
              '선택 접근 권한에 동의하지 않아도 서비스를 이용할 수 있어요.\n권한이 필요한 시점에 다시 알려드릴게요.'
            }
          </Typo>
          <View style={styles.buttonWrapper}>
            <Button onPress={onConfirmPress}>확인</Button>
            <TouchableOpacity onPress={onSkipPress}>
              <Typo style={styles.skipButton}>건너뛰기</Typo>
            </TouchableOpacity>
          </View>
        </View>
      </BottomSheet>
    );
  },
);

const styles = StyleSheet.create({
  wrapper: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: colors.B_700,
  },
  contentWrapper: {
    padding: 20,
    paddingBottom: 30,
  },
  permissionDescription: {
    marginTop: 30,
  },
  permissionWrapper: {
    marginTop: 40,
  },
  permissionList: {
    marginTop: 20,
    gap: 20,
  },
  permissionInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  permissionItemName: {
    width: 36,
    marginLeft: 16,
    marginRight: 16,
  },
  buttonWrapper: {
    marginTop: 40,
    gap: 20,
  },
  skipButton: {
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
});
