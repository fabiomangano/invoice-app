import React from 'react';
import Renderer from 'react-test-renderer';
import Avatar from './Avatar';

describe('Avatar', () => {
  it('should render an avatar with a placeholder image', () => {
    let tree;
    Renderer.act(() => {
      tree = Renderer.create(<Avatar alt="image" />);
    });
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
