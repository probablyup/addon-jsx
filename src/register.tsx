import React from 'react';
import { addons } from '@storybook/addons';
import { STORY_RENDERED } from '@storybook/core-events';
import Channel from '@storybook/channels';

import JSX from './jsx';
import { ComponentMap } from './renderer';
import { ADDON_ID, ADDON_PANEL, EVENTS } from './constants';

export interface Listener {
  next(
    scope: 'current' | 'jsx'
  ): typeof scope extends 'current'
    ? (id: string) => void
    : (id: string, jsx: string, components: ComponentMap) => void;
}

/** A function that lets the panel listen to storybook event */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const observable = (channel: Channel, api: any) => (listener: Listener) => {
  channel.on(EVENTS.ADD_JSX, listener.next('jsx'));
  api.on(STORY_RENDERED, listener.next('current'));
};

addons.register(ADDON_ID, api => {
  const ob = observable(addons.getChannel(), api);

  addons.addPanel(ADDON_PANEL, {
    title: 'JSX',
    render: ({ active = false }) => (
      <JSX key="addon-jsx" active={active} ob={ob} />
    )
  });
});
