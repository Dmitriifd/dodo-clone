import { toast } from 'react-hot-toast';

export const notify = ({ title, desc }: { title: string; desc?: any }) =>
  toast(
    desc
      ? `Добавлено:
      ${title} ${desc ?? desc} см
    `
      : `Добавлено: ${title}`,
    {
      icon: '🍕',
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
        padding: '15px'
      }
    }
  );
