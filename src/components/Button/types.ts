export interface ButtonPropsType {
  type: 'primary' | 'info';
  children: string;
  onClick: () => void;
}

export interface Itheme {
  primary: Record<string, string>;
  info: Record<string, string>;
}
