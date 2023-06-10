import { ReactComponent as CheckIcon } from 'assets/img/button-selected.svg';
import clsx from 'clsx';
import { useState } from 'react';

const ModalIngredientButton = ({ img, title, price }: any) => {
  const [activeButton, setActiveButton] = useState(false);

  return (
    <button
      onClick={() => setActiveButton(!activeButton)}
      className={clsx('product-ingredients__btn ingredients-card', {
        active: activeButton
      })}>
      <img className="ingredients-card__img" src={img} alt={title} />
      <h3 className="ingredients-card__title">{title}</h3>
      <p className="ingredients-card__price">{price}</p>
      <CheckIcon />
    </button>
  );
};

export { ModalIngredientButton };
