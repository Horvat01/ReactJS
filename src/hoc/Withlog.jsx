export const Withlog = (Component) => {
    function ComponentWithlog(props) {
        console.log("Hola desde el hoc")

        return <Component {...props} />
    }

    return ComponentWithlog
}