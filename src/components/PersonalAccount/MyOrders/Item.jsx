import React from 'react';
import PropTypes from 'prop-types';
import {
  Block,
  Button,
  Delivery,
  Div,
  InfoStyle,
  ImageStyle,
  Item,
  SelectionPoint,
  TextInfo,
  TextPreview,
  Total,
  Wrap,
} from './MyOrders.styled';
import { ReactComponent as ArrowDownIcon } from '../../../icons/personal-icon/arrow-down.svg';
import image from '../../../images/8.jpeg';

const ItemComponent = ({ isopen, fn }) => {
  return (
    <Item isopen={isopen}>
      <Div>
        <TextPreview>Замовлення № 240202</TextPreview>
        <TextPreview>Дата замовлення 14.03.2023</TextPreview>
        <TextPreview>Сума замовлення: 1050 грн.</TextPreview>
      </Div>
      <Wrap isopen={isopen}>
        <Block>
          <ImageStyle src={image} alt="image" />
          <InfoStyle>
            <a href="#">Футболка Mich team</a>
            <p>1 шт</p>
            <p>1050₴</p>
          </InfoStyle>
        </Block>
        <TextInfo>
          Сума замовлення <strong>1050₴</strong>
        </TextInfo>
        <TextInfo>
          Доставка <strong>59₴</strong>
        </TextInfo>
        <Total>
          Разом <strong>1109₴</strong>
        </Total>
        <Delivery>
          <SelectionPoint>
            <h3>Спосіб доставки</h3>
            <p>Відділення </p>
            <p>Нова пошта</p>
          </SelectionPoint>
          <SelectionPoint>
            <h3>Пункт відбору</h3>
            <p>Нова пошта, відділення № 4 пр. Соборний 140, м. Запоріжжя </p>
          </SelectionPoint>
          <SelectionPoint>
            <h3>Контактні дані</h3>
            <p>Аліна Тодоренко </p>
            <p>+380677857143</p>
            <p>alinatodorenko@gmail.com</p>
          </SelectionPoint>
        </Delivery>
      </Wrap>

      <Button isopen={isopen} onClick={fn}>
        <ArrowDownIcon />
      </Button>
    </Item>
  );
};

ItemComponent.propTypes = {
  isopen: PropTypes.bool,
  fn: PropTypes.func,
};

export default ItemComponent;
