import { ReactComponent as CheckIcon } from 'assets/img/button-selected.svg';
import clsx from 'clsx';
import { useState } from 'react';
import { addIngredient, removeIngredient } from 'redux/products/slice';
import { useAppDispatch } from 'redux/store';

interface ModalIngredientButtonProps {
  title: string;
  price: number;
  img: string;
}

const ModalIngredientButton = ({
  img,
  title,
  price
}: ModalIngredientButtonProps) => {
  const [selected, setSelected] = useState(false);

  const dispatch = useAppDispatch();

  function selectIngredient(price: number) {
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
      <p className="ingredients-card__price">{price} ₽</p>
      <CheckIcon />
    </button>
  );
};

export { ModalIngredientButton };
