import { inject, lifeCycleObserver, LifeCycleObserver } from '@loopback/core';
import { juggler } from '@loopback/repository';

const config = {
  name: 'Momgodb',
  connector: 'mongodb',
  url: 'mongodb+srv://prog_web:ProgWebMintic2022@clusterprogweb.p8ml1hi.mongodb.net/antatojaBD?retryWrites=true&w=majority',
  host: '',
  port: 0,
  user: '',
  password: '',
  database: '',
  useNewUrlParser: true
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class MomgodbDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'Momgodb';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.Momgodb', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
