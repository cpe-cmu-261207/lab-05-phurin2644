type FooterProps = {
    text: string;
}

const FooterCard = ({text}: FooterProps) => {
    return(
        <p className='text-center text-gray-400'> {text} </p>
    )
}
export default FooterCard