const NominationsBanner = (props) => {
    return (
        <>
            You have made
            <div className="big-text">{ props.nomLength }</div>
            nominations
        </>
    );
}
 
export default NominationsBanner;