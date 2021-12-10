const puppeteer = require('puppeteer');
const path = require("path");

async function start(){

      try{
        const browser = await puppeteer.launch({
          headless: false,
          userDataDir: path.resolve(__dirname, "./perfil"),
          args: [
            "--disable-infobars",
            "--disable-blink-features=AutomationControlled",
            "--start-fullscreen",
          ],
          devtools:false,
          ignoreDefaultArgs: ["--enable-automation"],
        });

        const page = await browser.newPage();
        await page.setDefaultNavigationTimeout(0); 
        await page.setViewport({
          width: 1280,
          height: 720
        })
        await page.goto(
          'http://EXEMPLE.EXEMPLE.COM/'
          );
        await page.waitForTimeout(15000);

        await page.type('[id="User"]', 'exempleUser')
        await page.type('[id="Password"]', 'exemplePassword')
        
        
        await page.evaluate(() => {
          //click no login
          document.querySelector("#loginForm > input.w-login-button.w-login-button--green").click()
        });
        console.log('login efetuado');

        
       // await page.waitForTimeout(15000);

        //await page.evaluate(() => {
        //  // click no combobox
        //  document.querySelector("#app-view > tasy-corsisf1 > div > w-mainlayout > div > div > feature-instance > atepacse > div > div.wschematic-nav-bar > tasy-listbox > div > div > a").click()
        //});
        //console.log('combo selector');
        
       // await page.waitForTimeout(3000);

      //await page.keyboard.press('ArrowDown');
     // await page.keyboard.press('Enter');
  }catch(erro){
    console.log(erro)
    await browser.close();
    start();
    
  }
    

  
}
start();