import { Flex } from 'ui';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Layout/Flex',
  component: Flex,
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: (
    <>
      <p>Hello</p>
      <p>Goodbye</p>
    </>
  ),
  className: 'w-32',
  justify: 'between',
};
