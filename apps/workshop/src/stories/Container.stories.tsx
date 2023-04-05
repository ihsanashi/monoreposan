import { Container } from 'ui';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Layout/Container',
  component: Container,
} as ComponentMeta<typeof Container>;

const Template: ComponentStory<typeof Container> = (args) => (
  <Container {...args} />
);

export const Default = Template.bind({});

Default.args = {
  children: <p>This is a container</p>,
};

export const CenterContent = Template.bind({});
CenterContent.args = {
  children: <p>The content is centered</p>,
  centerContent: true,
  className: 'w-32 text-center',
};
