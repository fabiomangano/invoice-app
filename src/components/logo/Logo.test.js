import React from 'react';
import Renderer from 'react-test-renderer';
import Logo from './Logo';

describe('Logo', () => {
  it('Should render correctly the main app logo', () => {
    let tree;
    Renderer.act(() => {
      tree = Renderer.create(<Logo />);
    });
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
