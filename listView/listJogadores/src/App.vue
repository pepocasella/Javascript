<script setup>
import { ref, onMounted } from 'vue';
import { BalldontlieAPI } from "@balldontlie/sdk";

const api = new BalldontlieAPI({ apiKey: "9302bba5-0013-4183-abcc-638b6c05c45a" });


const times = ref([]); // torna os dados reativos

async function getTeams() {
  try {
    const team = await api.nba.getTeams();
    times.value = team.data; // atualiza o ref com os dados da API
  } catch (error) {
    console.error(error);
  }
}

onMounted(() => {
  getTeams(); // chama quando o componente é montado
});
</script>

<template>
  <h1>Times da NBA</h1>

  <ul>
    <li v-for="time in times" :key="time.id">
      {{ time.full_name + ' - ' + time.conference }}
    </li>
  </ul>
</template>


