// @ts-check
module.exports = {
  addons: ['@storybook/addon-essentials', '../../lib/register'],
  core: {
    builder: 'webpack5',
  },
  stories: ['../stories/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
};
