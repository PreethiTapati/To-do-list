import { data} from '../data.js';
import {dom} from '../dom.js';

const editTask = (id) => {
    const task = data.tasks.find((taskItem) => taskItem.id === id);
    dom.usersInput.value = task.text;
};

export default editTask;
