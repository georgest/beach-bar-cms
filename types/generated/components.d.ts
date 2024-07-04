import type { Schema, Attribute } from '@strapi/strapi';

export interface CommonItems extends Schema.Component {
  collectionName: 'components_common_items';
  info: {
    displayName: 'items';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    item: Attribute.Relation<
      'common.items',
      'oneToOne',
      'api::product-item.product-item'
    >;
    amount: Attribute.Integer & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'common.items': CommonItems;
    }
  }
}
