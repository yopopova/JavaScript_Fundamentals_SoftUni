function browserHistory(object, stringArray) {
    let newObj = {
        'Browser Name': object['Browser Name'],
        'Open Tabs': [...object['Open Tabs']],
        'Recently Closed': [...object['Recently Closed']],
        'Browser Logs': [...object['Browser Logs']],
    };

    for (let command of stringArray) {
        let data = command.split(' ');
        let currentCommand = data[0];
        let site = data[1];

        if (currentCommand === 'Open') {
            openTab(object, site);
        } else if (currentCommand === 'Close') {
            closeTab(object, site);
        } else if (command === 'Clear History and Cache') {
            emptyObject(object);
        }
    }

    console.log(object['Browser Name']);
    console.log(`Open Tabs: ${object['Open Tabs'].join(', ')}`);
    console.log(`Recently Closed: ${object['Recently Closed'].join(', ')}`);
    console.log(`Browser Logs: ${object['Browser Logs'].join(', ')}`);

    function openTab(obj, site) {
        obj['Open Tabs'].push(site);
        browserLogs(object, 'Open ' + site);
    }

    function closeTab(obj, site) {
        if (obj['Open Tabs'].includes(site)) {
            let index = obj['Open Tabs'].findIndex(x => x === site);
            let result = obj['Open Tabs'].splice(index, 1);
            obj['Recently Closed'].push(result[0]);
            browserLogs(object, 'Close ' + site);
        }
    }

    function browserLogs(obj, command) {
        obj['Browser Logs'].push(command)
    }

    function emptyObject(obj) {
        obj['Open Tabs'] = [];
        obj['Recently Closed'] = [];
        obj['Browser Logs'] = [];
    }
}