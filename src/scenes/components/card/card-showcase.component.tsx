import React from 'react';
import { Card, CardElement, CardProps, Text } from '@ui-kitten/components';

export const CardShowcase = (props: CardProps): CardElement => (
  <Card {...props}>
    <Text>
      The Maldives, officially the Republic of Maldives, is a small country in South Asia, located in the Arabian Sea of the Indian Ocean. It lies southwest of Sri Lanka and India, about 1,000 kilometres (620 mi) from the Asian continent
    </Text>
  </Card>
);
