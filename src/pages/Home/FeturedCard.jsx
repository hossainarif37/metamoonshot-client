const FeturedCard = ({ info }) => {
    const { img } = info
    return (
        <div>
            <img src={img} alt="" />
        </div>
    );
};

export default FeturedCard;