import { render, screen } from '@testing-library/react';

import Portfolio from '@/pages/portfolio';

// The easiest solution to mock `next/router`: https://github.com/vercel/next.js/issues/7479
// The mock has been moved to `__mocks__` folder to avoid duplication

describe('About page', () => {
  describe('Render method', () => {
    it('should have two paragraphs of `Lorem ipsum`', () => {
      render(<Portfolio />);

      const paragraph = screen.getAllByText(/Lorem ipsum/);

      expect(paragraph).toHaveLength(2);
    });
  });
});
