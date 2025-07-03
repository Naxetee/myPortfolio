// Archivo de prueba rápida para testear la conexión con el backend

import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api';

// Función para probar el endpoint de contact-messages
const testContactMessages = async () => {
  try {
    console.log('🔍 Testing contact-messages endpoint...');
    const response = await axios.get(`${API_BASE_URL}/contact-messages/`);
    console.log('✅ Contact Messages Response:', response.data);
    console.log('📊 Number of messages:', response.data.length);

    if (response.data.length > 0) {
      console.log('📝 First message:', response.data[0]);
    }
  } catch (error: any) {
    console.error('❌ Error fetching contact messages:', error.message);
    if (error.response) {
      console.error('Response status:', error.response.status);
      console.error('Response data:', error.response.data);
    }
  }
};

// Función para probar todos los endpoints disponibles
const testAllEndpoints = async () => {
  const endpoints = [
    'contact-messages',
    'projects',
    'about',
    'tags',
    'tag-categories',
    'experience',
    'social-media'
  ];

  console.log('🚀 Starting API tests...');
  console.log('Backend URL:', API_BASE_URL);

  for (const endpoint of endpoints) {
    try {
      console.log(`\n🔍 Testing ${endpoint}...`);
      const response = await axios.get(`${API_BASE_URL}/${endpoint}/`);
      console.log(`✅ ${endpoint} - Status: ${response.status}`);
      console.log(`📊 ${endpoint} - Count: ${response.data.length || 'N/A'}`);

      // Mostrar el primer elemento si existe
      if (Array.isArray(response.data) && response.data.length > 0) {
        console.log(`📝 ${endpoint} - First item:`, response.data[0]);
      } else if (!Array.isArray(response.data)) {
        console.log(`📝 ${endpoint} - Data:`, response.data);
      }
    } catch (error: any) {
      console.error(`❌ ${endpoint} - Error:`, error.message);
      if (error.response) {
        console.error(`${endpoint} - Status:`, error.response.status);
      }
    }
  }

  console.log('\n🏁 API tests completed!');
};

// Función para enviar un mensaje de prueba
const testSendMessage = async () => {
  try {
    console.log('\n📤 Testing POST to contact-messages...');
    const testMessage = {
      name: 'Test User',
      email: 'test@example.com',
      message: 'This is a test message from the frontend!'
    };

    const response = await axios.post(`${API_BASE_URL}/contact-messages/`, testMessage);
    console.log('✅ Message sent successfully!');
    console.log('📝 Response:', response.data);
  } catch (error: any) {
    console.error('❌ Error sending message:', error.message);
    if (error.response) {
      console.error('Response status:', error.response.status);
      console.error('Response data:', error.response.data);
    }
  }
};

// Exportar las funciones para usar desde otros archivos
export { testContactMessages, testAllEndpoints, testSendMessage };

// Si quieres ejecutar las pruebas automáticamente cuando importes este archivo
console.log('🧪 Testing module loaded. Available functions:');
console.log('- testContactMessages()');
console.log('- testAllEndpoints()');
console.log('- testSendMessage()');
console.log('\nTo run tests, call any of these functions from the browser console or import them in a component.');
