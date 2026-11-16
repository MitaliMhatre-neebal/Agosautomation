// Parent Class
class Browser {
    launch() {
        console.log("Launching Browser");
    }
}

// Child Class
class Chrome extends Browser {
    launch() {
        console.log("Launching Chrome Browser");
    }
}

// Child Class
class Firefox extends Browser {
    launch() {
        console.log("Launching Firefox Browser");
    }
}

// Creating Objects
let browser;

browser = new Chrome();
browser.launch();

browser = new Firefox();
browser.launch();