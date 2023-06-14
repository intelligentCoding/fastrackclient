import React from 'react';
import { useWatch } from 'react-hook-form';

const DisplayColorCode = ({ control }: any) => {
  const color = useWatch({
    control,
    name: 'color',
    defaultValue: '#d87b64', // default value before the render
  });
  return (
    <>
      {color !== null && (
        <span className="rounded border border-border-200 bg-gray-100 px-2 py-1 text-sm text-heading ms-3">
          {color}
        </span>
      )}
    </>
  );
};

export default DisplayColorCode;
