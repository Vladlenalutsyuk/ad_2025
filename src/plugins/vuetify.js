// src/plugins/vuetify.js
import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components'; // Import all components
import * as directives from 'vuetify/directives';

export default createVuetify({
  components,
  directives,
  // Optional: Configure Vuetify options
  theme: {
    defaultTheme: 'light',
  },
});