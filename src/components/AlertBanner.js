const AlertBanner = (props) => {
    const nominated = props.isNominated;

    if (nominated === true ) {
        return (
            <div className="alert-banner">Already nominated!</div>
        );
    } else {
        return (null);
    }
    
}
 
export default AlertBanner;