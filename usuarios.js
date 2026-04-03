const express = require('express');
const router = express.Router();
const axios = require('axios');
const API_URL = 'http://localhost:3000/usuarioshttps://699e024478dda56d39695229.mockapi.io/flix/dev/usuarios';
// Buscar todos usuários
router.get('/', async (req, res) => {
  const response = await axios.get(API_URL);
  res.json(response.data);
});
// Buscar usuário por ID
router.get('/:id', async (req, res) => {
  const response = await axios.get(`${API_URL}/${req.params.id}`);
  res.json(response.data);
});
// Criar usuário
router.post('/', async (req, res) => {
  const response = await axios.post(API_URL, req.body);
  res.json(response.data);
});
// Atualizar usuário
router.put('/:id', async (req, res) => {
  const response = await axios.put(`${API_URL}/${req.params.id}`, req.body);
  res.json(response.data);
});
// Deletar usuário
router.delete('/:id', async (req, res) => {
  await axios.delete(`${API_URL}/${req.params.id}`);
  res.json({ mensagem: 'Usuário deletado com sucesso' });
});
module.exports = router;