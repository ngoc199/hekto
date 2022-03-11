module.exports = function (plop) {
  // controller generator
  plop.setGenerator('component', {
    description: 'Create new component boilerplate',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Name of your component',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'components/{{titleCase name}}/{{titleCase name}}.tsx',
        templateFile: 'plop-templates/component.template.hbs',
      },
      {
        type: 'add',
        path: 'components/{{titleCase name}}/{{titleCase name}}.stories.tsx',
        templateFile: 'plop-templates/component.stories.template.hbs',
      },
      {
        type: 'add',
        path: 'components/{{titleCase name}}/index.ts',
        templateFile: 'plop-templates/component.index.template.hbs',
      },
    ],
  });

  plop.setHelper('titleCase', str => {
    return str.replace(/\w+\s*/g, txt => {
      const trimTxt = txt.trim();
      return (
        trimTxt.charAt(0).toUpperCase() + trimTxt.substring(1).toLowerCase()
      );
    });
  });
};
