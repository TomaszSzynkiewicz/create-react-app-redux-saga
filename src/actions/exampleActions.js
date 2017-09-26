export const EXAMPLE_ACTION_REQUESTED = 'EXAMPLE_ACTION_REQUESTED';
export const EXAMPLE_ACTION_DONE = 'EXAMPLE_ACTION_DONE';
export const EXAMPLE_ACTION_FAILED = 'EXAMPLE_ACTION_FAILED';

const actionHelper = (type, payload) => ({ type, payload });
export const exampleActionRequested = () => actionHelper(EXAMPLE_ACTION_REQUESTED);
export const exampleActionDone = () => actionHelper(EXAMPLE_ACTION_DONE, { message: 'Hello World!' });
export const exampleActionFailed = () => actionHelper(EXAMPLE_ACTION_FAILED, { error: 'Ooops! Something went wrong...' });
