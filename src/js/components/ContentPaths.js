import DefaultContent from './content/Default';
import Menu from './content/Menu';
import About from './content/About';
import Error from './content/Error';

export default [
    {
        path: "/",
        label: "Default",
        ContentComponent: DefaultContent,
        exact: true
    },
    {
        path: "/premade",
        label: "Premade",
        ContentComponent: Menu,
        isMenuItem: true
    },
    {
        path: "/Custom",
        label: "Custom",
        ContentComponent: Menu,
        isMenuItem: true
    },
    {
        path: "/character",
        label: "Character",
        ContentComponent: Menu,
        isMenuItem: true
    },
    {
        path: "/about",
        label: "About",
        ContentComponent: About,
        isMenuItem: true
    },
    {
        ContentComponent: Error // Make sure is last item
    }
]
