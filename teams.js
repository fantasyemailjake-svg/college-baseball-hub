const teamList = document.getElementById("team-list");

teams.forEach(team => {
  const li = document.createElement("li");
  li.textContent = team.name;   // ⭐ this is the key change
  teamList.appendChild(li);
});
