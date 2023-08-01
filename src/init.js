import { data} from './data.js';
import {dom} from './dom.js';
import createTask from './components/createTask.js';

// default show some items
data.tasks.forEach((itemData) => {
    const task = createTask(itemData);
    dom.taskList.append(task);
});

import './events/addTaskListener.js';
import './events/submitTaskListener.js';
import './events/deleteTaskListener.js';







