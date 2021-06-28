export interface TreeMenu {
  name: string;
  link: string;
  active: boolean;
  children: TreeMenu[];
}

export const treeMenu: TreeMenu[] = [
  {
    name: 'Day 1 - Installation',
    link: 'day1-installation',
    active: false,
    children: [],
  },
  {
    name: 'Day 2 - Angular app',
    link: 'day2-angular-app',
    active: false,
    children: [],
  },
  {
    name: 'Day 3 - Data binding',
    link: 'day3-data-binding',
    active: false,
    children: [],
  },
  {
    name: 'Day 4 - Structure directive if else',
    link: 'day4-structure-directive-if-else',
    active: false,
    children: [],
  },
  {
    name: 'Day 5 - Structure directive ngFor',
    link: 'day5-structure-directive-ngfor',
    active: false,
    children: [],
  },
  {
    name: 'Day 6 - Attribute directive class style',
    link: 'day6-attribute-directive-class-style',
    active: false,
    children: [],
  },
  {
    name: 'Day 7 - Component interaction 1',
    link: 'day7-component-interaction-1',
    active: false,
    children: [],
  },
  {
    name: 'Day 8 - Component interaction 2',
    link: 'day8-component-interaction-2',
    active: false,
    children: [],
  },
  {
    name: 'Day 9 - Two way binding',
    link: 'day9-two-way-binding',
    active: false,
    children: [],
  },
  {
    name: 'Day 10 - Template variable viewchild viewchildren',
    link: 'template-variable-viewchild-viewchildren',
    active: false,
    children: [],
  },
  {
    name: 'Day 11 - Typescript data type',
    link: 'typescript-data-type',
    active: false,
    children: [],
  },
];
