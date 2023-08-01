
import dom from '../dom.js';

//import addTaskList from '../handlers/addTaskHandler';

dom.usersInput.addEventListener('keypress', (e) => {
    dom.error.innerText = '';
    dom.error.classList.remove('error1');
});
