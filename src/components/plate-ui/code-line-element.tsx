'use client';

import { PlateElement, PlateElementProps } from '@udecode/plate-common';
import { forwardRef } from 'react';

const CodeLineElement = forwardRef<HTMLDivElement, PlateElementProps>(
  (props, ref) => <PlateElement ref={ref} {...props} />
);
CodeLineElement.displayName = 'CodeLineElement';

export { CodeLineElement };
