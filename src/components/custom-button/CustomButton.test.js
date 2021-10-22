import React from 'react';
import Renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import CustomButton from './CustomButton';

describe('Custom Button', () => {
  it('should render a custom button with default props', () => {
    let tree;
    const onClick = jest.fn();

    Renderer.act(() => {
      tree = Renderer.create(
        <CustomButton onClick={onClick}>Default Button</CustomButton>,
      );
    });

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('should render a primary button', () => {
    let tree;
    const onClick = jest.fn();

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
    let tree;
    const onClick = jest.fn();

    Renderer.act(() => {
      tree = Renderer.create(
        <CustomButton onClick={onClick} variant="secondary">
          Primary Button
        </CustomButton>,
      );
    });

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('should render a tertiary button', () => {
    let tree;
    const onClick = jest.fn();

    Renderer.act(() => {
      tree = Renderer.create(
        <CustomButton onClick={onClick} variant="tertiary">
          Primary Button
        </CustomButton>,
      );
    });

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('should render a danger button', () => {
    let tree;
    const onClick = jest.fn();

    Renderer.act(() => {
      tree = Renderer.create(
        <CustomButton onClick={onClick} variant="danger">
          Primary Button
        </CustomButton>,
      );
    });

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('should render a small button', () => {
    let tree;
    const onClick = jest.fn();

    Renderer.act(() => {
      tree = Renderer.create(
        <CustomButton onClick={onClick} size="small">
          Primary Button
        </CustomButton>,
      );
    });

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('should render a medium button', () => {
    let tree;
    const onClick = jest.fn();

    Renderer.act(() => {
      tree = Renderer.create(
        <CustomButton onClick={onClick} size="medium">
          Primary Button
        </CustomButton>,
      );
    });

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('should render a large button', () => {
    let tree;
    const onClick = jest.fn();

    Renderer.act(() => {
      tree = Renderer.create(
        <CustomButton onClick={onClick} size="large">
          Primary Button
        </CustomButton>,
      );
    });

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('should render a fluid button', () => {
    let tree;
    const onClick = jest.fn();

    Renderer.act(() => {
      tree = Renderer.create(
        <CustomButton onClick={onClick} size="fluid">
          Primary Button
        </CustomButton>,
      );
    });

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('should trigger cb function onClick', () => {
    const onClick = jest.fn();
    const wrapper = mount(<CustomButton onClick={onClick}>Click</CustomButton>);
    wrapper.find('button').simulate('click');
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
