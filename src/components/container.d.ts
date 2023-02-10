import {Component} from 'react';
import {InjectorType, ProvideRecipesToInjectorType, Factory} from './injector';

export const appInjector: InjectorType;

export const injectComponents: (
  recipes: any[] | [Factory, Factory][]
) => ProvideRecipesToInjectorType;

export const ContainerFactory: (KeplerGl: Component) => Component;
