# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Answer.destroy_all
Question.destroy_all
User.destroy_all

# Create User

user1 = User.create(username: 'Lavy', email: 'lavy@test.com', password_digest: 'Lavy123', is_admin: true)

puts "#{User.count} users created"

# Create Question

question1 = Question.create(post: 'What are ruby datatypes?', user: user1)
question2 = Question.create(post: 'What is the difference between calling super and calling super()?', user: user1)
question3 = Question.create(post: 'How to seed data in rails psql db?', user: user1)

puts "#{Question.count} questions created"


#Create Answer

answer1 = Answer.create(comment: 'Numbers, Strings, Symbols, Hashes, Arrays, Booleans', user: user1, question: question1)
answer2 = Answer.create(comment: 'super invokes the parent method with the same arguments that were passed to the child method.A super() invokes the parent method without any arguments', user: user1, question: question2)
answer3 = Answer.create(comment: 'rails db:reset', user: user1, question: question3)

puts "#{Answer.count} answers created"