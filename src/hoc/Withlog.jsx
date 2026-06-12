export const Withlog = (Component) => {
    function ComponentWithlog(props) {
        console.log("hola")

        return <Component {...props} />
    }

    return ComponentWithlog
}