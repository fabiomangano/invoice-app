import React from 'react';
import Renderer from 'react-test-renderer';
import Appbar from './Appbar';
import Avatar from '../avatar/Avatar';
import Logo from '../logo/Logo';
import ToggleTheme from '../toggle-theme/ToggleTheme';

jest.mock('../avatar/Avatar', () => () => <svg />);
jest.mock('../logo/Logo', () => () => <svg />);
jest.mock('../toggle-theme/ToggleTheme', () => () => (
  <button type="button">toggleTheme</button>
));

describe('Appbar', () => {
  let tree;
  let theme;
  let toggleTheme;

  beforeAll(() => {
    theme = 'light';
    toggleTheme = jest.fn();
  });

  afterEach(() => {
    tree = null;
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should render an horizontal Appbar', () => {
    Renderer.act(() => {
      tree = Renderer.create(
        <Appbar variant="horizontal">
          <Logo />
          <Appbar.Menu>
            <Appbar.Option>
              <ToggleTheme theme={theme} toggleTheme={toggleTheme} />
            </Appbar.Option>
            <Appbar.Divider />
            <Appbar.Option>
              <Avatar alt="Profile Image" />
            </Appbar.Option>
          </Appbar.Menu>
        </Appbar>,
      );
    });

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('should render a vertical Appbar', () => {
    Renderer.act(() => {
      tree = Renderer.create(
        <Appbar variant="vertical">
          <Logo />
          <Appbar.Menu>
            <Appbar.Option>
              <ToggleTheme theme={theme} toggleTheme={toggleTheme} />
            </Appbar.Option>
            <Appbar.Divider />
            <Appbar.Option>
              <Avatar alt="Profile Image" />
            </Appbar.Option>
          </Appbar.Menu>
        </Appbar>,
      );
    });

    expect(tree.toJSON()).toMatchSnapshot();
  });
});
