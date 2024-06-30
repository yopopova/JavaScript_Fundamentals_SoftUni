function browserHistory(obj, arr) {
    let browserInfo = Object.assign(obj);

    for (let line of arr) {
        let [command, ...siteName] = line.split(' ');
        let site = siteName.join(' ');

        if (command === 'Close') {
            if (browserInfo['Open Tabs'].includes(site)) {
                let index = browserInfo['Open Tabs'].indexOf(site);
                browserInfo['Open Tabs'].splice(index, 1);
                browserInfo['Recently Closed'].push(site);
                browserInfo['Browser Logs'].push(line);
            }
        } else if (command === 'Open') {
            browserInfo['Open Tabs'].push(site);
            browserInfo['Browser Logs'].push(line);

        } else if (command === 'Clear') {
            browserInfo['Open Tabs'] = [];
            browserInfo['Recently Closed'] = [];
            browserInfo['Browser Logs'] = [];
        }
    }

    console.log(browserInfo['Browser Name']);
    console.log(`Open Tabs: ${browserInfo['Open Tabs'].join(', ')}`);
    console.log(`Recently Closed: ${browserInfo['Recently Closed'].join(', ')}`);
    console.log(`Browser Logs: ${browserInfo['Browser Logs'].join(', ')}`);
}

browserHistory({
    "Browser Name": "Google Chrome",
    "Open Tabs": ["Facebook", "YouTube", "Google Translate"],
    "Recently Closed": ["Yahoo", "Gmail"],
    "Browser Logs": ["Open YouTube", "Open Yahoo", "Open Google Translate", "Close Yahoo", "Open Gmail", "Close Gmail", "Open Facebook"]},
    ["Close Facebook", "Open StackOverFlow", "Open Google"]);

// browserHistory({
//     "Browser Name": "Mozilla Firefox",
//     "Open Tabs": ["YouTube"],
//     "Recently Closed": ["Gmail", "Dropbox"],
//     "Browser Logs": ["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]},
//     ["Open Wikipedia", "Clear History and Cache", "Open Twitter"]);