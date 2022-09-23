const allDivs = document.querySelectorAll(".counter");

allDivs.forEach((counter) => {
    counter.innerText = "0";

    const updateCounter = () => {
        const c = +counter.innerText;
        const artis = 1000;
        const target = +counter.getAttribute("data-target");

        if (c < target) {
            counter.innerText = `${c + artis}`;
            setTimeout(updateCounter, 10);
        } else {
            counter.innerText = target;
        }
    };
    updateCounter();
});