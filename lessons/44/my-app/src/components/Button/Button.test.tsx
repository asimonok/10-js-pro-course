import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Button from './Button';

it('Render button', () => {
  const component = <Button text="text" />;

  render(component);
  expect(screen.getByTestId('button')).toBeInTheDocument();
});
