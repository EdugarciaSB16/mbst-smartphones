import { render, screen } from '@testing-library/react';
import { ProductGallery } from '../../phoneDetail/components/ProductGallery';
import '@testing-library/jest-dom';

const mockColor = {
  name: 'Black',
  hexCode: '#000000',
  imageUrl: '/black-phone.png',
};

const mockColors = [
  mockColor,
  { name: 'Silver', hexCode: '#cccccc', imageUrl: '/silver-phone.png' },
];

describe('ProductGallery', () => {
  it('renders the image of the selected color', () => {
    render(
      <ProductGallery
        selectedColor={mockColor}
        colorOptions={mockColors}
        setSelectedColor={() => {}}
      />,
    );

    const img = screen.getByAltText(/black/i);
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', '/black-phone.png');
  });
});
