import * as React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import { FormField, FormFieldProps } from 'common/form/FormField';

export const Wysiwyg = ({ name, value, onChange, label, error, description }: WysiwygProps) => {
  const [initalLoad, setInitalLoad] = React.useState(true);
  const [editorValue, setEditorValue] = React.useState<string>(value || '');

  React.useEffect(() => {
    // To avoid seeing the old value
    setTimeout(() => {
      setInitalLoad(false);
    }, 500);
  }, []);

  const onSetValue = (value: string) => {
    setEditorValue(value);
    onChange(value);
  };

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline', 'blockquote'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['link', 'image'],
      ['clean'],
    ],
  };

  const formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
  ];

  return (
    <FormField {...{ name, label, error, description }}>
      <ReactQuill
        theme="snow"
        defaultValue={value}
        onChange={onSetValue}
        modules={modules}
        formats={formats}
        style={{ minWidth: '100%', minHeight: 300 }}
        {...{
          ...(editorValue !== value &&
            initalLoad && {
              value,
            }),
        }}
      />
    </FormField>
  );
};

export type WysiwygProps = FormFieldProps & {
  value?: string;
  onChange: (value?: string) => void;
};
