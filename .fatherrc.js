export default {
  cjs: 'babel',
  esm: { type: 'babel', importLibToEs: true },
  preCommit: {
    tslint: true,
    eslint: true,
    prettier: true,
  },
};
