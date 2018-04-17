/*eslint-disable no-console */
import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import chalk from 'chalk';

process.env.NODE_ENV = 'production';

console.log(chalk.blue('Generating minified bundle for production. This will take a moment...'));

webpack(webpackConfig).run((err, stats) =>{
  if(err){
    console.log(chalk.red(err));
    return 1;
  }
  const jsonStats = stats.jsonStats;

  if(jsonStats.hasErrors){
    return jsonStats.err.map(error => console.log(chalk.red(error)));
  }

  if(jsonStats.hasWarnings){
    console.log(chalk.yellow('Webpack generated the following warning: '));
    return jsonStats.warnings.map(warning => console.log(chalk.yellow(warning)));
  }

  console.log(`webpack stats: ${stats}`);

  // if we go this far, the build is succeded. test
  console.log(chalk.green('your app has been build fo production and written to /dist!'));

  return 0;

});
