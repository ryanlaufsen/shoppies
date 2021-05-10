import './NominationOverlay.css'

const AddNomination = (props) => {
    return (
        <>
            <span className='flex-col-center label' style={{marginBottom: "20px"}}>Nominate</span>
            <svg width="96" height="92" viewBox="0 0 96 92" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" style={{marginBottom: "40px", backgroundColor: "transparent"}}>
                <title>Add</title>
                <path d="M63.4392 27.5033L53.9024 6.82755C51.5792 1.79088 44.4208 1.79088 42.0976 6.82755L32.5608 27.5033C32.3423 27.977 31.8934 28.3032 31.3753 28.3646L8.76449 31.0455C3.25643 31.6986 1.04437 38.5066 5.11662 42.2725L21.8334 57.7317C22.2164 58.0859 22.3879 58.6136 22.2862 59.1253L17.8487 81.4579C16.7678 86.8982 22.559 91.1058 27.399 88.3966L47.2673 77.2751C47.7225 77.0203 48.2775 77.0203 48.7327 77.2751L68.601 88.3966C73.441 91.1058 79.2322 86.8982 78.1513 81.4579L73.7138 59.1253C73.6121 58.6136 73.7836 58.0859 74.1666 57.7317L90.8834 42.2725C94.9556 38.5066 92.7436 31.6986 87.2355 31.0455L64.6246 28.3646C64.1066 28.3032 63.6577 27.977 63.4392 27.5033Z" fill="#FFDD28" stroke="#FFC700" strokeWidth="5"/>
            </svg>
        </>
    );
}
 
export default AddNomination;