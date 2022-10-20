Feature('example')

Scenario('Should load example.com website Test-01',({I})=>{
    I.amOnPage('https://example.com')
    I.see('Example')
    //I.dontSee('Example')
    I.dontSee('Google')
    I.seeElement('h1')
    I.dontSeeElement('#mfnfmnvfm')
})

Scenario('Should load example.com website Test-02',({I})=>{
    I.amOnPage('https://example.com')
    I.see('Example')
    //I.dontSee('Example')
    I.dontSee('Google')
    I.seeElement('h1')
    I.dontSeeElement('#mfnfmnvfm')
})

Scenario('Should load example.com website Test-03',({I})=>{
    I.amOnPage('https://example.com')
    I.see('Example')
    //I.dontSee('Example')
    I.dontSee('Google')
    I.seeElement('h1')
    I.dontSeeElement('#mfnfmnvfm')
})