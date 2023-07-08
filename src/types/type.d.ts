import { IconType } from "react-icons/lib";

type work = {
  title: string;
  website?: string;
  instanceName: string;
  date: {
    start: string;
    end?: string;
  };
  description: string[];
};

type socmed = {
  name: string;
  url: string;
  icon: IconType;
};

type Image = {
  src : string,
  alt : string,
  desc : string
}

type project = {
  title: string;
  description: string;
  tags: Array<string>;
  isHighlight: boolean;
  links: {
    github: string;
    demo: string;
  };
  imagePreview : Image
  
  ,
  images : Array<Image>
};

