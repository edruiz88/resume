// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })
const path = require('path')

fastify.register(require('fastify-static'), {
  root: path.join(__dirname, '../public'),
  prefix: '*', // optional: default '/'
})

//register template engine
fastify.register(require('point-of-view'), {
  engine: {
    pug: require('pug')
  }
})

fastify.register(require('fastify-nodemailer'), {
  pool: true,
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, // use TLS
  auth: {
      user: 'edruiz.dev@gmail.com',
      pass: 'Marcador0788%'
  }
})

// Declare a route
fastify.get('/:any', async (request, reply) => {
  reply.view('/src/views/main.pug', { text: 'text' })
  // return { hello: 'worldsa' }
})

fastify.post('/sendmail', (req, reply, next) => {
  let { nodemailer } = fastify
  let recipient = req.body.email

  console.log(req.body)

  var textBody = `FROM: ${req.body.name} EMAIL: ${req.body.email} MESSAGE: ${req.body.msg}`;
	var htmlBody = `<h2>Mail From Contact Form</h2><p>from: ${req.body.name} <a href="mailto:${req.body.email}">${req.body.email}</a></p><p>${req.body.msg}</p>`;

  nodemailer.sendMail({
    from: 'sender@example.com',
    to: recipient,
		subject: "Mail From Contact Form", // Subject line
		text: textBody,
		html: htmlBody
  }, (err, info) => {
    if (err) next(err)
    reply.send({
      messageId: info.messageId
    })
  })
})

// Run the server!
const start = async () => {
  try {
    await fastify.listen(3000, '192.168.0.183')
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()