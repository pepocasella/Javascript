<script setup>

import { ref, onMounted } from 'vue';
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { BalldontlieAPI } from "@balldontlie/sdk";


const api = new BalldontlieAPI({ apiKey: "9302bba5-0013-4183-abcc-638b6c05c45a" });

const team = ref([]); // torna os dados reativos
const teams = ref([]); // torna os dados reativos
const players = ref([]); // torna os dados reativos


async function getTeam() {
  try {
    const result = await api.nba.getTeam(27);
    team.value = result.data; // atualiza o ref com os dados da API
    console.log(team);
  } catch (error) {
    console.error(error);
  }
}

async function getTeams() {
  try {
    const result = await api.nba.getTeams();
    teams.value = result.data; // atualiza o ref com os dados da API
    console.log(team);
  } catch (error) {
    console.error(error);
  }
}

async function getPlayes() {
  await delay(5000)
  try {
    const result = await api.nba.getPlayers({team_ids:[27]});
    players.value = result.data; // atualiza o ref com os dados da API
    console.log(players);
  } catch (error) {
    console.error(error);
  }
}

async function delay(timeout) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  })
}

onMounted(() => {
  getTeam()
  getTeams(); // chama quando o componente é montado
  getPlayes();
});

</script>

<template>


  <div class="p-4 flex items-center justify-center">
    <Input />
    <Button>Click me</Button>
  </div>

  <div class="flex items-center justify-center min-h-screen">
    <Card class="p-1 shadow-lg rounded-2xl w-full max-w-md">
      <CardHeader>
        <Badge variant="destructive">Times da NBA</Badge>
      </CardHeader>
      <CardContent>
        <ul>
          <li v-for="team in teams" :key="team.id">
            {{ team.full_name + ' - ' + team.conference }}
          </li>
        </ul>
      </CardContent>
    </Card>
  </div>

  <div class="p-4 flex items-center justify-center">
      <Badge variant="destructive">Time {{ team.full_name }}</Badge>
  </div>

  <div class="flex items-center justify-center">
    <Card class="p-1 shadow-lg rounded-2xl w-full max-w-md">
      <CardHeader>
        <Badge variant="destructive">Jogadores</Badge>
      </CardHeader>
      <CardContent>
        <ul>
          <li v-for="player in players" :key="player.id">
            {{ player.first_name + ' - ' + player.last_name   + ' - ' + player.height }}
          </li>
        </ul>
      </CardContent>
    </Card>
  </div>

</template>
