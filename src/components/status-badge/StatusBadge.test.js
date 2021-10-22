import React from 'react';
import Renderer from 'react-test-renderer';
import StatusBadge from './StatusBadge';

describe('StatusBagde', () => {
  let tree;

  afterEach(() => {
    tree = null;
  });

  it('should render a badge for the paid status', () => {
    Renderer.act(() => {
      tree = Renderer.create(<StatusBadge variant="paid">Paid</StatusBadge>);
    });
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('should render a badge for the pending status', () => {
    Renderer.act(() => {
      tree = Renderer.create(
        <StatusBadge variant="pending">Pending</StatusBadge>,
      );
    });
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('should render a badge for the draft status', () => {
    Renderer.act(() => {
      tree = Renderer.create(<StatusBadge variant="draft">Draft</StatusBadge>);
    });
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
