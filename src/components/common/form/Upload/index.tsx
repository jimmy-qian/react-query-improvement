import * as React from 'react';
import { useDropzone, FileRejection, Accept } from 'react-dropzone';
import { useFormContext } from 'react-hook-form';

import { FormField, FormFieldProps } from 'common/form/FormField';

import { DropzoneContainer, DropzoneEmptyText, PlaceholderContainer, UploadIcon } from './styled';

export const Upload = ({
  description,
  name,
  onChange,
  label,
  icon,
  iconPosition = 'left',
  error,
  margin,
  disabled = false,
  accept = {
    'image/*': ['.jpeg', '.jpg', '.png'],
    'application/pdf': ['.pdf'],
  },
  value,
}: UploadProps) => {
  const [file, setFile] = React.useState<File | undefined>(undefined);
  const formMethods = useFormContext();
  const IconComponent = icon;

  React.useEffect(() => {
    setFile(value);
  }, [value]);

  const setError = (message: string) => {
    if (formMethods) {
      formMethods.setError(name, {
        type: 'manual',
        message,
      });
    }
  };

  const onDrop = (acceptedFiles: File[], rejectedFiles: FileRejection[]) => {
    if (rejectedFiles.length > 0) {
      return setError('Filetype not supported');
    }

    if (acceptedFiles.length > 1) {
      return setError('You can add only one file');
    }

    if (acceptedFiles[0].size > 1000000) {
      return setError('Filesize is to large. Max. 1mb allowed.');
    }

    setFile(acceptedFiles[0]);
    onChange(acceptedFiles[0]);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: accept,
    onDrop,
    multiple: false,
    disabled,
  });

  return (
    <FormField {...{ name, label, error, description, margin }}>
      <DropzoneContainer {...getRootProps()} disabled={disabled} error={Boolean(error)}>
        <input {...getInputProps()} />
        <DropzoneEmptyText>
          <PlaceholderContainer hasIcon={Boolean(icon)} iconPosition={iconPosition}>
            <>
              {icon && <UploadIcon>{IconComponent}</UploadIcon>}
              {isDragActive ? 'Drop here' : file ? file.name : 'Choose file'}
            </>
          </PlaceholderContainer>
        </DropzoneEmptyText>
      </DropzoneContainer>
    </FormField>
  );
};

export type UploadProps = FormFieldProps & {
  onChange: (file: File) => void;
  accept?: Accept;
  name: string;
  disabled?: boolean;
  icon?: React.ReactElement;
  iconPosition?: 'left' | 'right';
  value: File;
};
