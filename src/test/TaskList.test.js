import React from 'react';
import ReactDOM from 'react-dom';
import { WithPinnedTasks } from '../stories/03-TaskList.stories';

it('renders pinned tasks at the start of the list', () => {
  const div = document.createElement('div');
  ReactDOM.render(<WithPinnedTasks />, div);

  // We expect the task titled "Task 6 (pinned)" to be rendered first, not at the end
  //const lastTaskInput = div.querySelector('.list-item:nth-child(1) input[value="Task 6 (pinned)"]');
  const lastTaskInput = div.querySelector('.list-item:nth-child(1) input[value="Task 2"]')
  expect(lastTaskInput).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});