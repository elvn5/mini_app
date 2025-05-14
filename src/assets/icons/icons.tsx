import Muscle from './muscle.svg';

export const icons = {
  muscle: Muscle,
};

export type IconType = keyof typeof icons;

export type IconProps = {
  type: IconType;
  fill?: string;
};

export const Icon = (props: IconProps) => {
  const { type, ...rest } = props;
  const SelectedIcon = icons[type];

  return <SelectedIcon {...rest} />;
};