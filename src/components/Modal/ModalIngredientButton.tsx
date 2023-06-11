import { ReactComponent as CheckIcon } from 'assets/img/button-selected.svg';
import clsx from 'clsx';
import { useState } from 'react';
import { addIngredient, removeIngredient } from 'redux/products/products';
import { useAppDispatch } from 'redux/store';

const ModalIngredientButton = ({ img, title, price }: any) => {
  const [selected, setSelected] = useState(false);

  const dispatch = useAppDispatch();

  function selectIngredient(price: any) {
    setSelected(!selected);
    if (!selected) {
      dispatch(addIngredient(price));
    } else {
      dispatch(removeIngredient(price));
    }
  }

  return (
    <button
      onClick={() => selectIngredient(price)}
      className={clsx('product-ingredients__btn ingredients-card', {
        active: selected
      })}>
      <img className="ingredients-card__img" src={img} alt={title} />
      <h3 className="ingredients-card__title">{title}</h3>
      <p className="ingredients-card__price">{price}</p>
      <CheckIcon />
    </button>
  );
};

export { ModalIngredientButton };
