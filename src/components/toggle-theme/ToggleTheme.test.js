import React from 'react';
import Renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import ToggleTheme from './ToggleTheme';

describe('ToggleTheme', () => {
  let tree;
  let theme;
  let toggleTheme;

  beforeAll(() => {
    toggleTheme = jest.fn();
    theme = 'light';
  });

  afterEach(() => {
    tree = null;
  });

  it('should render correctly the theme button', () => {
    Renderer.act(() => {
      tree = Renderer.create(
        <ToggleTheme theme={theme} toggleTheme={toggleTheme} />,
      );
    });

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('should call toggleTheme callback', () => {
    const wrapper = mount(
      <ToggleTheme theme={theme} toggleTheme={toggleTheme} />,
    );
    wrapper.find('button').simulate('click');
    expect(toggleTheme).toHaveBeenCalledTimes(1);
  });
});
