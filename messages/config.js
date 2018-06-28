const options = require('./options');

module.exports = {

	// this message is used if the bot can't find a response
	default_message: {
		event: {
			type: 'message_create',
			message_create: {
				target: {
					recipient_id: undefined,
				},
				message_data: {
					text: 'Perdão. Não entendo texto ainda, utilize os botões para interagir comigo.',
					// ctas: [
					// 	{
					// 		type: 'web_url',
					// 		label: 'Open a link',
					// 		url: 'www.google.com',
					// 	},
					// ],
					quick_reply: {
						type: 'options',
						options: [
							options.aboutPolitician,
							options.aboutTrajectory,
						],
					},
				},
			},
		},
	},

	// all message responses
	// Usage: Just keep adding the files in folder and their names here
	messages_files: [
		'aboutPolitician',
		'aboutTrajectory',
		'answerPoll',
		'contact',
		'mainMenu',
		'endPoll',
	],
};

