import { Input as NativeBaseInput, IInputProps, FormControl } from 'native-base';

interface Props extends IInputProps {
  errorMessage?: string | null;
  invalid?: boolean;
}

export function Input({ errorMessage = null, isInvalid, ...rest }: Props) {

  const invalid = !!errorMessage || isInvalid;

  return (
    <FormControl isInvalid={invalid} mb="4">
      <NativeBaseInput
        {...rest}
        bg="gray.200"
        h="16"
        fontSize="md"
        _focus={{ bg: 'gray.300', borderWidth: 2, borderColor: 'green.500' }}
        isInvalid={invalid}
        _invalid={{ borderWidth: 1, borderColor: 'red.500' }}
      />
      <FormControl.ErrorMessage>{errorMessage}</FormControl.ErrorMessage>
    </FormControl>
  );
}
