//for error logging service like sentry, bugsnag...

// to use it import it in app.js 
// declare logger.start() on top
// replace console.log() -> logger.log()

import Bugsnag from "@bugsnag/expo"



const log = (error ) => Bugsnag.notify(error);

const start = () => Bugsnag.start();

export default {log, start};
