import * as Yup from 'yup';
import { useSnackbar } from 'notistack';
import { Form, FormikProvider, useFormik } from 'formik';
// next
import { useRouter } from 'next/router';
// @mui
import { OutlinedInput, FormHelperText, Stack } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// routes
import { PATH_DASHBOARD } from '../../../routes/paths';

// ----------------------------------------------------------------------

type InitialValues = {
  code1: string;
  code2: string;
  code3: string;
  code4: string;
  code5: string;
  code6: string;
};

type ValueNames = 'code1' | 'code2' | 'code3' | 'code4' | 'code5' | 'code6';

export default function VerifyCodeForm() {
  const { push } = useRouter();
  const { enqueueSnackbar } = useSnackbar();

  const VerifyCodeSchema = Yup.object().shape({
    code1: Yup.number().required('Code is required'),
    code2: Yup.number().required('Code is required'),
    code3: Yup.number().required('Code is required'),
    code4: Yup.number().required('Code is required'),
    code5: Yup.number().required('Code is required'),
    code6: Yup.number().required('Code is required'),
  });

  const formik = useFormik<InitialValues>({
    initialValues: {
      code1: '',
      code2: '',
      code3: '',
      code4: '',
      code5: '',
      code6: '',
    },
    validationSchema: VerifyCodeSchema,
    onSubmit: async (values) => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      enqueueSnackbar('Verify success!');
      push(PATH_DASHBOARD.root);
      console.log('values', Object.values(values).join(''));
    },
  });

  const { values, isValid, isSubmitting, handleSubmit, setFieldValue, handleChange } = formik;

  const handlePasteClipboard = (event: ClipboardEvent) => {
    let data: string | string[] = event?.clipboardData?.getData('Text') || '';

    data = data.split('');

    [].forEach.call(document.querySelectorAll('#field-code'), (node: any, index) => {
      node.value = data[index];
      const fieldIndex = `code${index + 1}`;
      setFieldValue(fieldIndex, data[index]);
    });
  };

  document.addEventListener('paste', handlePasteClipboard);

  const handleChangeWithNextField = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { maxLength, value, name } = event.target;
    const fieldIndex = name.replace('code', '');

    const fieldIntIndex = Number(fieldIndex);

    if (value.length >= maxLength) {
      if (fieldIntIndex < 6) {
        const nextfield = document.querySelector(`input[name=code${fieldIntIndex + 1}]`);

        if (nextfield !== null) {
          (nextfield as HTMLElement).focus();
        }
      }
    }

    handleChange(event);
  };

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack direction="row" spacing={2} justifyContent="center">
          {Object.keys(values).map((name, index) => (
            <OutlinedInput
              id="field-code"
              key={name}
              autoFocus={index === 0}
              name={`code${index + 1}`}
              value={values[name as ValueNames]}
              placeholder="-"
              onChange={handleChangeWithNextField}
              inputProps={{
                maxLength: 1,
                sx: {
                  p: 0,
                  textAlign: 'center',
                  width: { xs: 36, sm: 56 },
                  height: { xs: 36, sm: 56 },
                },
              }}
            />
          ))}
        </Stack>

        <FormHelperText error={!isValid} style={{ textAlign: 'right' }}>
          {!isValid && 'Code is required'}
        </FormHelperText>

        <LoadingButton
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          loading={isSubmitting}
          sx={{ mt: 3 }}
        >
          Verify
        </LoadingButton>
      </Form>
    </FormikProvider>
  );
}
