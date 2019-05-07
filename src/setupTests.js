import Enyzme from 'enzyme';
import EnyzmeAdapter from 'enzyme-adapter-react-16';

Enyzme.configure({adapter: new EnyzmeAdapter(), disableLifeCylceMethods: true,});