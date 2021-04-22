window.onload = () => {
    const swstart = document.getElementById("start");
    const display1 = document.getElementById("box_1");
    const display2 = document.getElementById("box_2");
    const display3 = document.getElementById("box_3");
    const stop1 = document.getElementById("stop_1");
    const stop2 = document.getElementById("stop_2");
    const stop3 = document.getElementById("stop_3");
    const results = document.getElementById("results");

    let time = 0, time2 = 0, time3 = 0;
    let mytimer1 = null;
    let mytimer2 = null;
    let mytimer3 = null;
    let random1 = null;
    let random2 = null;
    let random3 = null;
    let flag1 = false;
    let flag2 = false;
    let flag3 = false;
    swstart.addEventListener("click", () => {
        results.textContent = ``;
        flag1 = false;
        flag2 = false;
        flag3 = false;
        mytimer1 = setInterval(() => {
            display1.textContent = `${time++}`;
            if (time == 10) time = 0;
        }, 50);
        mytimer2 = setInterval(() => {
            display2.textContent = `${time2++}`;
            if (time2 == 10) time2 = 0;
        }, 50);
        mytimer3 = setInterval(() => {
            display3.textContent = `${time3++}`;
            if (time3 == 10) time3 = 0;
        }, 50);
    })
    stop1.addEventListener("click", () => {
        clearInterval(mytimer1);
        // random1 = Math.floor(Math.random() * 9);
        random1 = 1;
        flag1 = true;
        verify();
        display1.textContent = `${random1}`;
    })

    stop2.addEventListener("click", () => {
        clearInterval(mytimer2);
        // random2 = Math.floor(Math.random() * 9);

        random2 = 1;
        flag2 = true;
        verify();
        display2.textContent = `${random2}`;
    })

    stop3.addEventListener("click", () => {
        clearInterval(mytimer3);
        // random3 = Math.floor(Math.random() * 9);
        random3 = 1;
        flag3 = true;
        verify();
        display3.textContent = `${random3}`;
    })
    function verify() {

        if (flag1 && flag2 && flag3) {
            if (random1 == random2 && random2 == random3) {
                results.textContent = `Congratulations!`;
            } else if (random1 != random2 || random2 != random3) {
                results.textContent = `No way!`;
            }
        }

    }
    // verify();
}