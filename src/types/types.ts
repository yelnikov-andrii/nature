export type Item = {
  id: number;
  link: string;
  title: string;
};

export interface PlaceObj {
  title: string;
  img?: string;
  alt?: string;
  iframe?: () => JSX.Element;
  description: string;
  link: string;
}

export interface SliderItem {
  id: number;
  color: string;
  title: string;
  description: string;
};

export type QuestionType = {
  id: number;
  question: string;
  answer: string;
};
