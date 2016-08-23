import { configure } from '@kadira/storybook'

function loadStories() {
    require('../src/components/404/story')
    require('../src/components/AccessDenied/story')
    require('../src/components/Avatar/story')
    require('../src/components/Task/story')
    require('../src/components/Badge/story')
    require('../src/components/Lane/story')
}

configure(loadStories, module)
