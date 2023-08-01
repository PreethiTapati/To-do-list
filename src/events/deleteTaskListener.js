import { data} from '../data.js';
import {dom} from '../dom.js';

dom.clearAllBtn.addEventListener('click', () => {
    dom.taskList.innerHTML = '';
    data.tasks = [];
});