module.exports = {
	metadata_trigger: 'answerPoll',
	message_event: {
		event: {
			type: 'message_create',
			message_create: {
				target: {
					recipient_id: undefined,
				},
				message_data: {
					text: 'Azul ou Vermelho?',
					quick_reply: {
						type: 'options',
						options: [
							{
								label: 'Azul',
								metadata: 'pollOption1',
							},
							{
								label: 'Vermelho',
								metadata: 'pollOption2',
							},
						],
					},
				},
			},
		},
	},
};
