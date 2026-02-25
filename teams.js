const teamList = document.getElementById("team-list");

teams.forEach(team => {
  const li = document.createElement("li");
  li.textContent = team;
  teamList.appendChild(li);
});