<script setup>
import { ref, defineEmits } from 'vue'

const movieTitle = ref('')
const emit = defineEmits(['close'])

const closeModal = () => {
  emit('close')
}

const addMovie = async () => {
  const movie = {
      name: movieTitle.value,
  }

  try {
    const response = await fetch(`http://localhost:3000/movies`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // JSON-Daten werden gesendet
      },
      body: JSON.stringify(movie), // Konvertiere das Objekt in einen JSON-String
    })

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }
    const data = await response.json()
    console.log('Film hinzugefügt:', data)

    closeModal() // Schließe das Modal nach dem Hinzufügen
  } catch (error) {
    console.error('Fehler beim Hinzufügen des Films:', error)
  }
}
</script>

<template>
  <div class="modal-overlay" @click.self="closeModal">
    <div class="modal">
      <h2>Neuen Film hinzufügen</h2>
      <form>
        <label for="movieTitle">Titel:</label>
        <input id="movieTitle" v-model="movieTitle" type="text" placeholder="Filmtitel" required />
        <div class="modal-actions">
          <button type="submit" @click="addMovie">Hinzufügen</button>
          <button type="button" @click="closeModal">Abbrechen</button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal {
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  width: 90%;
  max-width: 400px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.modal h2 {
  margin-top: 0;
}

.modal label {
  display: block;
  margin: 1rem 0 0.5rem;
}

.modal input {
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.modal-actions {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
}

.modal-actions button {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.modal-actions button[type='submit'] {
  background-color: var(--tr-c-primary);
  color: white;
}

.modal-actions button[type='button'] {
  background-color: #ccc;
  color: black;
}
</style>
