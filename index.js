async function callApi() {
  const res = await fetch("Access-Control-Allow-Origin:https://api.mihomo.me/sr_info_parsed/830647229?lang=jp", {
    mode: "cors",
  });
  const users = await res.json();
  console.log(users);
}

callApi();
