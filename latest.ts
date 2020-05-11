import * as ts from 'typescript-latest';

function addTaggedTemplateLiteral(context: ts.TransformationContext): ts.Transformer<ts.SourceFile> {
  return sourceFile => {
    const template = ts.createNoSubstitutionTemplateLiteral('text', 'text');
    const taggedLiteral = ts.createTaggedTemplate(ts.createIdentifier('$localize'), template);
    const statement = ts.createStatement(taggedLiteral);
    return ts.updateSourceFileNode(sourceFile, [statement]);
  };
}

const result = ts.transpileModule('', {
  compilerOptions: { target: ts.ScriptTarget.ES5 },
  transformers: { before: [addTaggedTemplateLiteral]}});

console.log('LATEST');
console.log(result.outputText);
