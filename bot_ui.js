         <div class="chat__intro__scroll botui-app-container overflow-auto" id="botui-app" ">
                 <bot-ui>
      
              </bot-ui>
             Scroll, if you don't feel like talking ⇣
         </div>


<script type="text/javascript">
  var botui = new BotUI('botui-app') // id of container
  botui.message.bot({ // show first message
    delay: 3000,
    content: 'hey there, hope you are having a good day.'
  }).then(() => {
    return botui.message.bot({ // second one
      delay: 2000, // wait 1 sec.
      content: 'I’m a Banglore based Networks Engineer. I like to code and hack stuff :P Would you like to know more about me or skip to next'
    })
  }).then(() => {
    return botui.action.button({ // let the user perform an action
      delay: 1000,
      action: [
        {
          text: 'More',
          value: 'more'
        },
        {
          text: 'Skip',
          value: 'skip'
        }
      ]
    })
  }).then(res => {
    return botui.message.bot({
      delay: 1000,
      content: `it's a ${res.text}!`
    })
})
</script>