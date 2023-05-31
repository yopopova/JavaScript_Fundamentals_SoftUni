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