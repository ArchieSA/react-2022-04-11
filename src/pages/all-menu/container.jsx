import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selecAllMenu, selectIsProductsLoading } from '../../features/menu/module/selectors';
import { loadProducts } from '../../features/menu/module/thunks/load-products';
import { AllMenuPage } from './component';
import { SpinnerLoader } from '../../features/spinner/component';

export const AllMenuPageContainer = () => {
  const
    dispatch  = useDispatch(),
    isLoading = useSelector(selectIsProductsLoading),
    allMenu   = useSelector(selecAllMenu);
  
  useEffect(() => {
    dispatch(loadProducts());
  }, []);

  if (!allMenu || isLoading) return <SpinnerLoader isLoading={isLoading} text='All menu' />;

  return (
    <AllMenuPage allMenu={allMenu} />
  )
};
