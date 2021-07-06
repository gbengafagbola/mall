import styled from 'styled-components';

import { ReactComponent as ShopSvg } from '../../assets/shop.svg';
import { ReactComponent as Chevron } from '../../assets/chevron.svg';
import { ReactComponent as BlogSvg } from '../../assets/blog.svg';
import { ReactComponent as CameraSvg } from '../../assets/camera.svg';
import { ReactComponent as DesignerSvg } from '../../assets/designer.svg';


export const Dropdown = styled.div`
  position: absolute;
  // top: 58px;
  // width: 300px;
  transform: translateX(-45%);
  // background-color: var(--bg);
  border: var(--border);
  border-radius: var(--border-radius);
  padding: 0.6rem;
  overflow: hidden;
  transition: height var(--speed) ease;


  width: 190px;
  height: 340px;
  display: flex;
  flex-direction: column;
  // padding: 20px;
  // border: 1px solid black;
  background-color: white;
  padding-top: 0px;
  top: 70px;
  left: 75px;
  z-index: 5;
}
`;

export const Blog = styled(BlogSvg)`
width: 20px;
height: 20px;
`;

export const Camera = styled(CameraSvg)`
width: 20px;
height: 20px;
`;

export const Designer = styled(DesignerSvg)`
width: 20px;
height: 20px;
`;

export const Shop = styled(ShopSvg)`
width: 20px;
height: 20px;
`;

export const ChevronSvg = styled(Chevron)`
width: 12px;
height: 12px;
`;

export const Menu = styled.div`
  width: 80%;
  padding-top: 0px;
  padding-bottom: 13px;
}
`;

export const MenuItem = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  border-radius: var(--border-radius);
  transition: background var(--speed);
  padding: 0.5rem;
  margin-right: 0.5rem;
}
`;

export const IconButton = styled.span`
  margin-right: 0.5rem;
}
`;

export const IconRight = styled.span`
  margin-left: 11px;
}
`;


export const MenuPrimary = styled.div`
  // position: absolute;
  transform: translateX(-110%);
  transition: all var(--speed) ease;
}
`;