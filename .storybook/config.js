import { configure } from '@kadira/storybook';

function loadStories() {
    require('../src/components/404/story')
    require('../src/components/AccessDenied/story')
    require('../src/components/User/story')
    require('../src/components/Task/story')
}

configure(loadStories, module);
