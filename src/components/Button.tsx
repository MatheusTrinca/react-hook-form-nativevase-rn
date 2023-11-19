import { Button as NativeBaseButton, IButtonProps, Text } from 'native-base';

type ButtonProps = IButtonProps & {
  title: string;
};

export function Button({ title, ...rest }: ButtonProps) {
  return (
    <NativeBaseButton
      {...rest}
      w="full"
      h={16}
      bg="green.700"
      _pressed={{ bgColor: 'green.600' }}
    >
      <Text color="white" fontSize="md">
        {title}
      </Text>
    </NativeBaseButton>
  );
}
