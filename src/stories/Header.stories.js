import HeaderBar from "./HeaderBar";

export default {
  title: "HeaderBar",
  component: HeaderBar,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/vue/configure/story-layout
    layout: "fullscreen",
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { HeaderBar },
  template: "<HeaderBar/>",
});

export const Logo = Template.bind({});
Logo.args = {
  path: "/images/logo.svg",
};
