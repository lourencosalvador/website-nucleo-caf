import { ComponentProps } from "react";
import { tv, VariantProps } from "tailwind-variants";

const button = tv({
  base: "rounded-full bg-[#00FF47]  text-sm font-medium text-zinc-900 data-[success=true]:bg-orange-400",
  variants: {
    style: {
      default:
        "w-[106px] h-[38px] rounded-full text-sm font-medium text-zinc-900 bg-[#00FF47]",
      lg: "w-[293px] h-[50px] rounded-full text-base text-primary",
      
    },
    success: {
      true: "bg-green-400",
    },
  },
  defaultVariants: {
    style: "default",
    success: false,
  },
});

export type ButtonProps = ComponentProps<"button"> &
  VariantProps<typeof button> & {
    asChild: boolean;
  };

export function Button({ success, style, className, ...props }: ButtonProps) {
  //  const Component = props.asChild ? Slot : 'button'
  return (
    <button
      data-success={success}
      className={button({ style, className })}
      {...props}
    />
  );
}