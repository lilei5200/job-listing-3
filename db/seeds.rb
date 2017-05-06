# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



puts "这个seeds文件可以自动建立一个admin账号，并且创建10个public jobs,以及10各hidden jobs"

create_account = User.create([email: '123456@qq.com', password:'123456', password_confirmation: '123456', is_admin: 'true'])
puts "Admin account created."
