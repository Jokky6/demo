let path = 'http://lin.jokky.fun/v1';
console.log('环境', process.env.UMI_ENV);
if (process.env.UMI_ENV === 'development') {
  path = 'http://lin.jokky.fun/v1';
}
export default path;
