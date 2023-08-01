

import dom from'../dom.js';
import addTaskList from '../handlers/addTaskHandler.js';

dom.submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    addTaskList(dom.usersInput.value);
});