import { Modal, Pressable, StyleSheet, View } from "react-native";
import { Typo } from "../Typo";
import { colors } from "@/theme/colors";

interface PTPTModalProps {
  animationType?: 'none' | 'slide' | 'fade';
  transparent?: boolean;
  visible: boolean;
  message: string;
  confirmText: string;
  cancelText?: string | undefined;
  onConfirm: () => void;
  onCancel?: (() => void) | undefined;
  onClickOutside?: (() => void) | undefined;
}

export const PTPTModal = ({
  animationType = 'fade',
  transparent = true,
  visible, message,
  confirmText,
  cancelText = undefined,
  onConfirm,
  onCancel = undefined,
  onClickOutside = undefined,
}: PTPTModalProps) => {
  return (
    <Modal
      animationType={animationType}
      transparent={transparent}
      visible={visible}>
      <View
        style={styles.centeredView}
        onTouchEnd={onClickOutside}
      >
        <View style={styles.modalView}>
          <Typo color="B_50" font="SubLargeB" style={styles.modalText}>{message}</Typo>
          <View style={styles.buttonContainer}>
            {
              cancelText && (
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={onCancel}>
                  <Typo color="B_300" font="SubMediumB">{cancelText}</Typo>
                </Pressable>
              )
            }
            <Pressable
              style={[styles.button, styles.buttonOpen]}
              onPress={onConfirm}>
              <Typo color="B_BASE_PRI" font="SubMediumB">{confirmText}</Typo>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
  modalView: {
    width: '88%',
    backgroundColor: colors.B_700,
    borderRadius: 20,
    paddingTop: 30,
    paddingHorizontal: 20,
    paddingBottom: 24,
    gap: 30,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
  },
  button: {
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonClose: {
    flex: 1,
    backgroundColor: colors.B_600,
  },
  buttonOpen: {
    flex: 1,
    backgroundColor: colors.PRI,
  },
  modalText: {
    textAlign: 'center',
  },
});
