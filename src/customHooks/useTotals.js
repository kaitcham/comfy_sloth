import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTotals } from '../features/cart/cartSlice';

const useTotals = () => {
  const dispatch = useDispatch();
  const {
    cart, totalItems, totalAmount, shippingFee,
  } = useSelector(
    (state) => state.cart,
  );

  useEffect(() => {
    dispatch(getTotals());
  }, [cart]);

  return { totalItems, totalAmount, shippingFee };
};

export default useTotals;
