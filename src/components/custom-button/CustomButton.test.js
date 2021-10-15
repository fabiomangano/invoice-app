import React from 'react';
import Renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import CustomButton from './CustomButton';

describe('Button', () => {
  it('should render a basic button', () => {
    const onClick = jest.fn();
    const tree = Renderer.create(
      <CustomButton onClick={onClick}>Basic Button</CustomButton>,
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('should trigger cb function onClick', () => {
    const onClick = jest.fn();
    const wrapper = mount(<CustomButton onClick={onClick}>Click</CustomButton>);
    wrapper.find('button').simulate('click');
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
