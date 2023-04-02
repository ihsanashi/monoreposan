import { Box } from 'ui';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Layout/Box',
  component: Box,
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = (args) => <Box {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: <p>Hello world</p>,
};
