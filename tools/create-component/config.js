/// <reference types="@pro-vision/pv-create-component/types.d.ts"/>

const COMPONENTS_DIR = 'src/components';
const BLOCKS_DIR = 'src/blocks';

const COMPONENT_TYPES = {
  BLOCK: 'Block',
  COMPONENT: 'Component',
};

/**
 * configuration to be used by `@pro-vision/pv-create-component` to generate questions and files for new components
 * @type {PvCreateComponent.Config}
 */
module.exports = [
  // Component Name
  {
    id: 'NAME',
    prompt: {
      name: 'name',
      type: 'input',
      message: "What's the component's name?:",
      validate(value) {
        // only letters and numbers. (no special characters such as '-' and '_')
        const pass = value.match(/(^[a-zA-Z0-9 ]+$)/g);
        if (pass) {
          return true;
        }

        return 'Please enter only letters, numbers and spaces';
      },
      filter(name) {
        // " Related Topics " -> "related topics"
        return (
          name
            .trim()
            .toLowerCase()
            // only one empty space between letters is allowed
            .replace(/ ( )+/g, ' ')
        );
      },
    },
  },
  // type
  {
    id: 'TYPE',
    prompt: {
      name: 'type',
      type: 'list',
      message: 'Type?',
      choices: [COMPONENT_TYPES.BLOCK, COMPONENT_TYPES.COMPONENT],
    },
  },
  // scss
  {
    id: 'SCSS',
    files: [
      {
        id: 'SCSS-FILE',
        template: require('./templates/scssTemplate'),
        path: (options) =>
          `${options.type === COMPONENT_TYPES.COMPONENT ? COMPONENTS_DIR : BLOCKS_DIR}/${options.kebabCase}/${options.kebabCase}.scss`,
      },
    ],
  },
  // markdown
  {
    id: 'MD',
    files: [
      {
        id: 'MD-FILE',
        template: require('./templates/mdTemplate'),
        path: (options) =>
          `${options.type === COMPONENT_TYPES.COMPONENT ? COMPONENTS_DIR : BLOCKS_DIR}/${options.kebabCase}/${options.kebabCase}.md`,
      },
    ],
  },
  // ts
  {
    id: 'TS',
    files: [
      {
        id: 'TS-FILE',
        template: (options) => {
          return options.type === COMPONENT_TYPES.COMPONENT
            ? require('./templates/tsTemplateComponent')(options)
            : require('./templates/tsTemplateBlock')(options);
        },
        path: (options) =>
          `${options.type === COMPONENT_TYPES.COMPONENT ? COMPONENTS_DIR : BLOCKS_DIR}/${options.kebabCase}/${options.kebabCase}.ts`,
      },
    ],
  },
];
