# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

coordinates = []

10.times do
  latitude = rand((37.6)..(37.8))
  longitude = rand((122.4)..(122.5))
  coordinates.push([latitude, longitude])
end
