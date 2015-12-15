# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

coordinates = []

15.times do
  latitude = rand((37.7)..(37.8))
  longitude = rand((122.4)..(122.5)) * (-1)
  coordinates.push([latitude, longitude])
end

10.times do
  coordinate = coordinates.shift
  Bench.create!(
    description: "Basic Bench",
    lat: coordinate[0],
    lng: coordinate[1]
  )
end
