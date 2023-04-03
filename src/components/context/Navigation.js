import { createContext, useState, useEffect } from "react";

const NavigationContext = createContext();
function NavigationProvider({ children }) {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    useEffect(() => {
        const handler = () => {
            setCurrentPath(window.location.pathname)
        }
        if (currentPath === '/select') {
            (() => {
                const div = document.querySelector('#second')
                div.classList.add("circleFirst")
                div.classList.remove('circleDiv')
            })()
        }
        if (currentPath === '/') {
            (() => {
                const div = document.querySelector('#first')
                div.classList.add("circleFirst")
                div.classList.remove('circleDiv')
            })()
        }
        if (currentPath === '/options') {
            (() => {
                const div = document.querySelector('#third')
                div.classList.add("circleFirst")
                div.classList.remove('circleDiv')
            })()
        }
        if (currentPath === '/finish') {
            (() => {
                const div = document.querySelector('#forth')
                div.classList.add("circleFirst")
                div.classList.remove('circleDiv')
            })()
        }
        if (currentPath === '/thankYou') {
            (() => {
                const div = document.querySelector('#forth')
                div.classList.add("circleFirst")
                div.classList.remove('circleDiv')
            })()
        }
        window.addEventListener('popstate', handler)
        return () => {
            window.removeEventListener('popstate', handler)
        }
    }, [currentPath])

    // const navigate = (to) => {
    //     window.history.pushState({}, '', to)
    //     setCurrentPath(to)
    // }
    return <NavigationContext.Provider value={{ currentPath, setCurrentPath }}  >
        <div>

        </div>
        {children}
    </NavigationContext.Provider>
}
export { NavigationProvider }
export default NavigationContext