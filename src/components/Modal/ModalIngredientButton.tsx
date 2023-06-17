import { ReactComponent as CheckIcon } from 'assets/img/button-selected.svg';
import clsx from 'clsx';
import { useState } from 'react';
import { addIngredient, removeIngredient } from 'redux/product/productSlice';
import { useAppDispatch } from 'redux/store';
import { Ingredient } from 'types/product';


const ModalIngredientButton = ({ img, title, price, id }: Ingredient) => {
  const [selected, setSelected] = useState(false);

  const dispatch = useAppDispatch();

  function selectIngredient() {
    setSelected(!selected);
    if (!selected) {
      dispatch(addIngredient({ price, title, id }));
    } else {
      dispatch(removeIngredient({ price, id }));
    }
  }

  return (
    <button
      onClick={() => selectIngredient()}
      className={clsx('product-ingredients__btn ingredients-card', {
        active: selected
      })}>
      <img className="ingredients-card__img" src={img} alt={title} />
      <h3 className="ingredients-card__title">{title}</h3>
      <p className="ingredients-card__price">{price} ₽</p>
      <CheckIcon />
    </button>
  );
};

export { ModalIngredientButton };
