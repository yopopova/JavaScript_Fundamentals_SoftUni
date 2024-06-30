function systemsRegister(arr) {
    class System {
        constructor(name) {
            this.systemName = name;
            this.components = [];
        }

        addComponent(component) {
            this.components.push(component);
        }

        get getComponents() {
            return this.components;
        }
    }

    class Component {
        constructor(name) {
            this.name = name;
            this.subcomponents = [];
        }

        addSubComponent(subcomponent) {
            this.subcomponents.push(subcomponent);
        }
    }

    let register = [];

    for (let line of arr) {
        let elements = line.split(' | ');

        let containsInSystems = (systemName) => {
            let system = null;
            register.forEach(el => el.systemName === systemName ? system = el : null);
            return system;
        }

        if (containsInSystems(elements[0]) === null) {
            let system = new System(elements[0]);
            let component = new Component(elements[1]);
            component.addSubComponent(elements[2]);
            system.addComponent(component);
            register.push(system);
        } else {
            let system = containsInSystems(elements[0]);
            let component = system.getComponents.find(el => el.name === elements[1]);

            if (component !== undefined) {
                component.addSubComponent(elements[2]);
            } else {
                let newComponent = new Component(elements[1]);
                newComponent.addSubComponent(elements[2]);
                system.addComponent(newComponent);
            }
        }
    }

    register = Object.values(register).sort((a, b) => {
        return b.components.length - a.components.length || a.systemName.localeCompare(b.systemName);
    });

    for (let system of Object.values(register)) {
        console.log(system.systemName);
        let components = system.components;

        for (let component of components.sort((a, b) => b.subcomponents.length - a.subcomponents.length)) {
            console.log(`|||${component.name}`);
            let subcomponents = component.subcomponents;

            for (const subcomponent of subcomponents) {
                console.log(`||||||${subcomponent}`);
            }
        }
    }
}

systemsRegister([
    'SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security']);

// systemsRegister([
//     'Shift | Section-A | A-2',
//     'Shift | Section-A | A-3',
//     'Shift | Section-A | A-23',
//     'Shift | Section-B | B-1',
//     'Shift | Section-B | B-64',
//     'Shift | Section-B | B-56',
//     'Shit | Anex | Indie',
//     'Shit | Bider | Indie']);