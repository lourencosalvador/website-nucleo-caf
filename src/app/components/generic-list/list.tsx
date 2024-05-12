
import { twMerge } from 'tailwind-merge'
import { ItemBase, ListProps } from './models';

export const List = <T extends ItemBase>({
  children,
  items,
  header,
  footer,
  classeName,
}: ListProps<T>) => {
  return (
    <div className="list-content">
      {header}

      <ul  className={twMerge(classeName)}>
        {items.map((item, index) => children({ item, index }))}
      </ul>
      {footer}
    </div>
  );
};