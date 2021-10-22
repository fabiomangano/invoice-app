import React from 'react';
import Renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import CustomButton from './CustomButton';

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
      tree = Renderer.create(
        <CustomButton onClick={onClick}>Default Button</CustomButton>,
      );
    });

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('should render a primary button', () => {
    Renderer.act(() => {
      tree = Renderer.create(
        <CustomButton onClick={onClick} variant="primary">
          Primary Button
        </CustomButton>,
      );
    });

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('should render a secondary button', () => {
    Renderer.act(() => {
      tree = Renderer.create(
        <CustomButton onClick={onClick} variant="secondary">
          Secondary Button
        </CustomButton>,
      );
    });

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('should render a tertiary button', () => {
    Renderer.act(() => {
      tree = Renderer.create(
        <CustomButton onClick={onClick} variant="tertiary">
          Tertiary Button
        </CustomButton>,
      );
    });

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('should render a danger button', () => {
    Renderer.act(() => {
      tree = Renderer.create(
        <CustomButton onClick={onClick} variant="danger">
          Danger Button
        </CustomButton>,
      );
    });

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('should render a small button', () => {
    Renderer.act(() => {
      tree = Renderer.create(
        <CustomButton onClick={onClick} size="small">
          Small Button
        </CustomButton>,
      );
    });

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('should render a medium button', () => {
    Renderer.act(() => {
      tree = Renderer.create(
        <CustomButton onClick={onClick} size="medium">
          Medium Button
        </CustomButton>,
      );
    });

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('should render a large button', () => {
    Renderer.act(() => {
      tree = Renderer.create(
        <CustomButton onClick={onClick} size="large">
          Large Button
        </CustomButton>,
      );
    });

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('should render a fluid button', () => {
    Renderer.act(() => {
      tree = Renderer.create(
        <CustomButton onClick={onClick} size="fluid">
          Fluid Button
        </CustomButton>,
      );
    });

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('should trigger cb function onClick', () => {
    const wrapper = mount(<CustomButton onClick={onClick}>Click</CustomButton>);
    wrapper.find('button').simulate('click');
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
