import React from 'react';
import Renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import Button from './Button';

describe('Custom Button', () => {
  let tree;
  let onClick;

  beforeAll(() => {
    onClick = jest.fn();
  });

  afterEach(() => {
    tree = null;
  });

  it('should render a custom button with default props', () => {
    Renderer.act(() => {
      tree = Renderer.create(<Button onClick={onClick}>Default Button</Button>);
    });

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('should render a primary button', () => {
    Renderer.act(() => {
      tree = Renderer.create(
        <Button onClick={onClick} variant="primary">
          Primary Button
        </Button>,
      );
    });

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('should render a secondary button', () => {
    Renderer.act(() => {
      tree = Renderer.create(
        <Button onClick={onClick} variant="secondary">
          Secondary Button
        </Button>,
      );
    });

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('should render a tertiary button', () => {
    Renderer.act(() => {
      tree = Renderer.create(
        <Button onClick={onClick} variant="tertiary">
          Tertiary Button
        </Button>,
      );
    });

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('should render a danger button', () => {
    Renderer.act(() => {
      tree = Renderer.create(
        <Button onClick={onClick} variant="danger">
          Danger Button
        </Button>,
      );
    });

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('should render a small button', () => {
    Renderer.act(() => {
      tree = Renderer.create(
        <Button onClick={onClick} size="small">
          Small Button
        </Button>,
      );
    });

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('should render a medium button', () => {
    Renderer.act(() => {
      tree = Renderer.create(
        <Button onClick={onClick} size="medium">
          Medium Button
        </Button>,
      );
    });

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('should render a large button', () => {
    Renderer.act(() => {
      tree = Renderer.create(
        <Button onClick={onClick} size="large">
          Large Button
        </Button>,
      );
    });

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('should render a fluid button', () => {
    Renderer.act(() => {
      tree = Renderer.create(
        <Button onClick={onClick} size="fluid">
          Fluid Button
        </Button>,
      );
    });

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('should trigger cb function onClick', () => {
    const wrapper = mount(<Button onClick={onClick}>Click</Button>);
    wrapper.find('button').simulate('click');
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
