let stats = document.querySelectorAll("ul li");
let container = document.querySelector(".tracking");
console.log(container)
stats.forEach(stat => stat.addEventListener('click', (e) => {
    stats.forEach(stat => stat.classList.remove("active"));
    e.target.classList.add("active");

    let active = e.target.innerHTML.toLowerCase();
    console.log(active);
    fetch("data.json").then(res => res.json()).then(res => {
        console.log(res);
        res.forEach(time => {
            let div = document.createElement("div");
            div.classList.add("time");
            div.classList.add(time.title.toLowerCase().split(" ").join("-"))
                ;
            container.innerHTML += `
                    <div class="time ${time.title.toLowerCase().split(" ").join("-")}">
          <div class="image">
            <img src="images/icon-${time.title.toLowerCase().split(" ").join("-")}.svg" alt="" />
          </div>
          <div class="content">
            <div class="title">
              <span>${time.title}</span>
              <img src="images/icon-ellipsis.svg" alt="ellipsis" />
            </div>
            <div class="info">
              <h2>${time.timeframes[active].current}hrs</h2>
              <p>Last ${active === "weekly" ? "week" : active === "daily" ? "day" : "month"} - ${time.timeframes[active].previous}hrs</p >
            </div >
          </div >
        </div >
                `;
        });
    });
    container.innerHTML = "";
}));
