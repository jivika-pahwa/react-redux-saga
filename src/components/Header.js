import { useSelector } from 'react-redux';

const getState = (state) => {
    return {
        addToCart: state?.cartData
    }
}
const Header = () => {

    const getCartData = useSelector(getState);
    console.log("redux", getCartData?.addToCart);
    const CartData = getCartData?.addToCart.length ? getCartData?.addToCart : []
    console.log("cartdata", CartData);
    const fruits = ["Apple", "Mango", "Cherry", "Banana"];

    return (
        <>
            <h3> Header Component </h3>
            <p>Data from redux</p>
            {/* {fruits?.map((key, i) => {
                return (<p>{`fruits[${i}] - ${key}`}</p>)
            })} */}

            {CartData?.map((element, i) => {
                return (
                    <>
                        <p> {`${CartData[i].item1}`} </p>
                        <p>{CartData[i].item2} </p>
                        <p>{CartData[i].item3}</p>
                        <p>{CartData[i].item4}</p>
                        <p>{CartData[i].item5}</p>

                    </>)
            })}
        </>
    )
};

export default Header;