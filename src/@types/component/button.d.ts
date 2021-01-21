/**
 * ボタンコンポーネントの引数の型定義
 */
type PropForButton = {
  text: string;
  onPress: function;
};

type PropForIconButton = {
  text: string;
  onPress: function;
  iconName: string;
};
