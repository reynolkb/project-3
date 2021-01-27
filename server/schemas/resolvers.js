const { AuthenticationError } = require('apollo-server-express');
const { User, Palette } = require('../models');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
			if (context.user) {
				const userData = await User.findOne({
					_id: context.user._id,
				})
					.select('-__v -password');
				return userData;
			}

			throw new AuthenticationError('Not logged in');
        },
        // users: async () => {
		// 	return User.find()
		// 		.select('-__v -password')
		// 		.populate('myPalettes')
		// 		.populate('favorites');
		// },
		user: async (parent, { username }) => {
			return User.findOne({ username })
				.select('-__v -password')
				.populate('myPalettes')
				.populate('favorites');
        },
        palettes: async (parent, { username }) => {
			const params = username ? { username } : {};
			return Palette.find(params).sort({ createdAt: -1 });
		},
		palette: async (parent, { _id }) => {
			return Palette.findOne({ _id });
		},
    },
    Mutation: {
        addUser: async (parent, args) => {
			const user = await User.create(args);
			const token = signToken(user);

			return { token, user };
		},
		login: async (parent, { email, password }) => {
			const user = await User.findOne({ email });

			if (!user) {
				throw new AuthenticationError(
					'Incorrect credentials'
				);
			}

			const correctPw = await user.isCorrectPassword(
				password
			);

			if (!correctPw) {
				throw new AuthenticationError(
					'Incorrect credentials'
				);
			}

			const token = signToken(user);
			return { token, user };
        },
        addPalette: async (parent, args, context) => {
			if (context.user) {
				const palette = await Palette.create({
					...args,
					username: context.user.username,
				});

				await User.findByIdAndUpdate(
					{ _id: context.user._id },
					{ $push: { palettes: palette._id } },
					{ new: true }
				);

				return palette;
			}

			throw new AuthenticationError(
				'You need to be logged in!'
			);
        },
        removePalette: async (parent, args, context) => {
			if (context.user) {
				const deletePalette = await User.findByIdAndUpdate(
					{ _id: context.user._id },
					{ $pull: { palettes: palette._id } },
					{ new: true }
				);

				delete deletePalette;

				return deletePalette;
			}
        },
    }
};

module.exports = resolvers;