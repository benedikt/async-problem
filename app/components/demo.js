import Component from '@glimmer/component';
import { service } from '@ember/service';
import { cached } from '@glimmer/tracking';

export default class DemoComponent extends Component {
  @service store;

  @cached
  get data() {
    return this.store.query('movie', {});
  }
}
