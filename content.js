function darkenNextState() {
  var state = localStorage.getItem("darken-state");
  if (state === null)
    state = localStorage.getItem("darken-state", "1");
  if (state === "1" || state === null) {
    localStorage.setItem("darken-state", "2");
  } else {
    localStorage.setItem("darken-state", "1");
  }
}

darkenNextState();
darkenFromState();
