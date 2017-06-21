const CDP = require('chrome-remote-interface');

CDP(async (client) => {
    const check = '#my_db_entry_162825487 > div.ss_voting_title_column > ol.entry_actions.vote_action > li > a'
    const votes = '#my_db_entry_162825487 > div.entry_votes.entry_details.ss_btn > span'
    const {Page, Runtime} = client;
    await Promise.all([Page.enable(), Runtime.enable()]);
    Page.navigate({url: 'https://google.com'});
    Page.navigate({url: 'http://inside70pine.pgtb.me/nn7zPd/mKp2Z?w=59654641&e=162825487'});

    Page.loadEventFired(async () => {
      //scripts
      const clickEntry = "document.querySelector('#my_db_entry_162825487 > div.ss_voting_title_column > ol.entry_actions.vote_action > li > a').click()"
      const removeCookie = "document.cookie.split(';').forEach(function(c) { document.cookie = c.replace(/^ +/, '').replace(/=.*/, '=;expires=' + new Date().toUTCString() + ';path=/'); })";
      const viewEntry = "document.querySelector('#my_db_entry_162825487 > div.entry_votes.entry_details.ss_btn > span').textContent";
      const reloadPage = "location.reload()"
      //script running methods
      const clickResult = await Runtime.evaluate({expression: clickEntry});
      const viewResult = await Runtime.evaluate({expression: viewEntry});
      const removeThatShit = await Runtime.evaluate({expression: removeCookie});
      const reloadThatShit = await Runtime.evaluate({expression: reloadPage})
      //run the scripts
      clickResult
      console.log('clicked')
      //hide tracks
      removeThatShit
      reloadThatShit
      client.close();
    });
}).on('error', (err) => {
    console.error(err);
})
