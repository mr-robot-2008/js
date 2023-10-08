var theater = theaterJS()

theater
  .on('type:start, erase:start', function () {
    theater.getCurrentActor().$element.classList.add('actor__content--typing')
  })
  .on('type:end, erase:end', function () {
    theater.getCurrentActor().$element.classList.remove('actor__content--typing')
  })
  .on('type:start, erase:start', function () {
    if (theater.getCurrentActor().name === 'vader') {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  })

theater
  .addActor('vader', { speed: 0.8, accuracy: 0.6 })
  .addActor('luke')
  .addScene('vader:Luke.', 600)
  .addScene('luke:What?', 400)
  .addScene('vader:I am your father.', 400)
  .addScene('luke:Nooo...', -3, '!!! ', 600, 'No! ', 600)
  .addScene('luke:That\'s not true!', 600)
  .addScene('luke:That\'s impossible!', 400)
  .addScene('vader:Search your feelings.', 1600)
  .addScene('vader:You know it to be true.', 1000)
  .addScene('luke:Noooooooo! ', 600, 'No!', 400)
  .addScene('vader:Luke.', 600)
  .addScene('vader:You can destroy the Emperor.', 1600)
  .addScene('vader:He has foreseen this. ', 800)
  .addScene('vader:It is your destiny.', 1600)
  .addScene('vader:Join me.', 800)
  .addScene('vader:Together we can rule the galaxy.', 800)
  .addScene('vader:As father and son.', 1600)
  .addScene('vader:Come with me. ', 800)
  .addScene('vader:It is the only way.', 2000)
  .addScene(theater.replay.bind(theater))
