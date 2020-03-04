import React from 'react';
import { MenuItem } from '@ui-kitten/components';
import { StarIcon } from '../../../components/icons';
import {
  ComponentShowcase,
  ComponentShowcaseItem,
  ComponentShowcaseSection,
  ComponentShowcaseSetting,
} from '../../../model/showcase.model';


const defaultOverflowMenu: ComponentShowcaseItem = {
  title: 'Default',
  props: {
    children: [
      <MenuItem title='Users'/>,
      <MenuItem title='Orders'/>,
      <MenuItem title='Transactions'/>,
    ],
  },
};

const disabledMenu: ComponentShowcaseItem = {
  title: 'Disabled Item',
  props: {
    children: [
      <MenuItem title='Users' accessoryLeft={StarIcon}/>,
      <MenuItem title='Orders' accessoryLeft={StarIcon}/>,
      <MenuItem title='Transactions' disabled={true} accessoryLeft={StarIcon}/>,
    ],
  },
};

const leftAccessoryMenu: ComponentShowcaseItem = {
  title: 'Left',
  props: {
    children: [
      <MenuItem title='Users' accessoryLeft={StarIcon}/>,
      <MenuItem title='Orders' accessoryLeft={StarIcon}/>,
      <MenuItem title='Transactions' accessoryLeft={StarIcon}/>,
    ],
  },
};

const rightAccessoryMenu: ComponentShowcaseItem = {
  title: 'Right',
  props: {
    children: [
      <MenuItem title='Users' accessoryRight={StarIcon}/>,
      <MenuItem title='Orders' accessoryRight={StarIcon}/>,
      <MenuItem title='Transactions' accessoryRight={StarIcon}/>,
    ],
  },
};

const styledBackdropOverflowMenu: ComponentShowcaseItem = {
  title: 'Styled backdrop',
  props: {
    backdropStyle: { backgroundColor: 'rgba(0, 0, 0, 0.5)' },
    children: defaultOverflowMenu.props.children,
  },
};

const defaultSection: ComponentShowcaseSection = {
  title: 'Default',
  items: [
    defaultOverflowMenu,
    disabledMenu,
  ],
};

const accessoriesSection: ComponentShowcaseSection = {
  title: 'Accessories',
  items: [
    leftAccessoryMenu,
    rightAccessoryMenu,
  ],
};

const backdropSection: ComponentShowcaseSection = {
  title: 'Backdrop',
  items: [
    styledBackdropOverflowMenu,
  ],
};

export const overflowMenuShowcase: ComponentShowcase = {
  title: 'Overflow Menu',
  sections: [
    defaultSection,
    accessoriesSection,
    backdropSection,
  ],
};

export const overflowMenuSettings: ComponentShowcaseSetting[] = [
  {
    propertyName: 'appearance',
    value: 'default',
  },
  {
    propertyName: 'appearance',
    value: 'noDivider',
  },
  {
    propertyName: 'placement',
    value: 'left',
  },
  {
    propertyName: 'placement',
    value: 'left start',
  },
  {
    propertyName: 'placement',
    value: 'left end',
  },
  {
    propertyName: 'placement',
    value: 'top',
  },
  {
    propertyName: 'placement',
    value: 'top start',
  },
  {
    propertyName: 'placement',
    value: 'top end',
  },
  {
    propertyName: 'placement',
    value: 'right',
  },
  {
    propertyName: 'placement',
    value: 'right start',
  },
  {
    propertyName: 'placement',
    value: 'right end',
  },
  {
    propertyName: 'placement',
    value: 'bottom',
  },
  {
    propertyName: 'placement',
    value: 'bottom start',
  },
  {
    propertyName: 'placement',
    value: 'bottom end',
  },
];
