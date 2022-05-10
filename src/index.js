import './styles/style.css';
import App from './modules/app';

const app = new App();

window.onload = () => {
  app.build();
};